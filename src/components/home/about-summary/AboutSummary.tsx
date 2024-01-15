import React from "react";
import Subheading from "@/components/general/subheading/Subheading";
import QuotationWithImage from "@/components/general/blocks/quotation-with-image/QuotationWithImage";

import { homePageData } from "@/static/websiteData";

const AboutSummary: React.FC = () => {
  return (
    <section className="container section">
      <Subheading text="About" />
      <h3> {homePageData.aboutTitle} </h3>
      <QuotationWithImage
        image={{ src: "/home/table.png", alt: "Table" }}
        quoteAuthor={{
          authorName: "Arga Danaan",
          title: "CEO of Dananz",
          imageSrc: "/general/quoteauthors/argda-dananz.png",
        }}
        linkTo="/about-us/"
        quoteText={homePageData.aboutQuoteText}
      />
    </section>
  );
};

export default AboutSummary;
