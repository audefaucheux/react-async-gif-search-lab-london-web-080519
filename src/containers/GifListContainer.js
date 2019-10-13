import React from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

export default class GifListContainer extends React.Component {
  state = {
    gifArray: [],
    userInput: "dog"
  };

  componentDidUpdate() {
    console.log("run componentDidMount");
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${this.state.userInput}&api_key=dc6zaTOxFJmzC&rating=g`
    )
      .then(resp => resp.json())
      .then(gifs => {
        let top3 = gifs.data.slice(0, 3);
        this.setState({
          gifArray: top3
        });
      });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      userInput: event.target[0].value
    });
  };

  render() {
    console.log("rendered");
    return (
      <div>
        <GifSearch handleSubmit={this.handleSubmit} />
        <ul>
          {this.state.gifArray.map(gif => (
            <GifList
              key={gif.id}
              gifImage={gif.images.original.url}
              gifTitle={gif.title}
            />
          ))}
        </ul>
      </div>
    );
  }
}
