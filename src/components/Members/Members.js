import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Member.css";
const Members = (props) => {
  const { author_pic, author, profession } = props.course;
  return (
    // Singal Members for about us
    <Col xs={12} md={4} lg={4}>
      <Card className="p-3 shadow">
        <Card.Img
          variant="top"
          src={author_pic}
          className="rounded-circle m-auto about-img"
        />
        <Card.Body>
          <Card.Title className="text-center">{author}</Card.Title>
          <Card.Text className="text-center fw-light text-secondary">
            <small>{profession}</small>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Members;
