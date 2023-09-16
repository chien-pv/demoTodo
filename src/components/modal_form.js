import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalForm(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          type="text"
          className="form-control"
          placeholder="Enter todo..."
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => props.handleClose(false)}>
          {props.buttonText}
        </Button>
        <Button variant="secondary" onClick={() => props.handleClose(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalForm;
