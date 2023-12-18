import React from "react";
import Subheading from "@/components/general/subheading/Subheading";
import ListWithArrows from "@/components/general/list-with-arrows/ListWithArrows";
import HeadingWithParahgraph from "../heading-with-paragraph/HeadingWithParahgraph";

import classes from "./ProductSummary.module.css";

const ProductSummary: React.FC = () => {
  const listItems = [
    {
      title: "Vintage",
      id: "s1",
      description:
        "the use of simple and limited elements to get the best effect or impression.",
    },
    {
      title: "Minimalist",
      id: "s2",
      description:
        "the use of simple and limited elements to get the best effect or impression.",
    },
    {
      title: "Modern",
      id: "s3",
      description:
        "the use of simple and limited elements to get the best effect or impression.",
    },
    {
      title: "Transitional",
      id: "s4",
      description:
        "the use of simple and limited elements to get the best effect or impression.",
    },
  ];

  return (
    <section className={`${classes.container} container`}>
      <Subheading text="PRODUCT" />
      <HeadingWithParahgraph
        heading="Choose your product themes."
        paragraph="Find the theme you want. If our choice of theme is not what you want, you can customize it as you want."
      />
      <div className={classes.listContainer}>
        <ListWithArrows textSize="xl" listItems={listItems} />
      </div>
    </section>
  );
};

export default ProductSummary;
