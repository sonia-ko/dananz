import React from "react";
import classes from "./Input.module.css";
import { Tooltip } from "react-tooltip";

interface InputProps {
  inputRef?: React.RefObject<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;
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
  selectedOption?: string;
  onSelectChange?: (value: string) => void;
  selectRef?: React.RefObject<HTMLSelectElement>;
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
  selectedOption,
  onSelectChange = () => {},
}) => {
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const inputValue = e.target.value;
    onChange(inputValue);
  };

  const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (
    e
  ) => {
    const inputValue = e.target.value;
    console.log("select value:" + inputValue);
    onSelectChange(inputValue);
  };

  if (type === "textarea") {
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
        <div className={`${classes.phoneInputContainer} input`}>
          <select
            id={"country" + id}
            name={"country" + id}
            value={selectedOption}
            onChange={handleSelectChange}
          >
            {selectOptions?.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
          <input
            onChange={handleChange}
            className={`${classes.phoneInput} ${!valid && classes.invalid}`}
            type={type}
            id={id}
            ref={inputRef as React.RefObject<HTMLInputElement>}
            placeholder={placeholder}
            required={required}
          />
        </div>
      </div>
    );
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
