import React from "react";
import classes from "./OpenedMenu.module.css";
import CloseMenuIcon from "./CloseMenuIcon";
import MenuItems from "../blocks/header/MenuItems";

interface OpenedMenuProps {
  onClick: () => void;
}

const OpenedMenu: React.FC<OpenedMenuProps> = ({ onClick }) => {
  return (
    <div className={classes.container}>
      <CloseMenuIcon onClick={onClick} />
      <div className={classes.itemsContainer}>
        <MenuItems />
      </div>
    </div>
  );
};

export default OpenedMenu;
