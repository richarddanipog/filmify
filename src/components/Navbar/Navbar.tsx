import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <NavbarBs>
      <Container>
        <div className="text-logo">
          <h2>Filmify</h2>
        </div>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/movies" as={NavLink} disabled>
            Movies
          </Nav.Link>
          <Nav.Link to="/tv-series" as={NavLink} disabled>
            TV Series
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
};
