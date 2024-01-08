import React from "react";
import classes from "./ContactsList.module.css";
import Link from "next/link";
import Image from "next/image";
import Button from "../../button/button";
import { useRouter } from "next/router";

const ContactsList: React.FC = () => {
  const router = useRouter();

  return <section className={classes.container}>Contacts</section>;
};

export default ContactsList;
