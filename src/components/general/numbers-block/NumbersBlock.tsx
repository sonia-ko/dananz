import React from "react";
import { dananzStatistics } from "@/static/companyData";
import classes from "./NumbersBlock.module.css";

const NumbersBlock: React.FC = () => {
  return (
    <div className={classes.container}>
      {dananzStatistics.map((item) => {
        return (
          <div key={item.title} className={classes.block}>
            <span className="text-size-xl">{item.number}</span>
            <span className="text-centered">{item.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default NumbersBlock;
