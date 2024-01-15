import React from "react";
import Logo from "../../logo/Logo";
import MenuMobile from "../../menu-mobile/MenuMobile";
import MenuItems from "./MenuItems";
import classes from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={`${classes.container} container section`}>
      <Logo />

      <div className={classes.navContainer}>
        <MenuItems />
      </div>

      <MenuMobile />
    </header>
  );
};

export default Header;
