import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Hero() {
  return (
    <>
      {/* Hero Banner */}
      <div className="w-full min-h-[75vh] flex justify-center items-center bg-gradient-to-r from-amber-600 to-amber-400 text-amber-50 px-4">
        <div className="max-w-3xl text-center">
          <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
            Discover the best deals on top-rated products – shop now and enjoy fast, free shipping on your first order!
          </h1>
        </div>
        <div className="w-full max-w-4xl mx-auto mt-8 px-4 ">
        <Carousel interval={2000} pause="hover">
          <Carousel.Item>
            <img
              className="d-block w-100 h-50 rounded-5xl border-2"
              src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First Slide Label</h3>
              <p>Some description for the first slide.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 rounded-lg"
              src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second Slide Label</h3>
              <p>Some description for the second slide.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 rounded-lg"
              src="https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third Slide Label</h3>
              <p>Some description for the third slide.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      </div>

      {/* Carousel Section */}
      </>
  );
}

export default Hero;