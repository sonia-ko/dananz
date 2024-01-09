import { databaseURL } from "@/config/databaseConfig";

import React, { useState, useRef } from "react";
import Input from "../../input/Input";
import Button from "../../button/button";
import { validateEmail } from "@/helpers/validateEmail";
import { validateName } from "@/helpers/validateName";
import { validatePhone } from "@/helpers/validatePhone";

import classes from "./FeedbackForm.module.css";

const NodeName = "feedbacks";

type feedback = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  message: string;
};

type inputTypes = "firstName" | "phone" | "email" | "message" | "lastName";

const FeedbackForm: React.FC = () => {
  const [error, setError] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const firstNameInputRef = useRef<HTMLInputElement | null>(null);
  const lastNameInputRef = useRef<HTMLInputElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const phoneInputRef = useRef<HTMLInputElement | null>(null);
  const msgInputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (inputType: inputTypes, value: string) => {
    switch (inputType) {
      case "firstName":
        setFirstName(value);
        break;
      case "email":
        if (validateEmail(value)) {
          setEmail(value);
        }

        break;
      case "phone":
        setPhoneNumber(value);
        break;
      case "lastName":
        setLastName(value);
      default:
        break;
    }
  };

  const saveEmailToDatabase = async (email: string): Promise<void> => {
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
    console.log(firstNameInputRef.current?.value);

    const feedback = {
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
    };

    console.log(feedback);
  };

  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <div className={classes.inputsContainer}>
        <Input
          className={classes.item1}
          type="text"
          label="First Name"
          placeholder="First Name"
          id="firstName"
          required={true}
          inputRef={firstNameInputRef}
          onChange={(value: string) => handleInputChange("firstName", value)}
        />
        <Input
          className={classes.item2}
          type="text"
          label="Last Name"
          placeholder="Last Name"
          id="lastName"
          required={false}
          inputRef={lastNameInputRef}
          onChange={(value: string) => handleInputChange("lastName", value)}
        />
        <Input
          className={classes.item3}
          type="email"
          label="Email"
          placeholder="Email"
          id="userEmail"
          required={true}
          inputRef={emailInputRef}
          onChange={(value: string) => handleInputChange("email", value)}
        />
        <Input
          className={classes.item4}
          type="tel"
          label="Phone Number"
          placeholder="Phone Number"
          id="userTel"
          required={false}
          inputRef={phoneInputRef}
          onChange={(value: string) => handleInputChange("phone", value)}
        />
        <Input
          className={classes.item5}
          type="textarea"
          label="Message"
          placeholder="Your Message"
          id="userMsg"
          required={true}
          inputRef={msgInputRef}
          onChange={(value: string) => handleInputChange("message", value)}
        />
      </div>

      <Button
        className={classes.button}
        btnText="Send Message"
        btnStyle="blue"
        type="submit"
      />
    </form>
  );
};

export default FeedbackForm;
