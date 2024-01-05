import React from "react";
import classes from "./Input.module.css";

import arrowAfterIcon from "../../../assets/general/icon-arrow-right.png";

interface InputProps {
  inputRef: React.RefObject<HTMLInputElement | HTMLTextAreaElement>;
  label: string;
  placeholder?: string;
  type: "text" | "tel" | "email" | "textarea";
  id: string;
}

const Input: React.FC<InputProps> = ({
  inputRef,
  label,
  placeholder,
  type,
  id,
}) => {
  if (type === "textarea") {
    <textarea
      ref={inputRef as React.RefObject<HTMLTextAreaElement>}
      placeholder={placeholder}
    />;
  }

  return (
    <div className={classes.container}>
      <label className={classes.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={classes.input}
        type={type}
        id={id}
        ref={inputRef as React.RefObject<HTMLInputElement>}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
