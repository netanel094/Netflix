import { useEffect, useState } from "react";
import axios from "axios";
import requests from "../../requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
  }

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(requests.fetchNetflixOriginals);
      const randomIndex = Math.floor(
        Math.random() * response.data.results.length - 1
      );
      setMovie(response.data.results[randomIndex]);
    }

    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(
    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My list</button>
        </div>

        <h2 className="banner__description">
          {truncate(movie?.overview, 170)}
        </h2>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
