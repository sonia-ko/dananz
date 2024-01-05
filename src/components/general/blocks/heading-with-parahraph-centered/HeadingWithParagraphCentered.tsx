import React from "react";
import classes from "./HeadingWithParagraphCentered.module.css";
import Link from "next/link";
import Image from "next/image";
import Button from "../../button/button";
import { useRouter } from "next/router";

interface HeadingWithParagraphCenteredhProps {
  heading: string;
  paragraph: string;
}

const HeadingWithParagraphCentered: React.FC<
  HeadingWithParagraphCenteredhProps
> = ({ heading, paragraph }) => {
  const router = useRouter();

  return (
    <div className={`${classes.container} margin-m`}>
      <h1 className={classes.heading}>{heading}</h1>
      <p className={`${classes.p} text-size-s p-narrow`}>{paragraph}</p>
    </div>
  );
};

export default HeadingWithParagraphCentered;
