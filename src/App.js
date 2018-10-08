import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      currentImageIndex: 0
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

	// function that decrements index to previous picture or resets to last index.
  previousSlide () {
  const lastIndex = imgUrls.length - 1;
  const { currentImageIndex } = this.state;
  const shouldResetIndex = currentImageIndex === 0;
  const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

  this.setState({
    currentImageIndex: index
  });
}

// function that increments index to next picture or resets to first picture.
nextSlide () {
  const lastIndex = imgUrls.length - 1;
  const { currentImageIndex } = this.state;
  const shouldResetIndex = currentImageIndex === lastIndex;
  const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

  this.setState({
    currentImageIndex: index
  });
}

  render () {
     return (
       <div className="carousel">
         <Arrow
           direction="left"
           clickFunction={ this.previousSlide }
           glyph="&#9664;" />

         <ImageSlide url={ imgUrls[this.state.currentImageIndex] } />

         <Arrow
           direction="right"
           clickFunction={ this.nextSlide }
           glyph="&#9654;" />
       </div>
     );
   }
}

// the image slide functional component.
const ImageSlide = ({ url }) => {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div className="image-slide" style={styles}></div>
  );
}
// Arrow takes in direction as input
const Arrow = ({ direction, clickFunction, glyph }) => (
  <div
    className={ `slide-arrow ${direction}` }
    onClick={ clickFunction }>
    { glyph }
  </div>
);
// sample images hosted online
const imgUrls = [
	"https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781",
	"https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900",
	"https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328",
];

export default App;
