import { FC, useState } from "react";
import styles from "./Filters.module.scss";
import cn from "classnames";

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
  const [filter, setFilter] = useState("");

  return (
    <div className={styles.wrapper}>
      {cities.map((city) => (
        <button
          key={city.location}
          onClick={() => setFilter(city.location)}
          className={cn({
            [styles.active]: city.location === filter,
          })}
        >
          {city.location}
        </button>
      ))}
    </div>
  );
};

export default Filters;
