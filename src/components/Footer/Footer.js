import React from "react";
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="pt-5 main-footer">
      <Container>
        <Row className="gx-4 py-5">
          {/* Barnd footer starts here */}
          <Col xs={12} md={3} lg={3}>
            <div className="brand-inner">
              <Link to="/home">
                <img
                  src="https://themepure.net/template/educal/educal/assets/img/logo/logo-2.png"
                  alt=""
                />
              </Link>
              <p className="brand-des">
                Great lesson ideas and lesson plans for ESL teachers! Educators
                can customize lesson plans to best.
              </p>
              <ul className="d-flex justify-content-start align-items-center">
                <li>
                  <Link to="/">
                    <i className="bi bi-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="bi bi-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="bi bi-discord"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          {/* Company footer starts here */}
          <Col xs={12} md={3} lg={3}>
            <div className="company-inner ms-5">
              <h5>Company</h5>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/services">Courses</Link>
                </li>
                <li>
                  <Link to="*">Event</Link>
                </li>
                <li>
                  <Link to="*">Instructor</Link>
                </li>
                <li>
                  <Link to="*">Career</Link>
                </li>
                <li>
                  <Link to="*">Become a Teacher</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </Col>
          {/* platform footer starts here */}
          <Col xs={12} md={3} lg={3}>
            <div className="company-inner">
              <h5>Platform</h5>
              <ul>
                <li>
                  <Link to="*">Browse Library</Link>
                </li>
                <li>
                  <Link to="*">Library</Link>
                </li>
                <li>
                  <Link to="*">Partners</Link>
                </li>
                <li>
                  <Link to="*">News and Blogs</Link>
                </li>
                <li>
                  <Link to="*">Career</Link>
                </li>
                <li>
                  <Link to="*">FAQs</Link>
                </li>
              </ul>
            </div>
          </Col>
          {/* Subscribe footer starts here*/}
          <Col xs={12} md={3} lg={3}>
            <div className="subs-inner">
              <h5>Subscribe</h5>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Your email address"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button
                  variant="primary"
                  id="button-addon2"
                  className="py-3 fs-4"
                >
                  <i className="bi bi-arrow-right"></i>
                </Button>
              </InputGroup>
              <p>
                <small>
                  Get the latest news and updates right at your inbox.
                </small>
              </p>
            </div>
          </Col>
        </Row>
        {/* Copyright footer starts here*/}
        <Row className="mt-4">
          <Col xs={12} md={12} lg={12}>
            <p className="copy-right text-center py-3">
              <small>
                © 2022 Educal, All Rights Reserved. Design By{" "}
                <a href="/">Team Raiyan</a>
              </small>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
