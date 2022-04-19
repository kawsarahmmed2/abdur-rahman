import React from "react";
import { Carousel } from "react-bootstrap";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <div className="background-img1"></div>
          <Carousel.Caption className="header-title">
            <h3>Travel & Explore</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <button className="btn header-button-tour">
              Book your tour{" "}
              {
                <ArrowNarrowRightIcon className="arrow-icon"></ArrowNarrowRightIcon>
              }
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="background-img2"></div>
          <Carousel.Caption className="header-title">
            <h3>Look & Fell The World</h3>
            <p>
              Phasellus sagittis sam eget sapien consequat, vitaa porttitor
              felis. Nullam suscipit condimentum hendrerit
            </p>
            <button className="btn header-button-tour">
              Book your tour{" "}
              {
                <ArrowNarrowRightIcon className="arrow-icon"></ArrowNarrowRightIcon>
              }
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="background-img3"></div>
          <Carousel.Caption className="header-title">
            <h3>Relax & Enjoy the World</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <button className="btn header-button-tour">
              Book your tour{" "}
              {
                <ArrowNarrowRightIcon className="arrow-icon"></ArrowNarrowRightIcon>
              }
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
