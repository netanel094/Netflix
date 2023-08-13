import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export default function useMovies(fetchUrl) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = useCallback(() => {
    setLoading(true);
    axios
      .get(fetchUrl)
      .then((response) => setMovies(response.data.results))
      .catch((error) => {
        setError(true);
        console.error(error);
      })
      .finally(() => setLoading(false));
  }, [fetchUrl]);

  useEffect(() => {
    fetchData();
  }, [fetchUrl, fetchData]);

  return { movies, loading, error };
}
