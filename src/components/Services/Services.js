import React, { useEffect, useState } from "react";
import { Container, FormControl, InputGroup, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import AboutHero from "../AboutHero/AboutHero";
import SingalService from "./../SingalService/SingalService";
import "./Services.css";
const Services = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    fetch("fakedata.json")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setSearch(data);
      });
  }, []);

  const handleSearch = (e) => {
    let keyWords = e.target.value.trim().toLowerCase();
    const filtered = courses.filter((course) =>
      course.category.toLowerCase().includes(keyWords)
    );
    setSearch(filtered);
  };

  return (
    <section className="services">
      {/* Services hero section */}
      <AboutHero>
        <div className="hero-course">
          <h1>Courses</h1>
        </div>
      </AboutHero>

      <section className="all-courses my-5">
        <Container>
          {/* Search bar starts here */}
          <Row className="g-4 py-5">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search here (ex. Fitness...)"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={handleSearch}
              />
              <Button
                variant="outline-secondary"
                disabled={true}
                id="button-addon2"
              >
                <i className="bi bi-search"></i>
              </Button>
            </InputGroup>

            {/* All courses  starts here*/}

            {search.map((course) => (
              <SingalService course={course} key={course.title} />
            ))}
          </Row>
        </Container>
      </section>
    </section>
  );
};

export default Services;
