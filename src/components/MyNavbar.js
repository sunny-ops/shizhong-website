import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyNavbar.css";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{ opacity: "0.5" }}>
      <Container>
        <Navbar.Brand
          href="#home"
          style={{
            color: "var(--secondary-color)",
            // fontWeight: "600",
            fontFamily: "Brush Script MT",
            fontSize: "30px",
          }}
        >
          Shi's Homepage
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <div class="app__navbar-menu">
            <svg
              stroke="currentColor"
              fill="white"
              stroke-width="0"
              viewBox="0 0 20 20"
              height="30px"
              width="30px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto d-flex flex-row gap-3"
            style={{ marginLeft: "auto", fontWeight: "600" }}
          >
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
            <Nav.Link href="#work">WORK</Nav.Link>
            <Nav.Link href="#skills">SKILLS</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
