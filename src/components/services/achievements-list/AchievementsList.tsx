import React from "react";
import Subheading from "@/components/general/subheading/Subheading";
import ParagraphWithImageAndTitle from "@/components/general/blocks/paragraph-with-image-and-title/ParagraphWithImageAndTitle";
import { companyAchievements } from "@/static/companyData";

const AchievementsList: React.FC = () => {
  return (
    <section className="container">
      <Subheading text="ACHIEVEMENT" />

      {companyAchievements.map((el) => {
        return (
          <ParagraphWithImageAndTitle
            key={el.title}
            image={{ src: el.imgSrc, alt: el.imgAlt }}
            title={el.title}
            description={el.description}
          />
        );
      })}
    </section>
  );
};

export default AchievementsList;
