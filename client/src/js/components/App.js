import React from 'react';
import { Jumbotron, Table, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { BaseComponent } from './shared/baseComponent';

// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

import ModalComponent from './shared/modalComponent';

import { data } from '../../mockData';
import defaultImg from '../../images/default.png';

class App extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalType: '',
      modalShow: false,
      showAlert: true
    };
  }

  handleAddStudent = () => {
      this.closeModal();
  }

  handleUpdateStudent = () => {
    this.closeModal();
  }

  handleDelete = () => {
    this.closeModal();
  }

  toggleModal = (modalType) => {
    this.setState({
      modalType,
      modalShow: true
    });
  }

  closeModal = () => {
    this.setState({ modalShow: false, toggleModal: '' });
  }

  render() {

    let customProps = {};
    let Modal = ModalComponent;
    
    switch(this.state.modalType) {
      case 'add':
        customProps = {
          action: this.handleAddStudent,
          type: this.state.modalType,
          show: this.state.modalShow,
          onHide: this.closeModal,
          description: 'Add New Student'
        };
        break;

      case 'edit':
        customProps = {
          action: this.handleUpdateStudent,
          type: this.state.modalType,
          show: this.state.modalShow,
          onHide: this.closeModal,
          description: 'Update Student'
        };
        break;

      case 'delete':
        customProps = {
          action: this.handleDelete,
          type: this.state.modalType,
          show: this.state.modalShow,
          onHide: this.closeModal,
          description: 'Are you sure you want to delete this student?'
        };
        break;
      default:
        Modal = null;
    }

    return (
      <div>
        {this.state.showAlert && this.displayAlert('Message here')}
        
        <Jumbotron>
          <Button onClick={() => this.toggleModal('add')}>Add Student </Button>
          
          {this.state.modalType !== '' && <Modal {...customProps} />}

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
                    <td><Button onClick={() => this.toggleModal('edit')}>Edit</Button></td>
                    <td><Button variant="danger" onClick={() => this.toggleModal('delete')}>Delete</Button></td>
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