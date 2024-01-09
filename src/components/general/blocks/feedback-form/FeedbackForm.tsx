import { databaseURL } from "@/config/databaseConfig";

import React, { useState, useRef } from "react";
import Input from "../../input/Input";
import Button from "../../button/button";
import { validateEmail } from "@/helpers/validateEmail";
import { validateName } from "@/helpers/validateName";
import { validatePhone } from "@/helpers/validatePhone";
import { validateTextArea } from "@/helpers/validateTextArea";
import { acceptedPhoneFormats } from "@/static/websiteData";

import classes from "./FeedbackForm.module.css";

const NodeName = "feedbacks";

type feedback = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNum: string;
  message: string;
  selectedCountry: string;
};

type inputTypes =
  | "firstName"
  | "phone"
  | "email"
  | "message"
  | "lastName"
  | "select";

const FeedbackForm: React.FC = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("US");

  const selectedCountryRef = useRef<HTMLSelectElement>(null);

  const emailValid = validateEmail(email);
  const phoneValid = validatePhone(phoneNumber) || phoneNumber === "";
  const nameValid = validateName(firstName);
  const msgValid = validateTextArea(message);

  console.log("Email valid: " + email + " " + emailValid);
  console.log("phone valid: " + phoneValid);
  console.log("name valid: " + nameValid);
  console.log("msg valid: " + msgValid);
  console.log("Email: " + email);

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

  const saveFeedbackToDatabase = async (email: string): Promise<void> => {
    // try {
    //   const emailExists = await checkEmailExists(email);
    //   if (!emailExists) {
    //     await fetch(`${databaseURL}/${NodeName}.json?`, {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ email }),
    //     });
    //     console.log("Email added successfully!");
    //     setMessage("Thank you for subscribing to our newsletters!");
    //   } else {
    //     console.log(`Email ${email} already exists in the database.`);
    //     setMessage("You have already been subscribed to our newsletters!");
    //   }
    //   setTimeout(() => {
    //     setMessage("");
    //   }, 4000);
    // } catch (error) {
    //   console.error("Error saving email:", error);
    // }
  };

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   // setEmail(e.target.value);
  // };

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

    console.log(feedback);
  };

  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <div className={classes.inputsContainer}>
        <Input
          className={classes.item1}
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
          onChange={(value: string) => handleInputChange("lastName", value)}
        />
        <Input
          className={classes.item3}
          type="email"
          label="Email"
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
          required={false}
          valid={phoneValid || phoneNumber === ""}
          onChange={(value: string) => handleInputChange("phone", value)}
          tooltip="Please include only numbers or + sign in your phone number"
          selectOptions={acceptedPhoneFormats}
          selectedOption={selectedCountry}
          onSelectChange={(value: string) => handleInputChange("select", value)}
          selectRef={selectedCountryRef}
        />
        <Input
          className={classes.item5}
          type="textarea"
          label="Message"
          placeholder="Your Message"
          id="userMsg"
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
