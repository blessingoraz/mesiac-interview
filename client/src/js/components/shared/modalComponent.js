import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import AddEditForm from '../AddEditForm';

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
          {props.description}
        </Modal.Title>
      </Modal.Header>
      
      {props.type !== 'delete' && <Modal.Body>
        <AddEditForm/>
      </Modal.Body>}

      <Modal.Footer>
        <Button onClick={props.onHide}>cancel</Button>
        <Button onClick={() => props.action()}>{props.type}</Button>
      </Modal.Footer> 
    </Modal>
  );
}
