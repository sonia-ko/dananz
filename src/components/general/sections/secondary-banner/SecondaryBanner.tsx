import React from "react";
import classes from "./SecondaryBanner.module.css";
import Image from "next/image";

interface SecondaryBannerProps {
  title: string;
  paragraph: string;
  image: {
    src: string;
    alt: string;
  };
}

const SecondaryBanner: React.FC<SecondaryBannerProps> = ({
  title,
  paragraph,
  image,
}) => {
  return (
    <section className={`${classes.container} container`}>
      <h1>{title}</h1>
      <p className={`${classes.p} text-size-s p-narrow`}>{paragraph}</p>
      <Image
        // layout="responsive"
        // fill={true}
        sizes="100vw"
        className={classes.image}
        width="1200"
        height="513"
        loading="lazy"
        src={image.src}
        alt={image.alt}
        // priority={true}
      />
    </section>
  );
};

export default SecondaryBanner;
