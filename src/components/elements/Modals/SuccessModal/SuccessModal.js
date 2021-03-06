import React from "react";
import ChildProps from "../../../../hoc/ChildProps/ChildProps";
import { Modal, Button } from "react-bootstrap";
import "../Modals.css";

const successModal = (props) => {
  return (
    <ChildProps>
      <Modal show={props.show} backdrop="static">
        <Modal.Header> {props.modalHeaderText}</Modal.Header>
        <Modal.Body>{props.modalBodyText}</Modal.Body>
        <Modal.Footer>
          <Button bsstyle="success" onClick={props.successClick}>
            {props.okButtonText}
          </Button>
        </Modal.Footer>
      </Modal>
    </ChildProps>
  );
};

export default successModal;
