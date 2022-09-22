import React from "react";
import Data from "./Data.json";
import HornedBeast from "./HornedBeast";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class Main extends React.Component {

  render() {
    return (
      <>
        <p className="fw-bold text-center border border-info .bg-secondary p-3 mb-2 bg-info text-dark">Please Click on Your Favorite Horned Beast! </p>
        <div className="d-flex flex-wrap justify-content-center" >
          <Container>
            <Row>
            {Data.map((value) => (
                <Col sm>
                  <HornedBeast
                    _id={value._id}
                    image_url={value.image_url}
                    title={value.title}
                    description={value.description}
                    keyword={value.keyword}
                    horns={value.horns}
                    favorites={`Favorites: `}
                    key={value._id}
                  />
                </Col>
            ))}
            </Row>
          </Container>

        </div>
      </>
    )
  }
}

export default Main;
