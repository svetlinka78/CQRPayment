import React, { Component } from "react";
import { connect } from "react-redux";
import ChildProps from "../../../../hoc/ChildProps/ChildProps";
import { Card, Button, Col, Row, FormLabel } from "react-bootstrap";
import Moment from "react-moment";

import * as customerActions from "../../../../redux/actions/customerActions";
import * as errorHandlerActions from "../../../../redux/actions/errorHandlerActions";
import SuccessModal from "../../../elements/Modals/SuccessModal/SuccessModal";
import ErrorModal from "../../../elements/Modals/ErrorModal/ErrorModal";

class DeleteCustomerModal extends Component {
  componentDidMount = () => {
    const id = this.props.match.params.id;
    this.props.onGetCustomerById(id, { ...this.props });
  };

  redirectToCustomerList = () => {
    this.props.history.push("/customer-list");
  };

  deleteCustomer = (event) => {
    event.preventDefault();
    const id = this.props.data.id;
    this.props.onDeleteCustomer(id, { ...this.props });
  };

  render() {
    const customer = { ...this.props.data };
    return (
      <ChildProps>
        <Row>
          <Col md={10}>
            <Card>
              <Row>
                <Col md={3}>
                  <FormLabel htmlFor="name">Customer name:</FormLabel>
                </Col>
                <Col md={7}>
                  <span name="name">{customer.name}</span>
                </Col>
              </Row>
              <Row>
                <Col md={3}>
                  <FormLabel htmlFor="birthDate">Date of birth:</FormLabel>
                </Col>
                <Col md={7}>
                  <span name="birthDate">
                    <Moment format="DD-MM-YYYY">{customer.birthDate}</Moment>
                  </span>
                </Col>
              </Row>
              <Row>
                <Col md={3}>
                  <FormLabel htmlFor="email">E-mail:</FormLabel>
                </Col>
                <Col md={7}>
                  <span name="email">{customer.email}</span>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={1}>
            <Button type="submit" bsstyle="info" onClick={this.deleteCustomer}>
              Delete
            </Button>
            <Col md={1}>
              <Button bsstyle="danger" onClick={this.redirectToCustomerList}>
                Cancel
              </Button>
            </Col>
          </Col>
        </Row>
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
      </ChildProps>
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
    onGetCustomerById: (id, props) =>
      dispatch(customerActions.actGetCustomerDataById(id, props)),
    onDeleteCustomer: (id, props) =>
      dispatch(customerActions.actDeleteCustomerData(id, props)),
    onCloseSuccessModal: (url, props) =>
      dispatch(customerActions.actCustomerCloseSuccessModal(url, props)),
    onCloseErrorModal: () => dispatch(errorHandlerActions.actCloseErrorModal()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteCustomerModal);
