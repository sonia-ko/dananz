import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";
import ProductSummary from "@/components/general/sections/product-summary/ProductSummary";
import CallToAction from "@/components/general/sections/call-to-action/CallToAction";
import SecondaryBanner from "@/components/general/sections/secondary-banner/SecondaryBanner";
import AchievementsList from "@/components/services/achievements-list/AchievementsList";

const inter = Inter({ subsets: ["latin"] });

export default function Services() {
  return (
    <>
      <Head>
        <title>Dananz - Services</title>
        <meta name="description" content="Dananz Interior Design - Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <SecondaryBanner
          image={{ src: "/services/living-room.png", alt: "Living room" }}
          title="Services"
          paragraph="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        />
        <AchievementsList />
        <ProductSummary />
        <CallToAction />
      </Layout>
    </>
  );
}
