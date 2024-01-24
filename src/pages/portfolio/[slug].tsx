import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { GetStaticPaths, GetStaticProps } from "next";

import { databaseURL } from "@/config/databaseConfig";

import Head from "next/head";

import Layout from "@/components/layout/Layout";
import SecondaryBanner from "@/components/general/sections/secondary-banner/SecondaryBanner";
import ImagesGallery from "@/components/general/sections/images-gallery/ImagesGallery";
import DescriptionContainer from "@/components/portfolio/descriptionContainer/DescriptionContainer";
import CallToAction from "@/components/general/sections/call-to-action/CallToAction";
import { Room } from "@/types/types";

interface RoomProps {
  slug: object;
  props: object;
}

const NodeName = "portfolio";
// const NodeName = "prf";

//will be used for tests
const roomExample = {
  slug: "transitional-room",
  title: "Test Room",
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

const RoomPage: React.FC<RoomProps> = ({ slug, props }) => {
  const router = useRouter();

  console.log(props);
  const [room, setRoom] = useState<Room | undefined>(undefined);

  const selectedStyle = router.query.slug;

  const { data, error } = useSWR(`${databaseURL}/${NodeName}.json`, (url) =>
    fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      for (const property in data) {
        if (data[property].slug === selectedStyle) {
          setRoom(data[property].room);
        }
      }
    }
  }, [data]);

  if (!room) {
    return (
      <>
        <Head>
          <title> Dananz </title>
          <meta name="description" content="Loading..." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <section className="container">
            <SecondaryBanner
              image={{
                src: "/portfolio/home-office.png",
                alt: "Our Teams - Hands",
              }}
              title="Loading..."
              paragraph="Please wait for the page to be loaded...."
            />
          </section>
        </Layout>
      </>
    );
  }

  return (
    <>
      <Head>
        <title> {room.title} - Dananz </title>
        <meta name="description" content={room.description} />
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
        {/* test button */}
        {/* <form onSubmit={handleSubmit}>
          <button>Add</button>
        </form> */}
      </Layout>
    </>
  );
};

export default RoomPage;
