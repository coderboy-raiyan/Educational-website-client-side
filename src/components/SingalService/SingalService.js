import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SingalService.css";
const SingalService = (props) => {
  const {
    title,
    category,
    price,
    rating,
    img,
    reviews,
    lesson,
    author_pic,
    author,
  } = props.course;
  return (
    <Col xs={12} md={4} lg={4}>
      <Card className="h-100 main-card border-0 shadow bg-white">
        <div className="card-image">
          <Card.Img variant="top" src={img} className="card-img" />
          <h6 className="card-cate">{category}</h6>
        </div>
        <Card.Body className="px-4">
          <Card.Subtitle className="mb-2 text-muted d-flex justify-content-between align-items-center">
            <li>
              <i className="bi bi-journal"></i> {lesson} lesson
            </li>
            <li>
              <i className="bi bi-star-fill text-warning"></i> {rating} (
              {reviews})
            </li>
          </Card.Subtitle>
          <Card.Title className="card-title my-3">{title}</Card.Title>
          <Card.Text className="cart-des mb-4">
            <img
              src={author_pic}
              alt=""
              className="rounded-circle author-pic shadow"
            />{" "}
            <span>{author}</span>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <div className="price d-flex justify-content-between align-items-center">
            <h5>${price}</h5>
            <Link className="text-dark" to="/services">
              Know Details
            </Link>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default SingalService;
