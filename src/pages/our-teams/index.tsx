import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";
import SecondaryBanner from "@/components/general/sections/secondary-banner/SecondaryBanner";
import AdvantagesList from "@/components/general/sections/advantages-list/AdvantagesList";
import CallToAction from "@/components/general/sections/call-to-action/CallToAction";
import OurTeam from "@/components/teams/our-personal/OurTeam";
const inter = Inter({ subsets: ["latin"] });

export default function OurTeams() {
  return (
    <>
      <Head>
        <title>Dananz - Our Teams</title>
        <meta name="description" content="Our Teams" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <SecondaryBanner
          image={{ src: "/teams/hands.png", alt: "Our Teams - Hands" }}
          title="Our Teams"
          paragraph="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        />
        <OurTeam />
        <AdvantagesList />
        <CallToAction />
      </Layout>
    </>
  );
}
