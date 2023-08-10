import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Row({ title }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {}, []);

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}
