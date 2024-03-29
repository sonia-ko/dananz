import React from "react";
import Image from "next/image";
import classes from "./ParagraphWithImageAndTitle.module.css";

interface ParagraphWithImageAndTitleProps {
  image: { src: string; alt: string };
  title: string;
  description: string;
}

const ParagraphWithImageAndTitle: React.FC<ParagraphWithImageAndTitleProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className={classes.container}>
      <Image
        className={classes.image}
        width="746"
        height="365"
        src={image.src}
        alt={image.alt}
        sizes="100vw"
        priority={false}
      />

      <div className={classes.textContainer}>
        <h5>{title}</h5>
        <p className="text-gray text-size-s">{description}</p>
      </div>
    </div>
  );
};

export default ParagraphWithImageAndTitle;
