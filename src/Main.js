import React from "react";
import Data from "./Data.json";
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
        favorites = {`Favorites: `}
        key = {value._id}
        />
      ))}
      </>
    )
    }
}

export default Main;
