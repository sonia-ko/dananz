import React from "react";
import classes from "./Icons.module.css";

const Ellipse: React.FC = () => {
  return (
    <svg
      className={classes.ellipse}
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="7" cy="7.18237" rx="7" ry="7.00879" fill="#333333" />
    </svg>
  );
};

export default Ellipse;
