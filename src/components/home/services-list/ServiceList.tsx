import React from "react";
import Subheading from "@/components/general/subheading/Subheading";
import ListWithArrows from "@/components/general/list-with-arrows/ListWithArrows";

import Image from "next/image";

import classes from "./ServiceList.module.css";

const ServiceList: React.FC = () => {
  const listItems = [
    { title: "Interior Design", id: "a1" },
    { title: "Consultant", id: "a2" },
    { title: "Construction Consultant", id: "a3" },
  ];

  return (
    <section className={`${classes.container} container`}>
      <Subheading text="Service" />
      <h3>attractive furniture with the best quality.</h3>
      <p className={`${classes.paragraph} text-gray margin-m`}>
        Customize your interior design into a dream place with the best
        designers and quality furniture. We try our best to fulfill your
        expectations.
      </p>
      <div className={classes.listContainer}>
        <ListWithArrows textSize="s" listItems={listItems} />
      </div>

      <Image
        className={classes.image}
        width="1200"
        height="513"
        src="/home/living-room.png"
        alt="Dananz"
        priority={false}
      />
    </section>
  );
};

export default ServiceList;
