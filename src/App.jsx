import request from "./requests";
import "./App.css";
import Row from "./components/Row";

function App() {
  return (
    <>
      <div>test</div>
      <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
    </>
  );
}

export default App;
