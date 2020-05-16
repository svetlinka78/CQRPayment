import React, { Component } from "react";
import { Form, Card, Button, FormGroup, Col } from "react-bootstrap";
import { connect } from "react-redux";
import moment from "moment";
import Input from "../../../elements/Input/Input";
import { inputConfiguration } from "../../../elements/Input/InputConfiguration";
import * as FormUtils from "../../../../utils/modalFormUtils";
import * as customerActions from "../../../../redux/actions/customerActions";
import * as errorHandlerActions from "../../../../redux/actions/errorHandlerActions";
import SuccessModal from "../../../elements/Modals/SuccessModal/SuccessModal";
import ErrorModal from "../../../elements/Modals/ErrorModal/ErrorModal";

class UpdateCustomerModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customerForm: inputConfiguration(),
      isFormValid: false,
    };
  }

  componentDidMount = () => {
    const id = this.props.match.params.id;
    this.props.onGetCustomerById(id, { ...this.props });
  };

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    //const updatedForm = { ...this.state.customerForm };

    // this in babel behind the scene
    // let name = { ...updatedCustomerForm.name };
    // let date = { ...updatedCustomerForm.birthDate };
    // let email = { ...updatedCustomerForm.email };

    // in babel the property is assigned to variablie
    //const { name, birthDate, email, ...rest } = this.state.customerForm; //make a copy from whole object - object destruction
    const { name, birthDate, email } = this.state.customerForm; //make a copy from whole object - object destruction

    name.value = nextProps.data.name;
    name.valid = true;
    birthDate.value = moment(nextProps.data.birthDate, "DD-MM-YYYY").toDate();
    email.value = nextProps.data.email;
    email.valid = true;

    //const updatedForm = { name, birthDate,email, rest };
    const updatedForm = { name, birthDate, email };
    this.setState({ customerForm: updatedForm });
  };

  redirectToCustomerList = () => {
    this.props.history.push("/customer-list");
  };

  updateCustomer = (event) => {
    event.preventDefault();

    const customerUpdate = {
      id: this.props.data.id,
      name: this.state.customerForm.name.value,
      birthDate: this.state.customerForm.birthDate.value,
      email: this.state.customerForm.email.value,
    };

    this.props.onCustomerUpdate(customerUpdate, { ...this.props });
  };

  handleEventChange = (event, id) => {
    const updateForm = { ...this.state.customerForm };

    updateForm[id] = FormUtils.validateElement(event, updateForm, id);
    const invalidCount = FormUtils.countInvalidElement(updateForm);
    this.setState({
      customerForm: updateForm,
      isFormValid: invalidCount === 0,
    });
  };

  render() {
    const elementArray = FormUtils.convertStateToObjArray({
      ...this.state.customerForm,
    });
    return (
      <Card>
        <Form horisontal="true" onSubmit={this.updateCustomer}>
          {elementArray.map((element) => {
            return (
              <Input
                key={element.id}
                elementType={element.config.element}
                id={element.id}
                label={element.config.label}
                type={element.config.type}
                value={element.config.value}
                changed={(event) => this.handleEventChange(event, element.id)}
                errorMessage={element.config.errorMessage}
                invalid={!element.config.valid}
                shouldValidate={element.config.validation}
                touched={element.config.touched}
                blur={(event) => this.handleEventChange(event, element.id)}
              ></Input>
            );
          })}
          <br />
          <FormGroup>
            <Col md={1}>
              <Button
                type="submit"
                bsstyle="info"
                disabled={!this.state.isFormValid}
              >
                Update
              </Button>
            </Col>
            <Col md={1}>
              <Button bsstyle="danger" onClick={this.redirectToCustomerList}>
                Cancel
              </Button>
            </Col>
          </FormGroup>
          <SuccessModal
            show={this.props.showSuccessModal}
            modalHeaderText={"Success message"}
            modalBodyText={"Completed successfully"}
            okButtonText={"OK"}
            successClick={() =>
              this.props.onCloseSuccessModal("/customer-list", {
                ...this.props,
              })
            }
          ></SuccessModal>
          <ErrorModal
            show={this.props.showErrorModal}
            modalHeaderText={"Error message"}
            modalBodyText={this.props.errorMessage}
            okButtonText={"OK"}
            closeModal={() => {
              this.props.onCloseErrorModal();
            }}
          ></ErrorModal>
        </Form>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.repository.data,
    showSuccessModal: state.repository.showSuccessModal,
    showErrorModal: state.error.showErrorModal,
    errorMessage: state.error.errorMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetCustomerById: (id, props) => {
      dispatch(customerActions.actGetCustomerDataById(id, props));
    },
    onCustomerUpdate: (customer, props) => {
      dispatch(customerActions.actPutCustomerData(customer, props));
    },
    onCloseSuccessModal: (url, props) => {
      dispatch(customerActions.actCustomerCloseSuccessModal(url, props));
    },
    onCloseErrorModal: () => {
      dispatch(errorHandlerActions.actCloseErrorModal());
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateCustomerModal);
