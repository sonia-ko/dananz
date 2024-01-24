import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";
import SecondaryBanner from "@/components/general/sections/secondary-banner/SecondaryBanner";
import AdvantagesList from "@/components/general/sections/advantages-list/AdvantagesList";

import Subheading from "@/components/general/subheading/Subheading";
import CallToAction from "@/components/general/sections/call-to-action/CallToAction";
import QuotationWithImage from "@/components/general/blocks/quotation-with-image/QuotationWithImage";
import { quotations } from "@/static/websiteData";

export default function OurTeams() {
  return (
    <>
      <Head>
        <title>Portfolio - Dananz Interior Design</title>
        <meta name="description" content="Portfolio - Dananz Interior Design" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <SecondaryBanner
          image={{
            src: "/portfolio/home-office.png",
            alt: "Our Teams - Hands",
          }}
          title="Portofolio"
          paragraph="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        />
        <div className="container">
          <Subheading text="Portfolio" />
          {quotations.map((item, i) => {
            return (
              <QuotationWithImage
                key={item.id}
                image={item.image}
                quoteText={item.quoteText}
                quoteAuthor={item.quoteAuthor}
                linkTo={item.linkTo}
                title={item.title}
                imgOnTheLeft={i % 2 === 0}
                id={item.anchor}
              />
            );
          })}
        </div>
        <AdvantagesList />
        <CallToAction />
      </Layout>
    </>
  );
}
