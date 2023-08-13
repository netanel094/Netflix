import request from "./requests";
import "./App.css";
import Row from "./components/Row";

function App() {
  return (
    <>
      <div>test</div>
      <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
    </>
  );
}

export default App;
