import React from "react";
import classes from "./Locations.module.css";

interface ListItemProps {
  title: string;
  text: string;
}

const ListItem: React.FC<ListItemProps> = ({ title, text }) => {
  return (
    <li className={classes.itemContainer}>
      <h3>{title}</h3>
      <p>{text}</p>
    </li>
  );
};

export default ListItem;
