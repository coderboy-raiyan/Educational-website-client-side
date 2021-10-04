import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import AboutHero from "./../AboutHero/AboutHero";
import "./Contact.css";
const Contact = () => {
  return (
    <section className="main-contact">
      <AboutHero>
        <div className="hero-course">
          <h1>Contact</h1>
        </div>
      </AboutHero>

      <Container>
        <Row className="py-5">
          {/* Contact form starts here */}
          <Col xs={12} md={7} lg={7}>
            <div className="from-inner">
              <h1 className="contact-title">Get in Touch</h1>
              <p className="mb-5 text-secondary">
                Have a question or just want to say hi? We'd love to hear from
                you.
              </p>
            </div>
            <Row>
              <Col xs={12} md={6} lg={6}>
                <div className="input-group mb-4">
                  <input
                    type="text"
                    className="form-control py-3  text-dark border-0 input"
                    placeholder="Your name"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                </div>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <div className="input-group mb-4">
                  <input
                    type="text"
                    className="form-control  py-3   border-0 input"
                    placeholder="Your email"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                </div>
              </Col>
              <Col xs={12} md={12} lg={12}>
                <div className="input-group mb-4">
                  <input
                    type="text"
                    className="form-control  py-3 text-dark border-0 input"
                    placeholder="Subject"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                </div>
              </Col>
              <Col xs={12} md={12} lg={12}>
                <Form.Group
                  className="mb-4 "
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Enter your message"
                    className="  text-dark border-0 input"
                    rows={3}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={12} lg={12}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    I agree to the{" "}
                    <a href="*" className="text-primary">
                      Terms {"&"} Conditions
                    </a>
                  </label>
                </div>
                <button className="btn btn-primary mt-4 fs-5 py-2 px-3">
                  Send your message
                </button>
              </Col>
            </Row>
          </Col>
          {/* Contact description starts here*/}
          <Col xs={12} md={5} lg={5}>
            <div className="contact-card w-75 m-auto">
              <Card className="border-0 shadow p-2 rounded">
                <Card.Body>
                  <ul>
                    <li className="office-info d-flex justify-content-between align-items-start ">
                      <div className="me-2">
                        <i className="bi bi-geo-alt text-primary"></i>
                      </div>
                      <div>
                        <h5>New York Office</h5>
                        <p className="text-secondary">
                          Maypole Crescent 70-80 Upper St Norwich NR2 1LT
                        </p>
                      </div>
                    </li>
                  </ul>

                  <ul>
                    <li className="office-info d-flex justify-content-between align-items-start ">
                      <div className="me-2">
                        <i className="bi bi-envelope text-primary"></i>
                      </div>
                      <div>
                        <h5>Email us directly</h5>

                        <a href="/">support@educal.com info@educal.com</a>
                      </div>
                    </li>
                  </ul>

                  <ul>
                    <li className="office-info d-flex justify-content-start align-items-start ">
                      <div className="me-2">
                        <i className="bi bi-telephone text-primary"></i>
                      </div>
                      <div>
                        <h5>Phone</h5>
                        <p className="text-secondary">+(426) 742 26 44</p>
                        <p className="text-secondary">+(224) 762 442 32</p>
                      </div>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
