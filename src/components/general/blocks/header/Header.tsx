import React from "react";
import { useState } from "react";
import Logo from "../../logo/Logo";
import MenuMobile from "../../menu-mobile/MenuMobile";
import MenuItems from "./MenuItems";
import classes from "./Header.module.css";

const Header: React.FC = () => {
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
    <header className={`${classes.container} container section`}>
      <Logo onClick={closeMenu} />

      <div className={classes.navContainer}>
        <MenuItems />
      </div>

      <MenuMobile
        menuOpened={menuOpened}
        closeMenu={closeMenu}
        openMenu={openMenu}
      />
    </header>
  );
};

export default Header;
