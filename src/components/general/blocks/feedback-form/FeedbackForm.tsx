import { databaseURL } from "@/config/databaseConfig";

import React, { useState, useRef } from "react";
import Input from "../../input/Input";
import Button from "../../button/button";
import { validateEmail } from "@/helpers/validateEmail";

import classes from "./FeedbackForm.module.css";

const NodeName = "feedbacks";

type feedback = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  message: string;
};

const FeedbackForm: React.FC = () => {
  const [error, setError] = useState(false);

  const firstNameInputRef = useRef<HTMLInputElement | null>(null);
  const lastNameInputRef = useRef<HTMLInputElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const phoneInputRef = useRef<HTMLInputElement | null>(null);
  const msgInputRef = useRef<HTMLInputElement | null>(null);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(firstNameInputRef.current?.value);

    const feedback = {};
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
          inputRef={firstNameInputRef}
        />
        <Input
          className={classes.item2}
          type="text"
          label="Last Name"
          placeholder="Last Name"
          id="lastName"
          inputRef={lastNameInputRef}
        />
        <Input
          className={classes.item3}
          type="email"
          label="Email"
          placeholder="Email"
          id="userEmail"
          inputRef={emailInputRef}
        />
        <Input
          className={classes.item4}
          type="tel"
          label="Phone Number"
          placeholder="Phone Number"
          id="userTel"
          inputRef={phoneInputRef}
        />
        <Input
          className={classes.item5}
          type="textarea"
          label="Message"
          placeholder="Your Message"
          id="userMsg"
          inputRef={msgInputRef}
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
