import React from "react";
import Subheading from "@/components/general/subheading/Subheading";
import ListWithArrows from "@/components/general/list-with-arrows/ListWithArrows";
import HeadingWithParahgraph from "../../blocks/heading-with-paragraph/HeadingWithParahgraph";
import { dananzServices } from "@/static/companyData";

import classes from "./ProductSummary.module.css";

const ProductSummary: React.FC = () => {
  return (
    <section className={`${classes.container} container`}>
      <Subheading text="PRODUCT" />
      <HeadingWithParahgraph
        heading="Choose your product themes."
        paragraph="Find the theme you want. If our choice of theme is not what you want, you can customize it as you want."
      />
      <div className={classes.listContainer}>
        <ListWithArrows textSize="xl" listItems={dananzServices} />
      </div>
    </section>
  );
};

export default ProductSummary;
