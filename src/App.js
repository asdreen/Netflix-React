import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NetflixNav from "./components/NavBar";
import TvShows from "./components/TvShows";
import NetflixFooter from "./components/Footer";
import MovieDetails from "./components/MovieDetails";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <NetflixNav />
        <Routes>
          <Route element={<Home />} path="/Home" />
          <Route element={<TvShows />} path="/TvShows" />
          <Route element={<MovieDetails />} path="/details/:movieID" />
        </Routes>
        <NetflixFooter />
      </>
    </BrowserRouter>
  );
}

export default App;
