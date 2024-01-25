import React from "react";
import classes from "./ImageSlider.module.css";

interface SliderArrowRightProps {
  onClick: () => void;
}

const SliderArrowRight: React.FC<SliderArrowRightProps> = ({ onClick }) => {
  return (
    <button className={classes.sliderBtnRight} onClick={onClick}>
      <svg
        width="80"
        height="50"
        xmlns="http://www.w3.org/2000/svg"
        // viewBox="0 0 38 38"
      >
        <title>3-Arrow Right</title>
        <g id="_3-Arrow_Right" data-name="3-Arrow Right">
          <path d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z" />
        </g>
      </svg>
    </button>
  );
};

export default SliderArrowRight;
