import ModalForm from "./modal_form";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Item() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const [showdelete, setDeleteShow] = useState(false);
  const handleShowDelete = () => setDeleteShow(true);
  const handleCloseDelete = () => setDeleteShow(false);

  return (
    <div className="Item row">
      <div className="col-10">Hoc ReactJS</div>
      <div className="col-1">
        <button onClick={handleShowDelete} className="btn btn-danger">
          <i className="fa fa-trash"></i>
        </button>
      </div>
      <div className="col-1">
        <button onClick={handleShow} className="btn btn-info">
          <i className="fa fa-edit"></i>
        </button>
      </div>
      <ModalForm
        buttonText="Edit"
        title="Edit todo"
        show={show}
        handleClose={setShow}
      />

      <Modal show={showdelete} onHide={handleCloseDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Delete this Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You Sure ?????? </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseDelete}>
            Delete
          </Button>
          <Button variant="primary" onClick={handleCloseDelete}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Item;
