import { useEffect, useState } from "react";
import axios from "axios";
import requests from "../requests";
function Banner() {
  const [movie, setMovie] = useState([]);

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

  console.log(`${movie?.backdrop_path}`);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "100%",
        backgroundImage: `url(
    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>

        <div className="banner_buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My list</button>
        </div>
      </div>
    </header>
  );
}

export default Banner;
