import Link from "next/link";
import { FC } from "react";
import { IPlace } from "../../../types/place";
import styles from "./PopularPlaces.module.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface IPopularPlaces {
  places: IPlace[];
  isLoading: boolean;
}

const PopularPlaces: FC<IPopularPlaces> = ({ places, isLoading }) => {
  return (
    <div className={styles.wrapper}>
      <h2>Popular places</h2>
      {isLoading ? (
        <Skeleton
          count={3}
          height={200}
          borderRadius="20px"
          baseColor="#1b1b1d"
          highlightColor="#2c2c2e"
        />
      ) : places.length ? (
        places.map((place) => (
          <Link href={`/place/${place.slug}`} key={place.slug}>
            <a
              className={styles.item}
              style={{ backgroundImage: `url(${place.imagePath})` }}
            >
              <div className={styles.heading}>
                {`${place.location.city}, ${place.location.country}`}
              </div>
            </a>
          </Link>
        ))
      ) : (
        <div className={styles.notFound}>
          <span className="material-icons-outlined">close</span>
          Not Found
          <span className="material-icons-outlined">close</span>
        </div>
      )}
    </div>
  );
};

export default PopularPlaces;
