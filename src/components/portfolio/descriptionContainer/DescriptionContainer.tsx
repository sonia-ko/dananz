import React from "react";
import classes from "./DescriptionContainer.module.css";
import { overwiewParagraph } from "@/types/types";
import TextWithHeading from "@/components/general/text-with-heading/TextWithHeading";

interface DescriptionContainerProps {
  overwiewParagraphs: overwiewParagraph[];
  designProcessParagraphs: overwiewParagraph[];
  date: string;
  category: string;
}

const DescriptionContainer: React.FC<DescriptionContainerProps> = ({
  overwiewParagraphs,
  designProcessParagraphs,
  date,
  category,
}) => {
  return (
    <section className={`${classes.container} container`}>
      <div className={classes.overviewContainer}>
        <TextWithHeading
          paragraphs={overwiewParagraphs}
          heading="Project Overview"
        />
        <p className={`${classes.dateCategoryContainer} text-gray text-size-s`}>
          <span>{date}</span>
          <span>{category}</span>
        </p>
      </div>
      <div>
        <TextWithHeading
          heading="Design Process"
          paragraphs={designProcessParagraphs}
        />
      </div>
    </section>
  );
};

export default DescriptionContainer;
