import React from 'react';
import { Table, Button } from 'react-bootstrap';

import { data } from '../../../mockData';
import defaultImg from '../../../images/default.png';

export default function TableComponent(props) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Birth Date</th>
          <th>Hobbies</th>
          <th>Photo</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        { data.map((data, index) => {
          return (
            <tr key={index}>
              <td>{data.number}</td>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.birthDate}</td>
              <td>{data.hobbies}</td>
              <td><img src={defaultImg}/></td>
              <td><Button onClick={() => props.toggleModal('edit')}>Edit</Button></td>
              <td><Button variant="danger" onClick={() => props.toggleModal('delete')}>Delete</Button></td>
            </tr>
          );
        })
        }
      </tbody>
    </Table>
  );
}
