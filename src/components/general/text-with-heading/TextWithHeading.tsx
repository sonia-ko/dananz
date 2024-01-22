import React from "react";
import { overwiewParagraph } from "@/types/types";
import classes from "./TextWithHeading.module.css";

interface TextWithHeadingProps {
  heading: string;
  paragraphs: overwiewParagraph[];
}

const TextWithHeading: React.FC<TextWithHeadingProps> = ({
  heading,
  paragraphs,
}) => {
  return (
    <div className={classes.container}>
      <h5>{heading}</h5>
      {paragraphs.map((p) => {
        return (
          <p key={p.id} className="text-gray text-size-s margin-b-m">
            {p.text}
          </p>
        );
      })}
    </div>
  );
};

export default TextWithHeading;
