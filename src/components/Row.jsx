import { useState } from "react";
import PropTypes from "prop-types";
import Youtube from "react-youtube";
import "../Row.css";
import useMovies from "../hooks/useMovies";
import movieTrailer from "movie-trailer";

const baseImgUrl = "https://image.tmdb.org/t/p/original/";

export default function Row({ title, fetchUrl, isLargeRow }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { movies, loading, error } = useMovies(fetchUrl);

  const [trailerUrl, setTrailerUrl] = useState("");

  const move = (delta) => () => {
    const nextIndex = currentIndex + delta;
    const nextElement = document.getElementById(`${title}_${nextIndex}`);
    if (!nextElement) return;

    nextElement.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "center",
    });
    setCurrentIndex(nextIndex);
  };

  if (loading) {
    return <h1>Loading</h1>;
  }
  if (error) {
    return <h1>error</h1>;
  }

  const options = {
    height: "390",
    width: "100%",
    playerVars: { autoplay: 1 },
  };

  const handleClick = (movie) => {
    console.log(movie?.name);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        <button className="back_btn" onClick={move(-1)}>
          back
        </button>
        {movies.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            id={`${title}_${index}`}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            key={movie.id}
            src={`${baseImgUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}

        <button className="next_btn" onClick={move(1)}>
          next
        </button>
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={options} />}
    </div>
  );
}

Row.propTypes = {
  title: PropTypes.string.isRequired,
  fetchUrl: PropTypes.string.isRequired,
  isLargeRow: PropTypes.bool,
};
