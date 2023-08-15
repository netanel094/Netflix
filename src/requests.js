const API_KEY = "e5776e6e120f2e7c59281b95e707f0d5";

const request = {
  fetchTrending: `http://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `http://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default request;
