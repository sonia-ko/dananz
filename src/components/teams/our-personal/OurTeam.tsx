import React from "react";
import Subheading from "@/components/general/subheading/Subheading";
import classes from "./OurTeam.module.css";
import TeamMemberBlock from "./TeamMemberBlock";
import { staff } from "@/static/companyData";

const OurTeam: React.FC = () => {
  return (
    <section className={`${classes.container} container`}>
      <Subheading text="Designer" />
      <h3 className="margin-b-m">Creative Person</h3>
      <p
        className={`${classes.p} text-gray text-size-s line-height-m margin-b-l `}
      >
        Customize your interior design into a dream place with the best
        designers and quality furniture. We try our best to fulfill your
        expectations.
      </p>
      <ul className={classes.contentContainer}>
        {staff.map((el) => {
          return (
            <TeamMemberBlock
              imgSrc={el.img}
              title={el.title}
              employeeName={el.employeeName}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default OurTeam;
