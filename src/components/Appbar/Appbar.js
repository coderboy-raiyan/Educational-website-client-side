import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Appbar.css";
const Appbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="p-3">
      <Container>
        <Navbar.Brand>
          <Link to="/home">
            <img
              src="https://themepure.net/template/educal/educal/assets/img/logo/logo.png"
              alt=""
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 nav-link"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <li className="nav-item me-4">
              <Link className="text-decoration-none text-secondary" to="/home">
                Home
              </Link>
            </li>

            <li className="nav-item me-4">
              <Link className="text-decoration-none text-secondary" to="/about">
                About us
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link
                className="text-decoration-none text-secondary"
                to="/contact"
              >
                Contact
              </Link>
            </li>

            <li className="nav-item me-4">
              <Link
                className="text-decoration-none text-secondary"
                to="/services"
              >
                Services
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Appbar;
