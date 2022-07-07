import { GetStaticProps, NextPage } from "next";
import { API_URL } from "../app/constants";
import { IPlace } from "../app/types/place";

import Layout from "../app/components/common/Layout";
import Filters from "../app/components/elements/Filters/Filters";
import HeadingSection from "../app/components/elements/Home/HeadingSection/HeadingSection";
import PopularPlaces from "../app/components/elements/PopularPlaces/PopularPlaces";
import Search from "../app/components/elements/Search/Search";

interface IHome {
  places: IPlace[];
}

const Home: NextPage<IHome> = ({ places }) => {
  return (
    <Layout>
      <HeadingSection />
      <div style={{ width: "85%", margin: "0 auto" }}>
        <Search />
        <Filters />
        <PopularPlaces places={places} />
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const result = await fetch(`${API_URL}/places`);
  const places = await result.json();

  return {
    props: {
      places,
    },
  };
};

export default Home;
