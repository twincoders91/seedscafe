import React from "react";
import leftArrow from "../../assets/home/sliderIcon/left-arrow.svg";
import rightArrow from "../../assets/home/sliderIcon/right-arrow.svg";

const BtnSlider = (props) => {
  return (
    <button
      onClick={props.moveSlide}
      className={
        props.direction === "next" ? "btn-slide next" : "btn-slide prev"
      }
    >
      <img
        src={props.direction === "next" ? rightArrow : leftArrow}
        alt="right arrow"
      />
    </button>
  );
};

export default BtnSlider;
