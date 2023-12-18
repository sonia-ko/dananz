import React from "react";
import classes from "./ListWithArrows.module.css";
import Image from "next/image";
import Button from "../button/button";
import ArrowRight from "../icons/ArrowRight";

interface ListItem {
  title: string;
  description?: string;
  id: string;
}

interface ListWithArrowsProps {
  listItems: ListItem[];
  textSize: "s" | "xl";
}

const ListWithArrows: React.FC<ListWithArrowsProps> = ({
  listItems,
  textSize,
}) => {
  const h2class = textSize === "s" ? "text-small" : "text-xl";

  return (
    <ol className={`${classes.container} ${classes[h2class]}`}>
      {listItems.map((el) => {
        console.log(el.description);
        return (
          <li className={classes.item} key={el.id}>
            <div className={classes.itemWrapper}>
              <div>
                <h4 className={`${classes[h2class]} ${classes.title}`}>
                  {el.title}
                </h4>
                {el.description && (
                  <p className={classes.description}>{el.description}</p>
                )}
              </div>
              <ArrowRight onClick={() => {}} />
            </div>
          </li>
        );
      })}
    </ol>
  );
};

export default ListWithArrows;
