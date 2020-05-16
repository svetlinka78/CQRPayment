import React from "react";
import { Row, Col, Table } from "react-bootstrap";
import Moment from "react-moment";

const customerAccounts = (props) => {
  let accounts = null;
  if (props.accounts) {
    accounts = props.accounts.map((account) => {
      return (
        <tr key={account.id}>
          <td>{account.nameType}</td>
          <td>
            <Moment format="DD/MM/YYYY">{account.createDate}</Moment>
          </td>
        </tr>
      );
    });
  }

  return (
    <Row>
      <Col>
        <Table>
          <thead>
            <tr>
              <th>Account Type</th>
              <th>Create Date</th>
            </tr>
          </thead>
          <tbody>{accounts}</tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default customerAccounts;
