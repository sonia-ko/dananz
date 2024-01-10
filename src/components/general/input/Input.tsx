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
  value?: string;
  select?: {
    selectOptions: string[];
    selectedOption: string;
    onSelectChange: (value: string) => void;
    // selectRef?: React.RefObject<HTMLSelectElement>;
  };
}

const Input: React.FC<InputProps> = ({
  value,
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
  select,
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
    if (select) {
      const inputValue = e.target.value;
      console.log("select value:" + inputValue);
      select.onSelectChange(inputValue);
    }
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
          value={value}
        />
      </div>
    );
  }

  if (type === "tel" && select) {
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
            value={select.selectedOption}
            onChange={handleSelectChange}
          >
            {select.selectOptions.map((item) => {
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
            value={value}
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
        value={value}
      />
    </div>
  );
};

export default Input;
