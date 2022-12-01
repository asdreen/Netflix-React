import { useEffect, useState } from "react";

import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState([]);

  console.log(params.imdbID);

  const navigate = useNavigate();

  const fetchSingleMovie = async (id) => {
    try {
      let response = await fetch(
        "https://omdbapi.com/?apikey=703a77f8&i=" + id
      );
      if (response.ok) {
        let data = await response.json();
        setTimeout(() => {
          setMovie(data);
        }, 2000);
      } else {
        console.log("There is a problem fetching data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleMovie(params.movieID);
  }, [params.movieID]);

  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={6} className="text-center">
          <h1>Movie Details:</h1>
          {/* if pasta is truthy... */}
          {movie && (
            <Card style={{ backgroundColor: "gray" }}>
              <Card.Img variant="top" src={movie.Poster} />
              <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <div>
                  <div>{movie.Year}</div>
                  <div>Category: {movie.Type}</div>
                </div>
                <Button
                  className="mt-3"
                  variant="primary"
                  onClick={() => navigate("/TvShows")}
                >
                  Back
                </Button>
              </Card.Body>
            </Card>
          )}
          {/* let's put an error 404 message if the user
          tries to find an off-menu pasta :) */}
          {typeof movie === "undefined" && (
            <h1 className="mt-5">MOVIE NOT FOUND</h1>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
