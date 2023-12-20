import React from "react";
import classes from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "../logo/Logo";
import Button from "../button/button";
import { useRouter } from "next/router";

const Footer: React.FC = () => {
  const router = useRouter();

  return (
    <div className="container">
      <footer>
        <div>
          <Logo />
          <p>One of the best furniture agency.</p>
        </div>
        <div>
          
        </div>
      </footer>
    </div>
  );
};

export default Footer;
