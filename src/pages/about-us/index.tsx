import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";
import CallToAction from "@/components/general/sections/call-to-action/CallToAction";
import SecondaryBanner from "@/components/general/sections/secondary-banner/SecondaryBanner";
import Achievements from "@/components/about/achievements/Achievements";
import AdvantagesList from "@/components/general/sections/advantages-list/AdvantagesList";

const inter = Inter({ subsets: ["latin"] });

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us - Dananz Interior Design</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div>
          <SecondaryBanner
            image={{ src: "/about/people-talking.png", alt: "People talking" }}
            title="About"
            paragraph="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          />
          <Achievements />
          <AdvantagesList />
          <CallToAction />
        </div>
      </Layout>
    </>
  );
}
