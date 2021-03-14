import React, { Component } from "react";

export default class Searchbar extends Component {
  state = { term: "" };

  callSubmitReq = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.callSubmitReq}>
          <input
            onChange={(e) => {
              this.setState({ term: e.target.value });
            }}
            value={this.state.term.toUpperCase()}
            placeholder="Enter search term"
            type="text"
          />
        </form>
      </div>
    );
  }
}
