import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: this.props.favorites
    }
  }

  handleClick = () => {
    this.setState({ favorites: this.state.favorites + "❤️" });
  }

  render() {
    return (
      < div className="HornedBeast">
        <Card style={{ width: "18rem" }} className="mx-auto my-5 border border-primaryd-flex flex-wrap justify-content-center">
          <Card.Img variant="bottom" src={this.props.image_url} />
          <Card.Body className="bg-info text-dark">
            <Card.Title className="fw-bold text-center" >{this.props.title}</Card.Title>
            <Card.Text className="fw-bold text-center">{this.props.description}</Card.Text>
            <Card.Text className="fw-bold text-center">{this.props.keyword}</Card.Text>
            <Card.Text className="fw-bold text-center">{this.props.horns} </Card.Text>
            <Card.Text className="fw-bold text-center">{this.state.favorites}</Card.Text>
            <Button className="fw-bold text-center position-relative top-100 start-50 translate-middle mt-1 bi bi-caret-down-fill bg-warning text-dark" variant="primary" onClick={this.handleClick}>Vote</Button>
          </Card.Body>
        </Card>
      </div>
    )
  };
}

export default HornedBeast;
