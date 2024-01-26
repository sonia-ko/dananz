import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";
import ErrorNotFound from "@/components/general/sections/error-not-found/ErrorNotFound";

const inter = Inter({ subsets: ["latin"] });

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>404 Page - Dananz</title>
        <meta name="description" content="Page not found" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <ErrorNotFound
          title="404 - Page Not Found"
          description="Unfortunately, the page you were looking for cannot be found..."
        />
      </Layout>
    </>
  );
}
