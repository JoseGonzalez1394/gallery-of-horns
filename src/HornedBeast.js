import React from "react";

class HornedBeast extends React.Component {

  render() {
    return (
      < div className="HornedBeast">
        <h2>{this.props.title}</h2>
        <img src={this.props.image_url} alt={this.props.description} title={this.props.title} />
        <p> {this.props.keyword} </p>
      </div>
    )
  };
}

export default HornedBeast;
