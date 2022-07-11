import React, { FC } from "react";
import { IPlace } from "../../../types/place";
import Layout from "../../common/Layout";
import ButtonTrip from "./ButtonTrip/ButtonTrip";
interface IPlacePage {
  place: IPlace;
}

const Place: FC<IPlacePage> = ({ place }) => {
  return (
    <Layout>
      <ButtonTrip />
    </Layout>
  );
};

export default Place;
