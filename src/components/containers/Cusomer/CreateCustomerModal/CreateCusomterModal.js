import React, { Component } from "react";
import {
  Form,
  Card,
  Button,
  FormGroup,
  Col,
  //ThemeProvider,
} from "react-bootstrap";
import { connect } from "react-redux";
import Input from "../../../elements/Input/Input";
import { inputConfiguration } from "../../../elements/Input/InputConfiguration";
import * as FormUtils from "../../../../utils/modalFormUtils";
import * as customerActions from "../../../../redux/actions/customerActions";
import * as errorHandlerActions from "../../../../redux/actions/errorHandlerActions";
import SuccessModal from "../../../elements/Modals/SuccessModal/SuccessModal";
import ErrorModal from "../../../elements/Modals/ErrorModal/ErrorModal";

class CreateCusotmerModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customerForm: inputConfiguration(),
      isFormValid: false,
    };
  }

  createCustomer = (event) => {
    event.preventDefault();

    const customer = {
      name: this.state.customerForm.name.value,
      email: this.state.customerForm.email.value,
      birthDate: this.state.customerForm.birthDate.value,
    };

    this.props.onCustomerCreate(customer, { ...this.props });
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

  redirectToCustomerList = () => {
    this.props.history.push("/customer-list");
  };

  render() {
    const elementarray = FormUtils.convertStateToObjArray({
      ...this.state.customerForm,
    });
    return (
      <Card>
        <Form horisontal="true" onSubmit={this.createCustomer}>
          {elementarray.map((element) => {
            return (
              <Input
                key={element.id}
                elementType={element.config.element}
                id={element.id}
                label={element.config.label}
                type={element.config.type}
                value={element.config.value}
                errorMessage={element.config.errorMessage}
                invalid={!element.config.valid}
                shouldValidate={element.config.validation}
                touched={element.config.touched}
                changed={(event) => this.handleEventChange(event, element.id)}
                blur={(event) => this.handleEventChange(event, element.id)}
              />
            );
          })}
          <br />
          <FormGroup>
            <Col md={1}>
              <Button
                bsstyle="info"
                type="submit"
                disabled={!this.state.isFormValid}
              >
                {" "}
                Create
              </Button>
            </Col>
            <Col md={1}>
              <Button bsstyle="danger" onClick={this.redirectToCustomerList}>
                Cancel
              </Button>
            </Col>
          </FormGroup>
        </Form>
        <SuccessModal
          show={this.props.showSuccessModal}
          modalHeaderText={"Success message"}
          modalBodyText={"Completed successfully"}
          okButtonText={"OK"}
          successClick={() =>
            this.props.onCloseSuccessModal("/customer-list", { ...this.props })
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
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.repository.data,
    showSuccessModal: state.repository.showSuccessModal, //take "show" of SuceessModal element from reducers
    showErrorModal: state.error.showErrorModal,
    errorMessage: state.error.errorMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCustomerCreate: (customer, props) => {
      dispatch(customerActions.actPostCustomerData(customer, props)); //put new state of "show" throught actions
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
)(CreateCusotmerModal);
