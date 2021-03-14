import React from "react";
import axios from "axios";
import Searchbar from "./components/Searchbar";
import Imagelist from "./components/Imagelist";
import Previewframe from "./components/Previewframe";
import "./App.css";

class App extends React.Component {
  state = { images: [] };

  submitForm = async (term) => {
    // console.log(term);
    const response = await axios.get("https://api.pexels.com/v1/search", {
      params: {
        query: term,
        per_page: 50,
      },
      headers: {
        Authorization:
          "563492ad6f9170000100000103a23f23443240c5b9447b22a5736ec1",
      },
    });

    this.setState({ images: response.data.photos });
  };

  setLike = (id) => {
    const images = this.state.images;
    images.forEach((image) => {
      if (image.id === id) {
        image.liked = true;
      } else {
        image.liked = false;
      }
    });
    const updatedImgs = images;
    this.setState({ images: updatedImgs });
  };

  render() {
    const images = this.state.images;
    let showPreview = false;

    images.forEach((image) => {
      if (image.liked === true) {
        showPreview = true;
      }
    });

    const length = images.length;
    // console.log(images);

    return (
      <div className="main-wrapper">
        <div className="search">
          <Searchbar onSubmit={this.submitForm} />
        </div>
        <div className="img-wrapper">
          {showPreview && <Previewframe images={this.state.images} />}

          {this.state.images.length === 0 ? null : (
            <Imagelist images={this.state.images} onLike={this.setLike} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
// Your API key: 563492ad6f9170000100000103a23f23443240c5b9447b22a5736ec1
