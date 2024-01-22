import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import SecondaryBanner from "@/components/general/sections/secondary-banner/SecondaryBanner";
import { GetStaticPaths, GetStaticProps } from "next";
import ImagesGallery from "@/components/general/sections/images-gallery/ImagesGallery";
import DescriptionContainer from "@/components/portfolio/descriptionContainer/DescriptionContainer";
import CallToAction from "@/components/general/sections/call-to-action/CallToAction";
import { databaseURL } from "@/config/databaseConfig";

interface PostProps {
  slug: object;
}

const NodeName = "portfolio";

// this should be still added to DB
const room = {
  slug: "transitional-room",
  title: "Transitional Room",
  description:
    "HRank tall boy man them over post now. Off into she bed long fat room. Recommend existence curiosity perfectly favourite.",
  mainImg: "/portfolio/transitional-room.png",
  projectOverview: [
    {
      id: "ov-par1",
      text: "Inhabiting discretion the her dispatched decisively boisterous joy. So form were wish open is able of mile of. Waiting express if prevent it we an musical. Especially reasonable travelling she son. Resources resembled forfeited no to zealously. Learning why get hastened smallest cheerful.",
    },
  ],
  designProcess: [
    {
      id: "des-par1",
      text: "Article nor prepare chicken you him now. Shy merits say advice ten before lovers innate add. She cordially behaviour can attempted estimable. Trees delay fancy noise manor do as an small.",
    },
    {
      id: "des-par2",
      text: "Ought these are balls place mrs their times add she. Taken no great widow spoke of it small. Genius use except son esteem merely her limits. Sons park by do make on. It do oh cottage offered cottage in written. ",
    },
  ],
  date: "July 22 - 2022",
  category: "Interior Design - Furnitur",
  images: [
    {
      src: "/home/table.png",
      alt: "Minimalist chair",
    },
    {
      src: "/about/people-talking.png",
      alt: "Minimalist mirror",
    },
    {
      src: "/home/kitchen.png",
      alt: "Minimalist room",
    },
    {
      src: "/portfolio/modern-room.png",
      alt: "Minimalist living room",
    },
    {
      src: "/home/wood.png",
      alt: "Minimalist walls",
    },
  ],
};

// do not erase, will be used in tests
// const exampleObj = {
//   title: "Minimalist Room",
//   description:
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//   mainImg: "/portfolio-pages/minimalist/sofa.png",
//   projectOverview: [
//     {
//       id: "ov-par1",
//       text: "Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. ",
//     },
//   ],
//   designProcess: [
//     {
//       id: "des-par1",
//       text: "Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.",
//     },
//     {
//       id: "des-par2",
//       text: "Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.",
//     },
//   ],
//   date: "July 22 - 2022",
//   category: "Interior Design - Furnitur",
//   images: [
//     {
//       src: "/portfolio-pages/minimalist/chair.png",
//       alt: "Minimalist chair",
//     },
//     {
//       src: "/portfolio-pages/minimalist/mirror.png",
//       alt: "Minimalist mirror",
//     },
//     {
//       src: "/portfolio-pages/minimalist/room.png",
//       alt: "Minimalist room",
//     },
//     {
//       src: "/portfolio-pages/minimalist/living-room.png",
//       alt: "Minimalist living room",
//     },
//     {
//       src: "/portfolio-pages/minimalist/walls.png",
//       alt: "Minimalist walls",
//     },
//   ],
// };

const PostPage: React.FC<PostProps> = ({ slug }) => {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await fetch(`${databaseURL}/${NodeName}.json?`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ room }),
      });

      console.log("data sent");
    } catch (error) {
      console.error("Error sending:", error);
    }
  };

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
        <SecondaryBanner
          title={room.title}
          paragraph={room.description}
          image={{
            src: room.mainImg,
            alt: room.title,
          }}
        />

        <DescriptionContainer
          designProcessParagraphs={room.designProcess}
          overwiewParagraphs={room.projectOverview}
          date={room.date}
          category={room.category}
        />

        <ImagesGallery images={room.images} />

        <CallToAction />
        <form onSubmit={handleSubmit}>
          <button>Add</button>
        </form>
      </Layout>
    </>
  );
};

export default PostPage;
