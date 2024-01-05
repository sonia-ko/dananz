import React from "react";
import Subheading from "@/components/general/subheading/Subheading";
import classes from "./AchievementsList.module.css";
import { companyAchievements } from "@/static/companyData";
import ParagraphWithImageAndTitle from "@/components/general/blocks/paragraph-with-image-and-title/ParagraphWithImageAndTitle";

const AchievementsList: React.FC = () => {
  return (
    <section className={`${classes.container} container`}>
      <Subheading text="ACHIEVEMENT" />

      <div className={classes.contentContainer}>
        {companyAchievements.map((el) => {
          return (
            <ParagraphWithImageAndTitle
              image={{ src: el.imgSrc, alt: el.imgAlt }}
              title={el.title}
              description={el.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default AchievementsList;
