import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { GetStaticPaths, GetStaticProps, GetStaticPropsResult } from "next";

import { databaseURL } from "@/config/databaseConfig";

import Head from "next/head";

import Layout from "@/components/layout/Layout";
import ErrorNotFound from "@/components/general/sections/error-not-found/ErrorNotFound";
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

  const [room, setRoom] = useState<Room | undefined>(undefined);
  const [roomNotFound, setRoomNotFound] = useState<boolean>(false);

  const selectedStyle = router.query.slug;

  const { data, error } = useSWR(`${databaseURL}/${NodeName}.json`, (url) =>
    fetch(url).then((res) => {
      console.log(res);
      return res.json();
    })
  );

  useEffect(() => {
    if (data) {
      for (const property in data) {
        if (data[property].slug === selectedStyle) {
          setRoom(data[property].room);
          setRoomNotFound(false);
          break;
        }
      }
    } else {
      setRoomNotFound(true);
      console.log("room not found");
    }
  }, [data, error]);

  if (roomNotFound) {
    return (
      <>
        <Head>
          <title> Dananz - Room not found .... </title>
          <meta name="description" content="Loading..." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <ErrorNotFound
            title="404 - Page Not Found"
            description="Unfortunately, the page you were looking for cannot be found..."
            btnText="Back to Portfolio"
            linkTo="/portfolio/"
          />
        </Layout>
      </>
    );
  }

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
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const slug = params?.slug;
    const res = await fetch(`${databaseURL}/${NodeName}.json`);
    const data = await res.json();

    if (!data) {
      console.error("Data not available");
      return { props: {} };
    }

    let room = null;

    for (const property in data) {
      if (data[property].slug === slug) {
        room = data[property].room;
      }
    }

    return {
      props: {
        slug,
        room,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return { props: {} };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const res = await fetch(`${databaseURL}/${NodeName}.json`);
    const data = await res.json();

    if (!data || Object.keys(data).length === 0) {
      console.error("Data not available");
      return {
        paths: [],
        fallback: false,
      };
    }

    const paths = Object.keys(data).map((property) => ({
      params: { slug: data[property].slug },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      paths: [],
      fallback: false,
    };
  }
};

export default RoomPage;
