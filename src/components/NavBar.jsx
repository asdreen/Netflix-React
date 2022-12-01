import { Nav, Navbar } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const NetflixNav = (props) => {
  const location = useLocation();
  console.log("LOCATION PATHNAME", location.pathname);

  return (
    <Navbar expand="lg" bg="dark" className="color-nav" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <a class="navbar-brand" href="index.html">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
              id="logo"
              alt="logo"
            />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/Home" className="navbar-links">
              <div
                className={
                  location.pathname === "/Home" ? "nav-link active" : "nav-link"
                }
              >
                Home
              </div>
            </Link>
            <Link to="/TvShows" className="navbar-links">
              <div
                className={
                  location.pathname === "/TvShows"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                TV Shows
              </div>
            </Link>

            <Nav.Link>Recently Added</Nav.Link>
            <Nav.Link>My List</Nav.Link>
          </Nav>

          <Nav className="ml-auto">
            <Nav.Link href="#deets">
              <Icon.Search color="white" />
            </Nav.Link>
            <Nav.Link>KIDS</Nav.Link>
            <Nav.Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-bell-fill icon"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
              </svg>
            </Nav.Link>
            <Nav.Item></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NetflixNav;
