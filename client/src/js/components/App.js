import React, { Component } from 'react';
import { Jumbotron, Table, Button } from 'react-bootstrap';

// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

import { data } from '../../mockData';
import defaultImg from '../../images/default.png';

class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Button>Add Student </Button>
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
                    <td><Button>Edit</Button></td>
                    <td><Button variant="danger">Delete</Button></td>
                  </tr>
                );
              })
              }
            </tbody>
          </Table>
        </Jumbotron>
      </div>
    );
  }
}

export default App;