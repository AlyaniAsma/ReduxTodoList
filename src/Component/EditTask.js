import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editTask } from "../JS/Actions/actions";

const EditTask = ({ todo }) => {
  const [editedTask, setEditedTask] = useState(todo.task);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const edit = () => {
    dispatch(editTask(todo.id, editedTask));
    handleClose();
  };

  return (
    <>
      <button variant="primary" onClick={handleShow}>
        Edit
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            onChange={(e) => setEditedTask(e.target.value)}
            className="form-control"
            value={editedTask}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={edit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditTask;
