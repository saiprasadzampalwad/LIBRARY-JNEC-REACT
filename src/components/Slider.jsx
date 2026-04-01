import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = () => {
  return (
    <Container fluid style={{padding: '10px 0'}}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/10.jfif"
            alt="Library Slider 10"
            style={{height: '100vh', width: '100%', objectFit: 'cover'}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/1.jfif"
            alt="Library Slider 1"
            style={{height: '100vh', width: '100%', objectFit: 'cover'}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/2.jfif"
            alt="Library Slider 2"
            style={{height: '100vh', width: '100%', objectFit: 'cover'}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/3.jpg"
            alt="Library Slider 3"
            style={{height: '100vh', width: '100%', objectFit: 'cover'}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/7.jfif"
            alt="Library Slider 7"
            style={{height: '100vh', width: '100%', objectFit: 'cover'}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/8.jfif"
            alt="Library Slider 8"
            style={{height: '100vh', width: '100%', objectFit: 'cover'}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/9.jfif"
            alt="Library Slider 9"
            style={{height: '100vh', width: '100%', objectFit: 'cover'}}
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Slider;

