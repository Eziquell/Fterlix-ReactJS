import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";

const NavBar = () => {
  return (
  <div>
    <Navbar variant="dark">
      <Container>
        <Navbar.Brand href="/" className="titleBrand text-danger">FTERLIX</Navbar.Brand>
          <Nav className="titleLink">
            <Nav.Link href="/movies">Movies</Nav.Link>
            <Nav.Link href="#trending">Trending</Nav.Link>
            <NavDropdown title="Genre">
              <NavDropdown.Item href="#superhero">Action</NavDropdown.Item>
              <NavDropdown.Item href="#superhero">Superhero</NavDropdown.Item>
            </NavDropdown>
          </Nav>
      </Container>
    </Navbar>
  </div>
  )
};

export default NavBar;