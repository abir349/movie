import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from "react-bootstrap/Button";


function Caroussel() {
      const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
        
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img width="1000" height="650"
          className="d-block w-100"
          src="http://www.doyouknowturkey.com/wp-content/uploads/2021/02/C%CC%A7ag%CC%86atay-Ulusoy-is-acting-as-Mehmet-in-Kag%CC%86ittan-Hayatlar-Papar-Lives-Turkish-original-film-on-Netflix.jpg"
          alt=""
        />
        <Carousel.Caption>
          <h1>Paper Lives</h1>
           <Button
        variant="dark"
        style={{ backgroundColor: "#FFD700", color: "white", border: "none" }}
      >
        See trailer
      </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width="1000" height="650"
          className="d-block w-100"
          src="https://img.republicworld.com/republic-prod/stories/images/15982586965f437e08b6fa9.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>The Circle</h1>
          <Button
        variant="dark"
        style={{ backgroundColor: "#FFD700", color: "white", border: "none" }}
      >
        See trailer
      </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width="1000" height="650"
          className="d-block w-100"
          src="https://www.indiewire.com/wp-content/uploads/2016/04/taxi-driver-1.jpg?w=670&h=377&crop=1"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>Taxi Driver</h1>
           <Button
        variant="dark"
        style={{ backgroundColor: "#FFD700", color: "white", border: "none" }}
      >
        See trailer
      </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
  )
}

export default Caroussel