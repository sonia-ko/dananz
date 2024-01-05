import React from "react";
import Image from "next/image";
import NumbersBlock from "@/components/general/numbers-block/NumbersBlock";

import classes from "./mainBanner.module.css";

const MainBanner: React.FC = () => {
  return (
    <section className={`${classes.container} container`}>
      <div className={classes.headerContainer}>
        <h1 className={classes.heading}>
          Design your interor with high quality.
        </h1>
        <p className={classes.copy}>
          <span className={classes.copyText}>
            2022 <br /> ALL RIGHT RESERVED
          </span>
        </p>
      </div>

      <Image
        className={classes.image}
        width="1200"
        height="513"
        src="/home/kitchen.png"
        alt="Dananz"
        layout="responsive"
        priority={false}
      />

      <div className={classes.numbersBlockContainer}>
        <NumbersBlock />
      </div>
    </section>
  );
};

export default MainBanner;
