import React from 'react';

import { Form, Button } from 'react-bootstrap';

// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AddEditForm() {
  return (
    <Form>
      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter first name" />
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter last name" />
        <Form.Label>Birth Date</Form.Label>
        <Form.Control type="date" placeholder="Enter first name" />
        <Form.Label>Hobbies</Form.Label>
        <Form.Control type="text" placeholder="Enter hobbies" />
        <Form.Label>Photo</Form.Label>
        <Form.Control type="file" placeholder="Enter first name" />
            
      </Form.Group>
      <Button variant="primary" type="submit">
            Submit
      </Button>
    </Form>
  );
}
