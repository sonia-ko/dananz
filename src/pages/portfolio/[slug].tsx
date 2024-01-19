import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import SecondaryBanner from "@/components/general/sections/secondary-banner/SecondaryBanner";
import { GetStaticPaths, GetStaticProps } from "next";

interface PostProps {
  slug: object;
}

// title: string;
// paragraph: string;
// image: {
//   src: string;
//   alt: string;
// };

const PostPage: React.FC<PostProps> = ({ slug }) => {
  const router = useRouter();

  console.log(slug);
  return (
    <>
      <Head>
        <title>Dananz - Our Teams</title>
        <meta name="description" content="Our Teams" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container">
          <SecondaryBanner
            title="Minimalist Room"
            paragraph="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            image={{
              src: "/portfolio-pages/minimalist/sofa.png",
              alt: "Sofa",
            }}
          />
        </div>
      </Layout>
    </>
  );
};

export default PostPage;
