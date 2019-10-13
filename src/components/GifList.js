import React from "react";

export default class GifList extends React.Component {
  render() {
    return (
      <li>
        <img src={this.props.gifImage} alt={this.props.gifTitle} />
      </li>
    );
  }
}
