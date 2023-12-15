import React from "react";
import classes from "./NumbersBlock.module.css";

const NumbersBlock: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.block}>
        <span className={classes.textLarge}>350+</span>
        <span>Project Completed</span>
      </div>
      <div className={classes.block}>
        <span className={classes.textLarge}>23+</span>
        <span>Professional Teams</span>
      </div>
      <div className={classes.block}>
        <span className={classes.textLarge}>15+</span>
        <span>Years Experience</span>
      </div>
    </div>
  );
};

export default NumbersBlock;
