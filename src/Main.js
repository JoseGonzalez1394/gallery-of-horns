import React from "react";
// import HornedBeast from "./HornedBeast";
import Data from "./data.json";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {

  render() {
    return (
      <>
      {Data.map((value) => (
        <HornedBeast
        _id = {value._id}
        image_url = {value.image_url}
        title = {value.title}
        description = {value.description}
        keyword = {value.keyword}
        horns = {value.horns}
        />
      ))}
      </>
    )
    }
}

export default Main;