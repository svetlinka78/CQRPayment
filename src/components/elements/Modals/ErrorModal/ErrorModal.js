import React from "react";
import { Modal, Button } from "react-bootstrap";
import ChildProps from "../../../../hoc/ChildProps/ChildProps";
import "../Modals.css";

const errorModal = (props) => {
  return (
    <ChildProps>
      <Modal show={props.show} backdrop="static">
        <Modal.Header>{props.modalHeaderText}</Modal.Header>
        <Modal.Body>
          <p>{props.modalBodyText}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button bsstyle="danger" onClick={props.closeModal}>
            {props.okButtonText}
          </Button>
        </Modal.Footer>
      </Modal>
    </ChildProps>
  );
};
export default errorModal;
