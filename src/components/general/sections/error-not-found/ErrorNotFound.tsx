import React from "react";
import Image from "next/image";
import classes from "./ErrorNotFound.module.css";
import Button from "../../button/button";
import { useRouter } from "next/router";

interface ErrorNotFoundProps {
  image?: { src: string; alt: string };
  title: string;
  description: string;
  btnText?: string;
  linkTo?: string;
}

const ErrorNotFound: React.FC<ErrorNotFoundProps> = ({
  title,
  description,
  btnText = "Back to Home Page",
  linkTo = "/",
  image,
}) => {
  const router = useRouter();
  return (
    <section className={`${classes.container} container`}>
      <h1 className=" text-centered">{title}</h1>
      <p className=" text-centered p-narrow text-narrow text-size-s p-narrow">
        {description}
      </p>
      <Button
        btnStyle="blue"
        btnText={btnText}
        type="button"
        onClick={() => router.push(linkTo)}
      />
    </section>
  );
};

export default ErrorNotFound;
