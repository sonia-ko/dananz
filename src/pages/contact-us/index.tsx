import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";
import CallToAction from "@/components/general/sections/call-to-action/CallToAction";
import HeadingWithParagraphCentered from "@/components/general/blocks/heading-with-parahraph-centered/HeadingWithParagraphCentered";
import FeedbackForm from "@/components/general/blocks/feedback-form/FeedbackForm";
import Locations from "@/components/general/sections/locations/Locations";
const inter = Inter({ subsets: ["latin"] });

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Dananz Interior Design</title>
        <meta name="description" content="Contact us page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section className="container">
          <HeadingWithParagraphCentered
            heading="Contact Us"
            paragraph="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          />
          <FeedbackForm />
        </section>
        <Locations />
        <CallToAction />
      </Layout>
    </>
  );
}
