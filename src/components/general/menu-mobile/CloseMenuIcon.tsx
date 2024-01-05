import React from "react";
import classes from "./CloseMenuIcon.module.css";

interface CloseMenuIconProps {
  onClick: () => void;
}

const CloseMenuIcon: React.FC<CloseMenuIconProps> = ({ onClick }) => {
  return (
    <div onClick={onClick} className={classes.container}>
      <div className={classes.line} />
      <div className={classes.line} />
    </div>
  );
};

export default CloseMenuIcon;
