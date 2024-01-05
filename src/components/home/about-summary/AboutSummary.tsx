import React from "react";
import Subheading from "@/components/general/subheading/Subheading";
import Image from "next/image";
import QuotationWithImage from "@/components/general/blocks/quotation-with-image/QuotationWithImage";

import classes from "./AboutSummary.module.css";

const AboutSummary: React.FC = () => {
  return (
    <section className={`${classes.container} container`}>
      <Subheading text="About" />
      <h3>
        “We're one of the best furniture agency. Prioritizing customers and
        making purchases easy are the hallmarks of our agency.”
      </h3>
      <QuotationWithImage
        image={{ src: "/home/table.png", alt: "Table" }}
        quoteAuthor={{
          authorName: "Arga Danaan",
          title: "CEO of Dananz",
          imageSrc: "/general/quoteauthors/argda-dananz.png",
        }}
        quoteText="Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere."
      />
    </section>
  );
};

export default AboutSummary;
