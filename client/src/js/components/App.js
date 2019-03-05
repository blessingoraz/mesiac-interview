import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { BaseComponent } from './shared/baseComponent';
import ModalComponent from './shared/modalComponent';
import TableComponent from './table/TableComponent';

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

          <TableComponent toggleModal={this.toggleModal}/>
        </Jumbotron>
      </div>
    );
  }
}

export default App;