import React from "react";
import classes from "./Input.module.css";
import { Tooltip } from "react-tooltip";

import arrowAfterIcon from "../../../assets/general/icon-arrow-right.png";

interface InputProps {
  inputRef?: React.RefObject<HTMLInputElement | HTMLTextAreaElement>;
  label: string;
  placeholder?: string;
  type: "text" | "tel" | "email" | "textarea";
  id: string;
  className?: string;
  required?: boolean;
  valid?: boolean;
  onChange?: (value: string) => void;
  tooltip?: string;
  selectOptions?: string[];
}

const Input: React.FC<InputProps> = ({
  inputRef,
  label,
  placeholder,
  type,
  id,
  className,
  required = false,
  valid = true,
  onChange = () => {},
  tooltip,
  selectOptions,
}) => {
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const inputValue = e.target.value;
    onChange(inputValue);
  };

  if (type === "textarea") {
    console.log("this is textarea");

    return (
      <div className={`${classes.container} ${className}`}>
        <label
          className={classes.label}
          htmlFor={id}
          data-tooltip-id={id}
          data-tooltip-content={tooltip}
        >
          {label}
          {required && "*"}
        </label>
        <Tooltip id={id} />
        <textarea
          ref={inputRef as React.RefObject<HTMLTextAreaElement>}
          placeholder={placeholder}
          onChange={handleChange}
          className={`${classes.input} ${!valid && classes.invalid}`}
        />
      </div>
    );
  }

  if (type === "tel") {
  }

  return (
    <div className={`${classes.container} ${className}`}>
      <label
        className={classes.label}
        htmlFor={id}
        data-tooltip-id={id}
        data-tooltip-content={tooltip}
      >
        {label}
        {required && "*"}
      </label>
      <Tooltip id={id} />
      <input
        onChange={handleChange}
        className={`${classes.input} ${!valid && classes.invalid}`}
        type={type}
        id={id}
        ref={inputRef as React.RefObject<HTMLInputElement>}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;
