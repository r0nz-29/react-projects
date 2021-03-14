import React, { Component } from "react";
import "./Previewframe.css";

class Previewframe extends Component {
  render() {
    const images = this.props.images;
    const length = images.length;

    // console.log(images);

    return (
      <>
        {length !== 0 ? (
          <div className="container">
            {images.map((image) =>
              image.liked ? (
                <div style={wrapper} key={image.id}>
                  <div>
                    <div className="info">
                      <div className="photographer">
                        <h1>Captured By</h1>
                        <span className="name">
                          <span className="dot">•</span>
                          {image.photographer}
                        </span>
                      </div>

                      <div className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam ut tellus imperdiet tellus imperdiet efficitur non
                        vitae ligula. Praesent molestie, lectus non porttitor
                        vulputate, ipsum velit suscipit risus, vel commodo elit
                        sapien nec sem. Nulla aliquam venenatis justo dapibus
                        vulputate. Ut sed orci eget tortor suscipit porta.Donec
                        sed metus nisi. Nam in accumsan ante. Donec bibendum
                        ligula sit amet neque tristique, nec placerat quam
                        aliquet. In molestie lectus sit amet efficitur rhoncus.
                        Donec eleifend ut risus finibus ullamcorper. Aliquam et
                        quam non justo posuere pharetra. Praesent ornare mollis
                        metus, nec pharetra nulla vestibulum cursus. Integer
                        tempor bibendum pretium. Nam eleifend ligula non nibh
                        sodales, sed mattis nisl gravida. Donec id porttitor
                        justo. Suspendisse ac tristique justo.
                      </div>
                    </div>
                  </div>
                  <img key={image.id} src={image.src.large} alt="lol" />
                </div>
              ) : null
            )}
          </div>
        ) : null}
      </>
    );
  }
}

const wrapper = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  width: "100%",
};

export default Previewframe;
