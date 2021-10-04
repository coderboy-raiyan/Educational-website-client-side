import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import DemoService from "../Demoservice/DemoService";
import "./Home.css";
const Home = () => {
  return (
    <main className="main-home">
      <section className="py-5 hero">
        <Container>
          <Row className="align-items-center py-4">
            <Col xs={12} md={6} lg={6} className="mb-5">
              <div className="hero-details">
                <h3>Access 2700+</h3>
                <h1>Online Tutorial From Top Instructor.</h1>
                <p>
                  Meet university,and cultural institutions, who'll share their
                  experience.
                </p>
                <Link to="/services">
                  <button className="btn btn-primary">View all course</button>
                </Link>
              </div>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <div className="hero-images">
                <div className="main-img">
                  <img
                    src="https://themepure.net/template/educal/educal/assets/img/hero/hero-1.jpg"
                    alt=""
                  />
                </div>
                <div className="img-sec">
                  <img
                    src="https://themepure.net/template/educal/educal/assets/img/hero/hero-sm-1.jpg"
                    alt=""
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <DemoService></DemoService>
    </main>
  );
};

export default Home;
