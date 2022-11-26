import { Container } from "react-bootstrap";

const NetflixFooter = () => {
  return (
    <Container>
      <footer>
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-3">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link text-muted" href="#">
                  Audio Description
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-muted" href="#">
                  Investor Relations
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-muted" href="#">
                  Legal Notices
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link text-muted" href="#">
                  Help Center
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-muted" href="#">
                  Jobs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-muted" href="#">
                  Cookie Preferences
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link text-muted" href="#">
                  Gift Cards
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-muted" href="#">
                  Terms Of Use
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-muted" href="#">
                  Corporate Information
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col">
          <ul class="navbar-nav1">
            <li class="nav-item mt-2">
              <a class="nav-link text-muted" href="#">
                © 1997-2021 Netflix Inc
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </Container>
  );
};

export default NetflixFooter;
