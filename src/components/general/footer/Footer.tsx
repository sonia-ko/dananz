import React from "react";
import classes from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import Button from "../button/button";
import { useRouter } from "next/router";

const Footer: React.FC = () => {
  const router = useRouter();

  return <footer></footer>;
};

export default Footer;
