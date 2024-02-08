import React from "react";
import { image } from "@/types/types";
import { useState } from "react";
import SliderArrowLeft from "./SliderArrowLeft";
import SliderArrowRight from "./SliderArrowRight";
import classes from "./ImageSlider.module.css";
import { motion, AnimatePresence } from "framer-motion";

interface ImageSliderProps {
  images: image[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const slidesNum = images.length;

  const goToNextSlide = () => {
    setCurrentImg((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentImg(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className={`${classes.container}`}>
      <SliderArrowLeft onClick={goToPrevSlide} />

      <AnimatePresence mode="wait">
        <motion.img
          className={classes.img}
          key={currentImg}
          src={images[currentImg].src}
          alt={`Image ${currentImg}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </AnimatePresence>

      <SliderArrowRight onClick={goToNextSlide} />
    </div>
  );
};

export default ImageSlider;
