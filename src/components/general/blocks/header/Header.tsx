import React from "react";
import classes from "./Header.module.css";
import Logo from "../../logo/Logo";
import MenuMobile from "../../menu-mobile/MenuMobile";
import MenuItems from "./MenuItems";

interface HeaderProps {
  //   onMenuOpen: () => void;
  //   displayHeader: boolean;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={`${classes.container} container`}>
      <Logo />

      <div className={classes.navContainer}>
        <MenuItems />
      </div>

      <MenuMobile />
    </header>
  );
};

export default Header;
