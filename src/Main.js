import React from "react";
import Data from "./Data.json";
import HornedBeast from "./HornedBeast";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormBar from "./FormBar";
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModel: false,
      displayBeast: {},
      filteredBeast: HornedBeast,
      BeastData: Data,
    }
  }

  handleClose = () => this.setState({ showModel: false });
  handleShow = () => this.setState({ showModel: true });
  handleHornedBeast = (beast) => {
    this.setState({ displayBeast: beast });
    this.handleShow();
  }

  filteredHorn = (valueofHorns) => {
    if (valueofHorns === "default") {
      this.setState({ BeastData: Data });
    } else {
      let filteredHorn = Data.filter(value =>
        value.horns === parseInt(valueofHorns));
      console.log(filteredHorn);
      this.setState({ BeastData: filteredHorn });
    }
  }

  render() {
    return (
      <>
        <p className="fw-bold text-center border border-info .bg-secondary p-3 mb-2 bg-primary text-dark">Please Click on Your Favorite Horned Beast to Vote! </p>
        <FormBar filteredHorn={this.filteredHorn} />
        <div className="d-flex flex-wrap justify-content-center bg-secondary" >
          <Container>
            <Row>
              {this.state.BeastData.map((objectBeast, index) => (
                <Col key={index} sm>
                  <HornedBeast
                    _id={objectBeast._id}
                    image_url={objectBeast.image_url}
                    title={objectBeast.title}
                    description={objectBeast.description}
                    keyword={objectBeast.keyword}
                    horns={objectBeast.horns}
                    favorites={`Favorites: `}
                    key={objectBeast._id}
                    selectBeast={() => this.handleHornedBeast(objectBeast)}
                    show={this.state.showModel}
                    onHide={this.handleClose}
                  />
                </Col>
              ))}
            </Row>
            <Modal show={this.state.showModel} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{this.state.displayBeast.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body className="d-flex flex-wrap justify-content-center">
                {this.state.displayBeast.description}
                <img src={this.state.displayBeast.image_url} alt={this.state.displayBeast.title} /></Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Container>
        </div>
      </>
    )
  }
}

export default Main;
