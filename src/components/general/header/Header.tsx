import React from "react";
import classes from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import Button from "../button/button";
import Logo from "../logo/Logo";
import MenuMobile from "../menu-mobile/MenuMobile";
import { useRouter } from "next/router";

interface HeaderProps {
  //   onMenuOpen: () => void;
  //   displayHeader: boolean;
}

const Header: React.FC<HeaderProps> = () => {
  const router = useRouter();

  return (
    <header className={`${classes.container} container`}>
      <Logo />

      <div className={classes.navContainer}>
        <nav className={classes.nav}>
          <ul className={classes.navList}>
            <li>
              <Link href="/about-us/">About Us</Link>
            </li>
            <li>
              <Link href="/services/">Services</Link>
            </li>
            <li>
              <Link href="/our-teams/">Our Teams</Link>
            </li>
          </ul>
        </nav>

        <Button
          btnText="Contact Us"
          onClick={() => {
            router.push("/contact-us/");
          }}
          btnStyle="blue"
        />
      </div>

      <div className={classes.mobileNavContainer}>
        <MenuMobile />
      </div>
    </header>
  );
};

export default Header;
