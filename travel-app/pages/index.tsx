import { useState } from "react";
import { GetStaticProps, NextPage } from "next";
import { API_URL } from "../app/constants";
import { IPlace } from "../app/types/place";

import Layout from "../app/components/common/Layout";
import Filters from "../app/components/elements/Filters/Filters";
import HeadingSection from "../app/components/elements/Home/HeadingSection/HeadingSection";
import PopularPlaces from "../app/components/elements/PopularPlaces/PopularPlaces";
import Search from "../app/components/elements/Search/Search";

interface IHome {
  initialPlaces: IPlace[];
}

const Home: NextPage<IHome> = ({ initialPlaces }) => {
  const [places, setPlaces] = useState(initialPlaces);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Layout>
      <HeadingSection />
      <div style={{ width: "85%", margin: "0 auto" }}>
        <Search
          setPlaces={setPlaces}
          initialPlaces={initialPlaces}
          setIsLoading={setIsLoading}
        />
        <Filters setPlaces={setPlaces} />
        <PopularPlaces places={places} isLoading={isLoading} />
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const result = await fetch(`${API_URL}/places`);
  const initialPlaces = await result.json();

  return {
    props: {
      initialPlaces,
    },
  };
};

export default Home;
