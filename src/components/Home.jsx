import Gallery from "./Gallery";

const Home = () => {
  return (
    <div className="container-fluid">
      <Gallery saga="Fallen" />
      <Gallery saga="Transformers" />
      <Gallery saga="Thrones" />
      <Gallery saga="Angels" />
    </div>
  );
};

export default Home;
