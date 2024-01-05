import React from "react";
import classes from "./HeadingWithParahgraph.module.css";
import Link from "next/link";
import Image from "next/image";
import Button from "../../button/button";
import { useRouter } from "next/router";

interface HeadingWithParahgraphProps {
  heading: string;
  paragraph: string;
}

const HeadingWithParahgraph: React.FC<HeadingWithParahgraphProps> = ({
  heading,
  paragraph,
}) => {
  const router = useRouter();

  return (
    <div className={`${classes.container} margin-m`}>
      <h3 className={classes.heading}>{heading}</h3>
      <p className={classes.p}>{paragraph}</p>
    </div>
  );
};

export default HeadingWithParahgraph;
