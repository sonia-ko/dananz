import React from "react";
import classes from "./button.module.css";

interface ButtonProps {
  btnText: string;
  onClick?: () => void;
  btnStyle: "blue" | "gray" | "transparent" | "white";
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  btnText,
  onClick,
  btnStyle,
  className,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`'container ${classes[btnStyle]} ${className && className}`}
    >
      {btnText}
    </button>
  );
};

export default Button;
