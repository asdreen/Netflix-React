import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NetflixNav from "./components/NavBar";
import Gallery from "./components/Gallery";
import NetflixFooter from "./components/Footer";

function App() {
  return (
    <>
      <NetflixNav />

      <Gallery saga="Fallen" />
      <Gallery saga="Transformers" />
      <Gallery saga="Thrones" />
      <Gallery saga="Angels" />
      <NetflixFooter />
    </>
  );
}

export default App;
