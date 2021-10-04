import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutHero = (props) => {
  return (
    <div className="course-banner">
      {/*Note : This is hero for contact and services page starts here */}
      <Container>
        <Row>
          <Col xs={12} md={12} lg={12}>
            {props.children}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutHero;
