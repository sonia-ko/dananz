import React from "react";
import OpenMenuIcon from "./OpenMenuIcon";
import OpenedMenu from "./OpenedMenu";
import classes from "./MenuMobile.module.css";

interface MenuMobile {
  openMenu: () => void;
  closeMenu: () => void;
  menuOpened: boolean;
}

const MenuMobile: React.FC<MenuMobile> = ({
  openMenu,
  closeMenu,
  menuOpened,
}) => {
  return (
    <div className={classes.container}>
      {!menuOpened && <OpenMenuIcon onClick={openMenu} />}
      {menuOpened && <OpenedMenu onClick={closeMenu} />}
    </div>
  );
};

export default MenuMobile;
