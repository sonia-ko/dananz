import React from "react";

import Subheading from "../../subheading/Subheading";
import AdvantagesItem from "./AdvantagesItem";
import { dananzAdvantages } from "@/static/websiteData";

import classes from "./AdvantagesList.module.css";

const AdvantagesList: React.FC = () => {
  return (
    <section className={`${classes.container} container`}>
      <Subheading text="Why Choose Us" />
      <p
        className={`${classes.p} p-narrow  text-gray text-size-s line-height-m`}
      >
        Customize your interior design into a dream place with the best
        designers and quality furniture. We try our best to fulfill your
        expectations.
      </p>
      <ul className={`margin-m ${classes.list}`}>
        {dananzAdvantages.map((el) => {
          return (
            <AdvantagesItem
              key={el.title}
              title={el.title}
              description={el.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default AdvantagesList;
