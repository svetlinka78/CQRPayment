import React from "react";
import ChildProps from "../../../hoc/ChildProps/ChildProps";
import Moment from "react-moment";
import { Button } from "react-bootstrap";

const redirectToDetails = (id, history) => {
  history.push("/customerDetails/" + id);
};

const redirectToUpdtate = (id, history) => {
  history.push("/customerUpdate/" + id);
};

const rediterctToDelete = (id, history) => {
  history.push("/customerDelete/" + id);
};

const rediterctToCustomerHistory = (id, history) => {
  history.push("/customerHistory/" + id);
};

const customer = (props) => {
  return (
    <ChildProps>
      <tr>
        <td>{props.customer.name}</td>
        <td>
          <Moment format="DD-MM-YYYY">{props.customer.birthDate}</Moment>
        </td>
        <td>{props.customer.email}</td>
        <td>
          <Button
            onClick={() => redirectToDetails(props.customer.id, props.history)}
          >
            Details
          </Button>
        </td>
        <td>
          <Button
            onClick={() => redirectToUpdtate(props.customer.id, props.history)}
          >
            Update
          </Button>
        </td>
        <td>
          <Button
            bsstyle="danger"
            onClick={() => rediterctToDelete(props.customer.id, props.history)}
          >
            Delete
          </Button>
        </td>
        <td>
          <Button
            onClick={() =>
              rediterctToCustomerHistory(props.customer.id, props.history)
            }
          >
            History
          </Button>
        </td>
      </tr>
    </ChildProps>
  );
};

export default customer;
