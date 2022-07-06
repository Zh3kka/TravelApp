import { useRouter } from "next/router";
import Layout from "../../app/components/common/Layout";

const Place = () => {
  const {
    query: { slug },
  } = useRouter();
  return <Layout>{slug} </Layout>;
};

export default Place;
