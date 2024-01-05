import React from "react";
import classes from "./MenuMobile.module.css";
import Link from "next/link";
import Image from "next/image";
import Button from "../button/button";
import Logo from "../logo/Logo";
import OpenMenuIcon from "./OpenMenuIcon";
import OpenedMenu from "./OpenedMenu";
import { useRouter } from "next/router";
import { useState } from "react";

interface MenuMobile {
  //   onMenuOpen: () => void;
  //   displayHeader: boolean;
}

const MenuMobile: React.FC<MenuMobile> = () => {
  const router = useRouter();
  const [menuOpened, setMenuOpened] = useState(false);

  const openMenu = () => {
    document.body.style.overflow = "hidden";
    setMenuOpened(true);
  };

  const closeMenu = () => {
    document.body.style.overflow = "auto";
    setMenuOpened(false);
  };

  return (
    <div className={classes.container}>
      {!menuOpened && <OpenMenuIcon onClick={openMenu} />}
      {menuOpened && <OpenedMenu onClick={closeMenu} />}
    </div>
  );
};

export default MenuMobile;
