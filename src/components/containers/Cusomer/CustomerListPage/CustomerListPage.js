import React, { Component } from "react";
import { Table, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ChildProps from "../../../../hoc/ChildProps/ChildProps";
import { connect } from "react-redux";

import * as customerActions from "../../../../redux/actions/customerActions";
import Customer from "../../../elements/Customer/Customer";

class CustomerListPage extends Component {
  componentDidMount = () => {
    this.props.onGetData({ ...this.props });
};

  render() {
    let customers = [];
    if (this.props.data && this.props.data.length > 0) {
      customers = this.props.data.map((customer) => {
        return (
          <Customer key={customer.id} customer={customer} {...this.props} />
        );
      });
    }
    return (
      <ChildProps>
        <Row>
          <Col md={2}>
            <Link to="/customerCreate"> Create customer</Link>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date of birth</th>
                  <th>E-mail</th>
                  <th>Details</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>{customers}</tbody>
            </Table>
          </Col>
        </Row>
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
    onGetData: (props) => dispatch(customerActions.actGetCustomerData(props)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CustomerListPage);
