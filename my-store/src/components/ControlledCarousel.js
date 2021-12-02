import React from "react";
import Carousel from 'react-bootstrap/Carousel'

import 'bootstrap/dist/css/bootstrap.min.css';

import Shopping from './theshoppingmille.jpg'
import BlackfridayImg from './black-friday-sale-banner.jpg'
import Shopwatch from './ShopWatch.jpeg'
import '../style/ControlledCarousel.css'

export default function ControlledCarousel() {
    // const [index, setIndex] = useState(0);
  
    // const handleSelect = (selectedIndex, e) => {
    //   setIndex(selectedIndex);
    // };
  
    return (
      <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={BlackfridayImg}
      alt="First slide"
      width='1300px'
      height='200px'
    />
    <Carousel.Caption>
      <h3>Blackfriday is coming </h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={Shopping}
      alt="Second slide"
      width='1300px'
      height='200px'
    />
    <Carousel.Caption>
      <h3>Shopping for all age </h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={Shopwatch}
      alt="Third slide"
      width='1300px'
      height='200px'
    />
    <Carousel.Caption>
      <h3>Any kind of goods available</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
  }
  
  