import React from "react";
import classes from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "../logo/Logo";
import Button from "../button/button";
import { useRouter } from "next/router";
import FooterForm from "./FooterForm";
import SocialIconsContainer from "./SocialIconsContainer";

const Footer: React.FC = () => {
  const router = useRouter();

  return (
    <div className="container">
      <footer className={classes.container}>
        <div>
          <Logo />
          <p className="text-size-l text-semibold text-gray-dark margin-s">
            One of the best furniture agency.
          </p>
        </div>
        <div className={classes.rightCol}>
          <FooterForm />
          <SocialIconsContainer />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
