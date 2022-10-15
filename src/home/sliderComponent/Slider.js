import React, { useState } from "react";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length - 1) {
      setSlideIndex(0);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 0) {
      setSlideIndex(dataSlider.length - 1);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };
  return (
    <div className="home--slider--container">
      <div className="slider--container">
        {dataSlider.map((obj, index) => {
          return (
            <div
              className={slideIndex === index ? "slide active-anim" : "slide"}
            >
              <img src={obj.img} alt="placeholder" />
              <label>{obj.description}</label>
            </div>
          );
        })}
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      </div>
      <div className="dots--container">
        {Array.from({ length: parseInt(dataSlider.length) }).map(
          (item, index) => (
            <div
              onClick={() => moveDot(index)}
              className={slideIndex === index ? "dot active" : "dot"}
            ></div>
          )
        )}
      </div>
    </div>
  );
};

export default Slider;
