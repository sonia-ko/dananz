import React from "react";
import classes from "./LocationItem.module.css";

interface LocationItemProps {
  title: string;
  text: string;
}

const LocationItem: React.FC<LocationItemProps> = ({ title, text }) => {
  return (
    <li className={`${classes.itemContainer} margin-b-m`}>
      <h5 className="margin-b-m">{title}</h5>
      <p className="text-gray text-size-s">{text}</p>
    </li>
  );
};

export default LocationItem;
