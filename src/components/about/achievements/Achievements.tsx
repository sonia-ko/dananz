import React from "react";
import Subheading from "@/components/general/subheading/Subheading";
import Image from "next/image";
import NumbersBlock from "@/components/general/numbers-block/NumbersBlock";
import classes from "./Achievements.module.css";

const Achievements: React.FC = () => {
  return (
    <section className={`${classes.container} container`}>
      <Subheading text="ACHIEVEMENT" />
      <h3 className={classes.heading}>
        interior customization with Danaanz, best quality with professional
        workers
      </h3>
      <div className={classes.contentContainer}>
        <Image
          className={classes.image}
          width="883"
          height="525"
          src="/about/kitchen-by-the-sea.png"
          alt="Kitchen design"
          priority={true}
          sizes="100vw"
        />

        <NumbersBlock />
      </div>
    </section>
  );
};

export default Achievements;
