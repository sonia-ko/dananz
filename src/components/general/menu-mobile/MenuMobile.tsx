import React from "react";
import classes from "./MenuMobile.module.css";
import Link from "next/link";
import Image from "next/image";
import Button from "../button/button";
import Logo from "../logo/Logo";
import { useRouter } from "next/router";
import { useState } from "react";

interface MenuMobile {
  //   onMenuOpen: () => void;
  //   displayHeader: boolean;
}

const MenuMobile: React.FC<MenuMobile> = () => {
  const router = useRouter();
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className={classes.openIconContainer}>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
    </div>
  );
};

export default MenuMobile;
