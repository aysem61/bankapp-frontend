import React from "react";
import Banner1 from "../images/carousel/1.jpg";
import Banner2 from "../images/carousel/2.jpg";
import Banner3 from "../images/carousel/3.jpg";
import { Carousel } from "react-bootstrap";
import "./Banner.js";



const images = [
  {
    id: 1,
    image: Banner1,
    btnLabel: "Find out more",
    description: "Smarter Internet Banking",
    interval: 10000,
  },
  {
    id: 2,
    image: Banner2,
    btnLabel: "Find out more",
    description: "To Add value for your money",
    interval: 5000,
  },
  {
    id: 3,
    image: Banner3,
    btnLabel: "Find out more",
    description: "More Secure Services",
    interval: 15000,
  },
];
const Banner = () => {
  return (
    <div>
    <Carousel nextLabel="" prevLabel="">
    {images.map((data)=>{
      const{image,btnLabel,description,interval}=data;
    return(
      <Carousel.Item interval={interval}>
      <img className="d-block w-100" src={image} alt=" slide" />
      
      <Carousel.Caption>
      <div className="w-50 ms-5 text-center">
        <button className="btn btn-danger">{btnLabel}
        </button>
      </div>
          <p  className="text-dark carousel-desc">{description}</p>
        </Carousel.Caption>
      </Carousel.Item>)
    })}
      
      </Carousel>
      </div> 
        
  );
};

export default Banner;
