import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import SecondaryBanner from "@/components/general/sections/secondary-banner/SecondaryBanner";
import { GetStaticPaths, GetStaticProps } from "next";
import ImagesGallery from "@/components/general/sections/images-gallery/ImagesGallery";
import DescriptionContainer from "@/components/portfolio/descriptionContainer/DescriptionContainer";
import CallToAction from "@/components/general/sections/call-to-action/CallToAction";
import { databaseURL } from "@/config/databaseConfig";
import useSWR from "swr";

interface PostProps {
  slug: object;
}

const NodeName = "portfolio";

// this should be still added to DB
const roomExample = {
  slug: "transitional-room",
  title: "Transitional Room",
  description:
    "Perceived end knowledge certainly day sweetness why cordially. Ask quick six seven offer see among. Handsome met debating sir dwelling age material. ",
  mainImg: "/portfolio/transitional-room.png",
  projectOverview: [
    {
      id: "ov-par1",
      text: "Admiration we surrounded possession frequently he. Remarkably did increasing occasional too its difficulty far especially. Known tiled but sorry joy balls. Bed sudden manner indeed fat now feebly.  Face do with in need of wife paid that be.  No me applauded or favourite dashwoods.",
    },
  ],
  designProcess: [
    {
      id: "des-par1",
      text: "So by colonel hearted ferrars. Draw from upon here gone add one. He in sportsman household otherwise it perceived instantly. Is inquiry no he several excited am. Called though excuse it he having.",
    },
    {
      id: "des-par2",
      text: "Meant balls it if up doubt small purse. Required his you put the outlived answered position. An pleasure exertion if believed provided to. All led out world these music while asked. Paid mind even sons does he door no. ",
    },
  ],
  date: "July 22 - 2022",
  category: "Interior Design - Furnitur",
  images: [
    {
      src: "/about/kitchen-by-the-sea.png",
      alt: "Transitional kitchen",
    },
    {
      src: "/services/living-room-furniture.png",
      alt: "Transitional - team",
    },
    {
      src: "/teams/hands.png",
      alt: "Transitional room",
    },
    {
      src: "/portfolio/transitional-room.png",
      alt: "Transitional living room",
    },
    {
      src: "/services/consultant.png",
      alt: "Transitional walls",
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

  const [room, setRoom] = useState(roomExample);

  const selectedStyle = router.query.slug;

  const onPageLoad = async (query: string) => {};

  const { data, error } = useSWR(`${databaseURL}/portfolio.json`, (url) =>
    fetch(url).then((res) => res.json())
  );

  console.log(selectedStyle);

  useEffect(() => {
    if (data) {
      console.log(data);
      let roomToShow;

      for (const property in data) {
        console.log(data[property].slug);
        if (data[property].slug === selectedStyle) {
          console.log("this is " + selectedStyle);
          setRoom(data[property].room);
        }
      }
    }
  }, [data]);

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
