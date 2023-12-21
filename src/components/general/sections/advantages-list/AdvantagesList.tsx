import React from "react";

import Subheading from "../../subheading/Subheading";
import AdvantagesItem from "./AdvantagesItem";

import classes from "./AdvantagesList.module.css";

const advantages = [
  {
    title: "High Quality",
    description:
      "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
  },
  {
    title: "Professional Designer",
    description:
      "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
  },
  {
    title: "The Best Services",
    description:
      "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
  },
];
const AdvantagesList: React.FC = () => {
  return (
    <section className={`${classes.container} container`}>
      <Subheading text="Why Choose Us" />
      <p className={`${classes.p} text-gray line-height-m`}>
        Customize your interior design into a dream place with the best
        designers and quality furniture. We try our best to fulfill your
        expectations.
      </p>
      <ul className={classes.list}>
        {advantages.map((el) => {
          return (
            <AdvantagesItem title={el.title} description={el.description} />
          );
        })}
      </ul>
    </section>
  );
};

export default AdvantagesList;
