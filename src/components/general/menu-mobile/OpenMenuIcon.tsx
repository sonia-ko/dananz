import React from "react";
import classes from "./OpenMenuIcon.module.css";

interface OpenMenuIconProps {
  onClick: () => void;
}

const OpenMenuIcon: React.FC<OpenMenuIconProps> = ({ onClick }) => {
  return (
    <div onClick={onClick} className={classes.openIconContainer}>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
    </div>
  );
};

export default OpenMenuIcon;
