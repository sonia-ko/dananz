import { databaseURL } from "@/config/databaseConfig";

import React, { useState } from "react";
import ArrowHalf from "../icons/ArrowHalf";
import Ellipse from "../icons/Ellipse";

import classes from "./FooterForm.module.css";

const NodeName = "subscribers";

const validateEmail = (email: string): boolean => {
  const validFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const containsDissallowedSymbols = /[!#$%&*\/=?'+`|{}~]/.test(email);

  const emailValid = validFormat && !containsDissallowedSymbols;

  return emailValid;
};

const checkEmailExists = async (email: string): Promise<boolean> => {
  try {
    let emailFound: boolean = false;
    const allEmails = await fetch(`${databaseURL}/${NodeName}.json`);
    const resp = await allEmails.json();
    for (const property in resp) {
      if (email === resp[property].email) {
        emailFound = true;
        break;
      }
    }
    return emailFound;
  } catch (error) {
    console.error("Error checking email:", error);
    return false;
  }
};

const FooterForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const saveEmailToDatabase = async (email: string): Promise<void> => {
    try {
      const emailExists = await checkEmailExists(email);
      if (!emailExists) {
        await fetch(`${databaseURL}/${NodeName}.json?`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });
        console.log("Email added successfully!");
        setMessage("Thank you for subscribing to our newsletters!");
      } else {
        console.log(`Email ${email} already exists in the database.`);
        setMessage("You have already been subscribed to our newsletters!");
      }
      setTimeout(() => {
        setMessage("");
      }, 4000);
    } catch (error) {
      console.error("Error saving email:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateEmail(email)) {
      console.log("Submitted email is valid:", email);
      await saveEmailToDatabase(email);
      setEmail("");
    } else {
      console.log("Submitted email is not valid:", email);
      setMessage("Submitted Email is not valid, please double-check it");
    }
  };

  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <div>
        <Ellipse />
        <label className="text-gray-dark" htmlFor="emailInput">
          Enter your email to get the latest news
        </label>
      </div>
      <div className={`${classes.inputContainer} margin-s`}>
        <input
          className={classes.input}
          type="email"
          id="emailInput"
          placeholder="Email Adress"
          value={email}
          onChange={handleInputChange}
          required
        />
        <button type="submit">
          <ArrowHalf />
        </button>
      </div>
      {message.length > 0 && <p className={classes.msg}>{message}</p>}
    </form>
  );
};

export default FooterForm;
