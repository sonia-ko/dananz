import React from "react";
import classes from "./NumbersBlock.module.css";

const NumbersBlock: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.block}>
        <span className="text-size-xl">350+</span>
        <span>Project Completed</span>
      </div>
      <div className={classes.block}>
        <span className="text-size-xl">23+</span>
        <span>Professional Teams</span>
      </div>
      <div className={classes.block}>
        <span className="text-size-xl">15+</span>
        <span>Years Experience</span>
      </div>
    </div>
  );
};

export default NumbersBlock;
