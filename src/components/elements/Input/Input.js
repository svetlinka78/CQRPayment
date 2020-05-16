import React from "react";
import ChilsProps from "../../../hoc/ChildProps/ChildProps";
import { FormGroup, Col, FormControl, FormLabel } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import "react-datepicker/dist/react-datepicker";
import "./Input.css";
//import moment from "moment";

const input = (props) => {
  let field = null;
  let errorMsg = null;

  if (props.invalid && props.shouldValidate && props.touched) {
    errorMsg = <em>{props.errorMessage}</em>;
  }

  switch (props.elementType) {
    case "input":
      field = (
        <FormGroup controlId={props.id}>
          <Col className={FormLabel} sm={2}>
            {props.label}
          </Col>
          <Col sm={6}>
            <FormControl
              type={props.type}
              value={props.value}
              onChange={props.changed}
              onBlur={props.blur}
            ></FormControl>
          </Col>
          <Col>
            <em>{errorMsg}</em>
          </Col>
        </FormGroup>
      );
      break;
    case "datePicker":
      field = (
        <FormGroup controlId={props.id}>
          <Col className={FormLabel} sm={2}>
            {props.label}
          </Col>
          <Col sm={6}>
            <DatePicker
              selected={props.value}
              dateFormat="dd-MM-yyyy"
              onChange={props.changed}
              className="datePickerControl"
              showYearDropdown
              dropdownMode="select"
            ></DatePicker>
          </Col>

          <Col>
            <em>{errorMsg}</em>
          </Col>
        </FormGroup>
      );
      break;
    default:
      field = null;
  }
  return <ChilsProps>{field}</ChilsProps>;
};

export default input;
