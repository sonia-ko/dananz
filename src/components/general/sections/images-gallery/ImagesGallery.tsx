import React from "react";
import { image } from "@/types/types";
import Image from "next/image";
import classes from "./ImagesGallery.module.css";
import ImageSlider from "../../blocks/image-slider/ImageSlider";

interface ImagesGalleryProps {
  images: image[];
}

const ImagesGallery: React.FC<ImagesGalleryProps> = ({ images }) => {
  const generateClass = (i: number) => {
    if (i % 3 === 0) {
      return "imgBig";
    } else {
      return "imgSmall";
    }
  };
  return (
    <section className="container">
      <div className={classes.container}>
        {images.map((image, i) => {
          const imgClass = generateClass(i + 1);
          return (
            <Image
              key={image.alt}
              className={`${classes[imgClass]} ${classes.img}`}
              width={(i + 1) % 3 === 0 ? "1200" : "584"}
              height="513"
              src={image.src}
              alt={image.alt}
              priority={true}
              sizes="100vw"
            />
          );
        })}
      </div>
      <div className={classes.mobileContainer}>
        <ImageSlider images={images} />
      </div>
    </section>
  );
};

export default ImagesGallery;
