import Head from "next/head";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import Layout from "@/components/layout/Layout";
import Button from "@/components/general/button/button";
import SecondaryBanner from "@/components/general/sections/secondary-banner/SecondaryBanner";
import AdvantagesList from "@/components/general/sections/advantages-list/AdvantagesList";
import CallToAction from "@/components/general/sections/call-to-action/CallToAction";
import OurTeam from "@/components/teams/our-personal/OurTeam";
import classes from "../styles/404.module.css";
const inter = Inter({ subsets: ["latin"] });

export default function NotFoundPage() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>404 Page - Dananz</title>
        <meta name="description" content="Page not found" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* {`${}`} */}
        <section className={`${classes.container} container`}>
          <h1 className=" text-centered">Page Not Found</h1>
          <p className=" text-centered p-narrow text-narrow text-size-s p-narrow">
            Unfortunately, the page you were looking for cannot be found...
          </p>
          <Button
            btnStyle="blue"
            btnText="Back to Home Page"
            type="button"
            onClick={() => router.push("/")}
          />
        </section>
      </Layout>
    </>
  );
}
