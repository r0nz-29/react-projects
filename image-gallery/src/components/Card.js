import React, { Component } from "react";
import "./card.css";

class Card extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="image">{this.props.children}</div>
        {/* <div className="btns">
          <button>b1</button>
          <button>b2</button>
          <button>b3</button>
        </div> */}
      </div>
    );
  }
}

export default Card;
