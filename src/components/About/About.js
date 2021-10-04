import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Members from "../Members/Members";
import useCoruses from "./../../hooks/useCourse";
import "./About.css";
const About = () => {
  const [courses] = useCoruses();
  return (
    <section>
      <div className="about-hero py-5 text-center">
        <Container>
          <Row className="py-5">
            <Col xs={12} md={12} lg={12}>
              <div className="about-us-title">
                <h1>About educal</h1>
                <p>
                  We are here for you to give almost all the solution about
                  education. Our main purpose to teach you. We have a big team
                  of teacher from different sectors
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="our-members my-5">
        <Container>
          <Row className="g-4">
            <Col xs={12} md={4} lg={4}>
              <Card className="p-3 shadow">
                <Card.Img
                  variant="top"
                  src="https://avatars.githubusercontent.com/u/76396442?v=4"
                  className=" rounded-circle m-auto about-img"
                />
                <Card.Body>
                  <Card.Title className="text-center"> MD Raiyan </Card.Title>
                  <Card.Text className="text-center fw-bold text-secondary">
                    CEO {"&"} Founder
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {courses.map((course) => (
              <Members course={course} key={course.title} />
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default About;
