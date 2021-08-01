import React from "react";
import { Col, Row, Card, CardBody } from "reactstrap";

import "../assets/scss/customs/Home.scss";
import HomeCarousel from "../components/Home/HomeCarousel";
import SearchBar from "../components/SearchBar/SearchBar";

const Home = () => {
  return (
    <div className="home">
      <Card className="lao p-3">
        <CardBody>
          <Row>
            <Col md="6">
              <Card className="searchbar-card">
                <CardBody>
                  <SearchBar />
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <HomeCarousel />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default Home;
