import React from "react";
import classes from "./button.module.css";

import arrowAfterIcon from "../../../assets/general/icon-arrow-right.png";

interface ButtonProps {
  btnText: string;
  onClick: () => void;
  btnStyle: "blue" | "gray" | "transparent";
  type?: "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({
  btnText,
  onClick,
  btnStyle,
  type = "button",
}) => {
  console.log(btnStyle);
  return (
    <button
      type={type}
      onClick={onClick}
      className={`'container ${classes[btnStyle]}`}
    >
      {btnText}
    </button>
  );
};

export default Button;
