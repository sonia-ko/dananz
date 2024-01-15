import React from "react";

import Image from "next/image";

import NumbersBlock from "@/components/general/numbers-block/NumbersBlock";

import { homePageData } from "@/static/websiteData";

import classes from "./mainBanner.module.css";

const MainBanner: React.FC = () => {
  return (
    <section className={`${classes.container} container section`}>
      <div className={classes.headerContainer}>
        <h1 className={classes.heading}>{homePageData.h1}</h1>
        <p className={classes.copy}>
          <span className={classes.copyText}>
            {homePageData.creationYear} <br /> {homePageData.copyText}
          </span>
        </p>
      </div>

      <Image
        className={classes.image}
        width="1200"
        height="513"
        sizes="100vw"
        src="/home/kitchen.png"
        alt="Dananz"
        priority={true}
      />

      <div className={classes.numbersBlockContainer}>
        <NumbersBlock />
      </div>
    </section>
  );
};

export default MainBanner;
