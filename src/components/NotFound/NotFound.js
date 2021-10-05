import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";

const NotFound = () => {
  const history = useHistory();
  const goHome = () => {
    window.scrollTo(0, 0);
    history.push("/home");
  };
  const goBack = () => {
    window.scrollTo(0, 0);
    history.goBack();
  };
  return (
    <Container>
      <Row className="justify-content-center align-items-center flex-column wh-100">
        {/* Not found image */}
        <Col xs={12} md={12} lg={12}>
          <div className="notfound-img d-flex justify-content-center">
            <img
              src="https://i.ibb.co/52fzTVS/404-Error-Page-not-Found-with-people-connecting-a-plug-rafiki.png"
              alt=""
              width="500px"
            />
          </div>
        </Col>
        {/* Not found button */}
        <Col xs={12} md={12} lg={12}>
          <div className="btn-grp d-flex justify-content-center">
            <button
              className="btn btn-primary mb-4 py-2 px-4 fs-5 me-3"
              onClick={goHome}
            >
              Go to Home
            </button>
            <button
              className="btn btn-secondary mb-4 py-2 px-4 fs-5"
              onClick={goBack}
            >
              Back
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
