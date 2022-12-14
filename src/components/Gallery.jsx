import { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import NetflixAlert from "./NetflixAlert";

class Gallery extends Component {
  state = {
    movies: [],
  };

  fetchComments = async () => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=703a77f8&s=${this.props.saga}`
      );
      if (response.ok) {
        let data = await response.json();
        this.setState({ movies: data.Search });
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  componentDidMount() {
    this.fetchComments();
  }

  render() {
    console.log(this.state.movies);
    return (
      <div className="bg-black">
        <h3 className="title-saga mt-3 mb-3">{this.props.saga}</h3>
        <Row>
          {this.state.isError && <NetflixAlert />}
          {this.state.movies.map((element, i) => (
            <Col key={i}>
              <Card
                style={{
                  width: "100px",
                  height: "150px",
                }}
              >
                <Link to={`/details/${element.imdbID}`}>
                  <Card.Img
                    className="movie-cover"
                    variant="top"
                    src={element.Poster}
                    style={{
                      width: "100px",
                      height: "150px",
                      objectFit: "cover",
                    }}
                  />
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Gallery;
