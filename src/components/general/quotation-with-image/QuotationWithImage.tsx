import React from "react";
import classes from "./QuotationWithImage.module.css";
import Image from "next/image";
import Button from "../button/button";

interface QuotationWithImageProps {
  image: { src: string; alt: string };
  quoteText: string;
  quoteAuthor: {
    authorName: string;
    title: string;
    imageSrc: string;
  };
}

const QuotationWithImage: React.FC<QuotationWithImageProps> = ({
  quoteText,
  quoteAuthor,
  image,
}) => {
  return (
    <div className={classes.container}>
      <Image
        className={classes.image}
        width="883"
        height="525"
        src={image.src}
        alt={image.alt}
        priority={false}
      />

      <div className={classes.quoteTextContainer}>
        <p className={`${classes.quoteText} text-gray`}>{quoteText}</p>
        <Button
          onClick={() => {}}
          btnStyle="blue"
          btnText="Learn More"
        ></Button>
      </div>

      <div className={classes.authorContainer}>
        <Image
          width="51"
          height="56"
          src={quoteAuthor.imageSrc}
          alt={quoteAuthor.authorName}
          priority={false}
          className={classes.quoteImage}
        />

        <p className={classes.authorName}>{quoteAuthor.authorName}</p>
        <p className="text-gray">{quoteAuthor.title}</p>
      </div>
    </div>
  );
};

export default QuotationWithImage;
