import React, { FC } from "react";
import styles from "./Filters.module.scss";

const cities = [
  {
    location: "USA",
  },
  {
    location: "Japan",
  },
  {
    location: "Paris",
  },
  {
    location: "Bora Bora",
  },
  {
    location: "Brazil",
  },
  {
    location: "Norway",
  },
];
const Filters: FC = () => {
  return (
    <div className={styles.wrapper}>
      {cities.map((city) => (
        <button key={city.location}>{city.location}</button>
      ))}
    </div>
  );
};

export default Filters;
