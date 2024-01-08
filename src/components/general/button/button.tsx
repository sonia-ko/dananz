import React from "react";
import classes from "./button.module.css";

import arrowAfterIcon from "../../../assets/general/icon-arrow-right.png";

interface ButtonProps {
  btnText: string;
  onClick?: () => void;
  btnStyle: "blue" | "gray" | "transparent" | "white";
  type?: "button" | "submit";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  btnText,
  onClick,
  btnStyle,
  className,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`'container ${classes[btnStyle]} ${className && className}`}
    >
      {btnText}
    </button>
  );
};

export default Button;
