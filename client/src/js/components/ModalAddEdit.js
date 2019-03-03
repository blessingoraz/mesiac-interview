import React from 'react';

import { Modal } from 'react-bootstrap';

// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

import AddEditForm from './AddEditForm';

export default function ModalComponent(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Student
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <AddEditForm/>
        
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Add</Button>
      </Modal.Footer> */}
    </Modal>
  );
}
