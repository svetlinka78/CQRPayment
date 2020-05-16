import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Row, Col } from "react-bootstrap";
import * as customerActions from "../../../../redux/actions/customerActions";
import Moment from "react-moment";
import CustomerAccounts from "../../../elements/Customer/CustomerAccounts/CustomerAccounts";
import ChildProps from "../../../../hoc/ChildProps/ChildProps";

class CustomerDetails extends Component {
  componentDidMount = () => {
    let id = this.props.match.params.id;
    this.props.onGetCustomerById(id, { ...this.props });
  };

  getUserType = (user) => {
    let userType = null;
    if (user.accounts && user.accounts <= 3) {
      return (userType = (
        <Row>
          <Col md={3}>
            <strong>Type of user:</strong>
          </Col>
          <Col md={3}>
            <span className={"text-success"}>Low Level.</span>
          </Col>
        </Row>
      ));
    }
    //else
    return (userType = (
      <Row>
        <Col md={3}>
          <strong>Type of user:</strong>
        </Col>
        <Col md={3}>
          <span className={"text-success"}>Hight level.</span>
        </Col>
      </Row>
    ));
  };

  render() {
    const customer = this.props.data;
    return (
      <ChildProps>
        <Card>
          <Row>
            <Col md={3}>
              <strong>Customer Name :</strong>
            </Col>
            <Col md={3}>{customer.name}</Col>
          </Row>
          <Row>
            <Col md={3}>
              <strong>Date of birth:</strong>
            </Col>
            <Col md={3}>
              <Moment format="DD-MM-YYYY">{customer.birthDate}</Moment>
            </Col>
          </Row>
          {this.getUserType(urser)}
        </Card>
        <CustomerAccounts accounts={customer.accounts}></CustomerAccounts>
      </ChildProps>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.repository.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetCustomerById: (id, props) =>
      dispatch(customerActions.actGetCustomerDataById(id, props)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CustomerDetails);
