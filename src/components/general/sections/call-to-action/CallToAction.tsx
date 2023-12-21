import React from "react";
import classes from "./CallToAction.module.css";
import Link from "next/link";
import Image from "next/image";
import Button from "../../button/button";
import { useRouter } from "next/router";

const CallToAction: React.FC = () => {
  const router = useRouter();

  return (
    <section className={classes.container}>
      <div className={`${classes.containerInner} container`}>
        <p
          className={`${classes.columnLeft} text-white text-size-m text-semibold`}
        >
          let's discuss making your interior like a dream place!
        </p>
        <div className={classes.columnRight}>
          <p className="text-gray margin-s">
            Contact us below to work together to build your amazing interior
          </p>
          <Button
            btnStyle="white"
            btnText="Contact Us"
            onClick={() => {
              router.push("/contact-us/");
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
