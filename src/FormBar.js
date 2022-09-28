import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';
// import Data from "./Data.json";
class FormBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // showModel: false,
      // displayBeast: {},
      // filteredBeast: HornedBeast,
      // BeastData: Data,
    }
  }

  // handleHornedBeast = (beast) => {
  //   this.setState({ displayBeast: beast });
  //   this.handleShow();
  // }
  
    handleSelect = event => {
      event.preventDefault();
      console.log(event.target.value);
      this.props.filteredHorn(event.target.value);
      // } else
      //   if (choice === '2') {
      //     newData = HornedBeast.filter(beast => beast.horns === 2 || beast.horns === 3);
      //     this.setState({ filteredHornCount: newData });
      //   } else
      //     if (choice === '4') {
      //       newData = HornedBeast.filter(beast => beast.horns === 100);
      //       this.setState({ filteredHornCount: newData });
      //     } else {
      //       this.setState({
      //         filteredBeast: HornedBeast
      //       })
      //     }
    };
  


    render() {

      return (
        <>
          <div>
            <Container>
              <Form className="dropDownFilter">
                <Form.Label> Click Below to Filter Gallery by Number of Horns </Form.Label>
                <Form.Control as ="select" onChange={this.handleSelect}>
                  <option value = "default">Filtering Horns Time 🦄 </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="100">One Hundred</option>
                </Form.Control>
              </Form>
            </Container>
          </div>
        </>
      )
    };
}

export default FormBar;