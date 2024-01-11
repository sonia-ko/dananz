import React from "react";
import { useRouter } from "next/router";
import ArrowRight from "../icons/ArrowRight";
import classes from "./ListWithArrows.module.css";

interface ListItem {
  title: string;
  description?: string;
  id: string;
  linkTo?: string;
}

interface ListWithArrowsProps {
  listItems: ListItem[];
  textSize: "s" | "xl";
}

const ListWithArrows: React.FC<ListWithArrowsProps> = ({
  listItems,
  textSize,
}) => {
  const router = useRouter();
  const h2class = textSize === "s" ? "text-small" : "text-xl";

  return (
    <ol className={`${classes.container} ${classes[h2class]}`}>
      {listItems.map((el) => {
        return (
          <li className={classes.item} key={el.id}>
            <div
              onClick={() => el.linkTo && router.push(el.linkTo)}
              className={classes.itemWrapper}
            >
              <div>
                <h4 className={`${classes[h2class]} ${classes.title}`}>
                  {el.title}
                </h4>
                {el.description && (
                  <p className={classes.description}>{el.description}</p>
                )}
              </div>
              <ArrowRight onClick={() => router.push("/portfolio/")} />
            </div>
          </li>
        );
      })}
    </ol>
  );
};

export default ListWithArrows;
