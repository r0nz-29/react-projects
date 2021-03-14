import React, { Component } from "react";
import Card from "./Card";

class Imagelist extends Component {
  render() {
    const images = this.props.images;
    return (
      <div className="list-container">
        {images.map((image) => (
          <Card key={image.id}>
            <img
              key={image.id}
              src={image.src.tiny}
              alt="lol"
              onClick={() => {
                this.props.onLike(image.id);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            />
          </Card>
        ))}
      </div>
    );
  }
}

export default Imagelist;
