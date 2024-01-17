import React from "react";
import Subheading from "@/components/general/subheading/Subheading";
import Button from "@/components/general/button/button";

import Image from "next/image";

import { useRouter } from "next/router";

import classes from "./MaterialSummary.module.css";

const MaterialSummary: React.FC = () => {
  const router = useRouter();

  return (
    <section className={`${classes.container} container`}>
      <Subheading text="MATERIAL" />
      <div className={classes.contentContainer}>
        <div>
          <h3 className={classes.heading}>
            choice of materials for quality furniture.
          </h3>
          <p className="text-gray text-size-s margin-y-s">
            You can custom the material as desired. And our furniture uses the
            best materials and selected quality materials.
          </p>
          <Button
            onClick={() => {
              router.push("/contact-us/");
            }}
            btnText="See Materials"
            btnStyle="transparent"
          />
        </div>
        <div className={classes.imageContainer}>
          <Image
            className={classes.image1}
            width="341"
            height="392"
            src="/home/wood.png"
            alt="Wood"
            priority={false}
          />

          <Image
            className={classes.image2}
            width="241"
            height="225"
            src="/home/wood-painting.png"
            alt="Wood"
            priority={false}
          />

          <Image
            className={classes.image3}
            width="194"
            height="178"
            src="/home/stones.png"
            alt="Wood"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
};

export default MaterialSummary;
