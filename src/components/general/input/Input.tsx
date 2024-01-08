import React from "react";
import classes from "./Input.module.css";

import arrowAfterIcon from "../../../assets/general/icon-arrow-right.png";

interface InputProps {
  inputRef: React.RefObject<HTMLInputElement | HTMLTextAreaElement>;
  label: string;
  placeholder?: string;
  type: "text" | "tel" | "email" | "textarea";
  id: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  inputRef,
  label,
  placeholder,
  type,
  id,
  className,
}) => {
  if (type === "textarea") {
    console.log("this is textarea");

    return (
      <div className={`${classes.container} ${className}`}>
        <label className={classes.label} htmlFor={id}>
          {label}
        </label>
        <textarea
          ref={inputRef as React.RefObject<HTMLTextAreaElement>}
          placeholder={placeholder}
          className={classes.input}
        />
      </div>
    );
  }

  return (
    <div className={`${classes.container} ${className}`}>
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
