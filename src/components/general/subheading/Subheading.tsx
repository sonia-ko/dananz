import React from "react";
import classes from "./Subheading.module.css";

interface SubheadingProps {
  text: string;
}

const Subheading: React.FC<SubheadingProps> = ({ text }) => {
  return (
    <div className={classes.container}>
      <h2>{text}</h2>
      <hr className={classes.line} />
    </div>
  );
};

export default Subheading;
