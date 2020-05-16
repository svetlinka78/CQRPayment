import React, { Component } from "react";
import { connect } from "react-redux";
import ChildProps from "../../../../hoc/ChildProps/ChildProps";
import { Card, Button, Col, Row, FormLabel } from "react-bootstrap";
import Moment from "react-moment";

import * as customerActions from "../../../../redux/actions/customerActions";
import * as errorHandlerActions from "../../../../redux/actions/errorHandlerActions";
import SuccessModal from "../../../elements/Modals/SuccessModal/SuccessModal";
import ErrorModal from "../../../elements/Modals/ErrorModal/ErrorModal";

class HistoryCustomerModal extends Component {
  componentDidMount = () => {
    const id = this.props.match.params.id;
    this.props.onGetCustomerHistoryById(id, { ...this.props });
  };

  redirectToCustomerList = () => {
    this.props.history.push("/customer-list");
  };

  render() {
    let history = [];
    if (this.props.data && this.props.data.length > 0) {
      history = { ...this.props.data[0] };
    }
    return (
      <ChildProps>
        <Row>
          <Col md={10}>
            <Card>
              <Row>
                <Col md={3}>
                  <FormLabel htmlFor="action">Action name:</FormLabel>
                </Col>
                <Col md={7}>
                  <span name="action">{history.action}</span>
                </Col>
              </Row>

              <Row>
                <Col md={3}>
                  <FormLabel htmlFor="timestamp">Time of change:</FormLabel>
                </Col>
                <Col md={7}>
                  <span name="timestamp">{history.timestamp}</span>
                </Col>
              </Row>

              <Row>
                <Col md={3}>
                  <FormLabel htmlFor="who">Who changed:</FormLabel>
                </Col>
                <Col md={7}>
                  <span name="who">{history.who}</span>
                </Col>
              </Row>

              <Row>
                <Col md={3}>
                  <FormLabel htmlFor="name">Customer name:</FormLabel>
                </Col>
                <Col md={7}>
                  <span name="name">{history.name}</span>
                </Col>
              </Row>
              <Row>
                <Col md={3}>
                  <FormLabel htmlFor="birthDate">Date of birth:</FormLabel>
                </Col>
                <Col md={7}>
                  <span name="birthDate">
                    <Moment format="DD-MM-YYYY">{history.birthDate}</Moment>
                  </span>
                </Col>
              </Row>
              <Row>
                <Col md={3}>
                  <FormLabel htmlFor="email">E-mail:</FormLabel>
                </Col>
                <Col md={7}>
                  <span name="email">{history.email}</span>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={1}>
            {/* <Button type="submit" bsstyle="info" onClick={this.deleteCustomer}>
                  Delete
                </Button> */}
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
    onGetCustomerHistoryById: (id, props) =>
      dispatch(customerActions.actGetCustomerHistoryDataById(id, props)),
    // onDeleteCustomer: (id, props) =>
    //   dispatch(customerActions.actDeleteCustomerData(id, props)),
    onCloseSuccessModal: (url, props) =>
      dispatch(customerActions.actCustomerCloseSuccessModal(url, props)),
    onCloseErrorModal: () => dispatch(errorHandlerActions.actCloseErrorModal()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryCustomerModal);
