import React, { Component } from "react";
//import { Link } from "react-router-dom";
import {
  Form,
  Card,
  Button,
  FormGroup,
  Col,
  //ThemeProvider,
} from "react-bootstrap";
import Input from "../../../elements/Input/Input";
import { connect } from "react-redux";
import * as FormUtils from "../../../../utils/modalFormUtils";
import * as userActions from "../../../../redux/actions/userAction";
import { inputRegisterUserConfiguration } from "../../../elements/Input/InputUserConfiguration";
import SuccessModal from "../../../elements/Modals/SuccessModal/SuccessModal";
import ErrorModal from "../../../elements/Modals/ErrorModal/ErrorModal";
import * as errorHandlerActions from "../../../../redux/actions/errorHandlerActions";

class RegiserPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userForm: inputRegisterUserConfiguration(),
      isFormValid: false,
      submitted: false,
    };
  }

  registerUser = (event) => {
    event.preventDefault();
    //this.setState({ submitted: true });
    const user = {
      firstName: this.state.userForm.firstName.value,
      lastName: this.state.userForm.lastName.value,
      email: this.state.userForm.email.value,
      username: this.state.userForm.username.value,
      password: this.state.userForm.password.value,
      passwordConfirm: this.state.userForm.passwordConfirm.value,
    };
    this.props.onUserRegister(user, { ...this.props.state });
  };

  handleEventChange = (event, id) => {
    const updateForm = { ...this.state.userForm };
    updateForm[id] = FormUtils.validateElement(event, updateForm, id);
    const invalidCount = FormUtils.countInvalidElement(updateForm);
    this.setState({
      userForm: updateForm,
      isFormValid: invalidCount === 0,
    });
  };

  redirectToHome = () => {
    this.props.history.push("/");
  };

  render() {
    const elementarray = FormUtils.convertStateToObjArray({
      ...this.state.userForm,
    });

    return (
      <Card>
        <Form horisontal="true" onSubmit={this.registerUser}>
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
                Register
              </Button>
            </Col>
            <Col md={1}>
              <Button bsstyle="danger" onClick={this.redirectToHome}>
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
            this.props.onCloseSuccessModal("/", { ...this.props })
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
    data: state.repUser.data,
    showSuccessModal: state.repUser.showSuccessModal,
    showErrorModal: state.error.showErrorModal,
    errorMessage: state.error.errorMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUserRegister: (user, props) => {
      dispatch(userActions.register(user, props));
    },
    onCloseSuccessModal: (url, props) => {
      dispatch(userActions.closeSuccessModal(url, props));
    },
    onCloseErrorModal: () => {
      dispatch(errorHandlerActions.actCloseErrorModal());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RegiserPage);
