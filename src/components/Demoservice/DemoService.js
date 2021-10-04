import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import useCoruses from "../../hooks/useCourse";
import SingalService from "./../SingalService/SingalService";
import "./DemoService.css";
const DemoService = () => {
  const [courses] = useCoruses();
  const history = useHistory();
  const handelClick = () => {
    window.scrollTo(0, 0);
    history.push("/services");
  };
  return (
    <section className="py-5 main-demo-service">
      <Container>
        <Row className="home-service g-4 my-4">
          {/* demo title starts here */}
          <div className="home-service-header">
            <div className="home-service-title">
              <h1>Find The Right Online Course For You</h1>
              <p className="">
                You don't have to struggle alone, you've got our assistance and
                help.
              </p>
            </div>
          </div>
          {/* Demo courses starts here*/}
          {courses.slice(0, 4).map((course) => (
            <SingalService course={course} key={course.title} />
          ))}
        </Row>
        <Row>
          <Col xs={12}>
            <div className="btn-grp d-flex justify-content-center align-items-center">
              <button
                className="btn btn-primary py-2 px-4 fs-5"
                onClick={handelClick}
              >
                See More
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DemoService;
