import React from "react";
import img2 from "./images/image3.png";
import img3 from "./images/image7.png";
import img4 from "./images/image5.png";
import img5 from "./images/image2.png";
import img6 from "./images/image6.png";
const CarouselMotiva = () => {
  return (
    <div className="portadaContainer">
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img src={img2} className="d-block w-100 imgCaro" alt="..."></img>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={img3} className="d-block w-100 imgCaro" alt="..."></img>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={img4} className="d-block w-100 imgCaro" alt="..."></img>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={img5} className="d-block w-100 imgCaro" alt="..."></img>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={img6} className="d-block w-100 imgCaro" alt="..."></img>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CarouselMotiva;
