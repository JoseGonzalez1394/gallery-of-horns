import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form  from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';

class FormBar extends React.Component {

  render() {

    return (
      <>
        <div>
          <Container>
          <Form>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="4">One Hundred</option>
            </Form.Select>
          </Form>
          </Container>
        </div>
      </>
    )
  };
}

export default FormBar;