import { useState } from "react";
import PropTypes from "prop-types";

import "../Row.css";
import useMovies from "../hooks/useMovies";
const baseImgUrl = "https://image.tmdb.org/t/p/original/";

export default function Row({ title, fetchUrl }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { movies, loading, error } = useMovies(fetchUrl);

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
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        <button className="back_btn" onClick={move(-1)}>
          back
        </button>
        {movies.map((movie, index) => (
          <img
            id={`${title}_${index}`}
            className="row__poster"
            key={movie.id}
            src={`${baseImgUrl}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
        <button className="next_btn" onClick={move(1)}>
          next
        </button>
      </div>
    </div>
  );
}

Row.propTypes = {
  title: PropTypes.string.isRequired,
  fetchUrl: PropTypes.string.isRequired,
};
