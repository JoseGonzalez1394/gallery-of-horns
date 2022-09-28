import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
 
  render() {

    return (
      <>
      <div className="d-flex flex-wrap justify-content-center bg-secondary" >
        <Modal show={this.state.showModel} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.displayBeast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.displayBeast.description}
            <img src={this.state.displayBeast.image_url} alt={this.state.displayBeast.title} /></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      </>
    )
  }
}



export default SelectedBeast;