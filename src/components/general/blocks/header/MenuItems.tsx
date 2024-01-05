import React from "react";
import classes from "./MenuItems.module.css";
import Link from "next/link";
import Button from "../../button/button";

import { useRouter } from "next/router";

const MenuItems: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <nav className={classes.nav}>
        <ul className={classes.navList}>
          <li className={classes.li}>
            <Link href="/about-us/">About Us</Link>
          </li>
          <li className={classes.li}>
            <Link href="/services/">Services</Link>
          </li>
          <li className={classes.li}>
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
    </>
  );
};

export default MenuItems;
