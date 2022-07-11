import React, { FC } from "react";
import { IPlace } from "../../../types/place";
import Layout from "../../common/Layout";
import ButtonTrip from "./ButtonTrip/ButtonTrip";
import Information from "./Information/Information";

interface IPlacePage {
  place: IPlace;
}

const Place: FC<IPlacePage> = ({ place }) => {
  return (
    <Layout>
      <Information place={place} />
      <ButtonTrip />
    </Layout>
  );
};

export default Place;
