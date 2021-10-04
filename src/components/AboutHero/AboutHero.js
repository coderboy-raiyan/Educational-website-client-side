import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutHero = (props) => {
  return (
    <div className="course-banner">
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
