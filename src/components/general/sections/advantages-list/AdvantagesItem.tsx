import React from "react";
import classes from "./AdvatagesItem.module.css";

interface AdvantagesItemProps {
  title: string;
  description: string;
}

const AdvantagesItem: React.FC<AdvantagesItemProps> = ({
  title,
  description,
}) => {
  return (
    <li className={`${classes.container}`}>
      <h5 className={classes.heading}>{title}</h5>
      <p className="text-gray text-centered line-height-m">{description}</p>
    </li>
  );
};

export default AdvantagesItem;
