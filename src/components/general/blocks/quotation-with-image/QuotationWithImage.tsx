import React from "react";
import classes from "./QuotationWithImage.module.css";
import Image from "next/image";
import Button from "../../button/button";
import { useRouter } from "next/router";

interface QuotationWithImageProps {
  image: { src: string; alt: string };
  title?: string;
  quoteText: string;
  linkTo: string;
  quoteAuthor: {
    authorName: string;
    title: string;
    imageSrc: string;
  };
  btnText?: string;
  imgOnTheLeft?: boolean;
}

const QuotationWithImage: React.FC<QuotationWithImageProps> = ({
  quoteText,
  quoteAuthor,
  linkTo,
  image,
  btnText = "Learn More",
  imgOnTheLeft = true,
  title,
}) => {
  const router = useRouter();

  return (
    <div
      className={`${classes.container} ${
        !imgOnTheLeft && classes.imgRightContainer
      }`}
    >
      <div className={classes.imageContainer}>
        <Image
          className={`${classes.image}`}
          width="883"
          height="525"
          src={image.src}
          alt={image.alt}
          loading="lazy"
          sizes="100vw"
        />
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
          <p className="text-gray text-size-s">{quoteAuthor.title}</p>
        </div>
      </div>

      <div className={classes.quoteTextContainer}>
        {title && <h5 className={classes.title}>{title}</h5>}
        <p className={`${classes.quoteText} text-gray text-size-s`}>
          {quoteText}
        </p>
        <Button
          onClick={() => {
            router.push(linkTo);
          }}
          btnStyle="blue"
          btnText={btnText}
        />
      </div>
    </div>
  );
};

export default QuotationWithImage;
