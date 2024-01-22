import { databaseURL } from "@/config/databaseConfig";

import React, { useState } from "react";
import Input from "../../input/Input";
import Button from "../../button/button";
import { validateEmail } from "@/helpers/validateEmail";
import { validateName } from "@/helpers/validateName";
import { validatePhone } from "@/helpers/validatePhone";
import { validateTextArea } from "@/helpers/validateTextArea";
import { acceptedPhoneFormats } from "@/static/websiteData";
import { feedback } from "@/types/types";

import classes from "./FeedbackForm.module.css";

const NodeName = "feedbacks";

type inputTypes =
  | "firstName"
  | "phone"
  | "email"
  | "message"
  | "lastName"
  | "select";

const FeedbackForm: React.FC = () => {
  const [error, setError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("US");

  const emailValid = validateEmail(email);
  const phoneValid = validatePhone(phoneNumber) || phoneNumber === "";
  const nameValid = validateName(firstName);
  const msgValid = validateTextArea(message);

  const buttonEnabled = emailValid && phoneValid && nameValid && msgValid;

  const handleInputChange = (inputType: inputTypes, value: string) => {
    switch (inputType) {
      case "firstName":
        setFirstName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhoneNumber(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "message":
        setMessage(value);
        break;
      case "select":
        setSelectedCountry(value);
      default:
        break;
    }
  };

  const cleanFormInputs = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
    setSelectedCountry("UA");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const phoneNum = phoneNumber.replace(/\D/g, "");
    const numericNumber = parseInt(phoneNum, 10);

    console.log(numericNumber);
    const feedback: feedback = {
      firstName,
      lastName,
      email,
      phoneNum,
      message,
      selectedCountry,
    };

    try {
      await fetch(`${databaseURL}/${NodeName}.json?`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ feedback }),
      });

      setMessage("Thank you for your feedback!");
      cleanFormInputs();
      setShowSuccessMessage(true);

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 4000);
    } catch (error) {
      console.error("Error saving form:", error);
    }
  };

  const selectObj = {
    selectOptions: acceptedPhoneFormats,
    selectedOption: selectedCountry,
    onSelectChange: (value: string) => handleInputChange("select", value),
  };

  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <div className={classes.inputsContainer}>
        <Input
          className={classes.item1}
          value={firstName}
          type="text"
          valid={nameValid || firstName === ""}
          label="First Name"
          placeholder="First Name"
          id="firstName"
          required={true}
          onChange={(value: string) => handleInputChange("firstName", value)}
          tooltip="Please indicate only letters in this field"
        />
        <Input
          className={classes.item2}
          type="text"
          label="Last Name"
          placeholder="Last Name"
          id="lastName"
          required={false}
          value={lastName}
          onChange={(value: string) => handleInputChange("lastName", value)}
        />
        <Input
          className={classes.item3}
          type="email"
          label="Email"
          value={email}
          placeholder="Email"
          id="userEmail"
          required={true}
          onChange={(value: string) => handleInputChange("email", value)}
          valid={emailValid || email === ""}
          tooltip="Please enter your email in the following format: 'email@domain.tld'"
        />
        <Input
          className={classes.item4}
          type="tel"
          label="Phone Number"
          placeholder="Phone Number"
          id="userTel"
          value={phoneNumber}
          required={false}
          valid={phoneValid || phoneNumber === ""}
          onChange={(value: string) => handleInputChange("phone", value)}
          tooltip="Please include only numbers or + sign in your phone number"
          select={selectObj}
        />
        <Input
          className={classes.item5}
          type="textarea"
          label="Message"
          placeholder="Your Message"
          id="userMsg"
          value={message}
          required={true}
          onChange={(value: string) => handleInputChange("message", value)}
          valid={msgValid || message === ""}
        />
      </div>

      {error && (
        <p
          className={`${classes.error} text-size-m text-semibold text-centered margin-m`}
        >
          Ooops, something went wrong! Please try again later
        </p>
      )}

      {showSuccessMessage && (
        <p
          className={`${classes.successMsg} text-size-m text-semibold text-centered margin-m`}
        >
          Thank you for submitting your feedback!
        </p>
      )}

      <Button
        className={classes.button}
        btnText="Send Message"
        btnStyle="blue"
        type="submit"
        disabled={!buttonEnabled}
      />
    </form>
  );
};

export default FeedbackForm;
