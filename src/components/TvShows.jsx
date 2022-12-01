import Gallery from "./Gallery";

const Home = () => {
  return (
    <div className="container-fluid">
      <Gallery saga="Vikings" />
      <Gallery saga="Prison%20Break" />
      <Gallery saga="Sherlock" />
    </div>
  );
};

export default Home;
