import React from "react";
import { Col, Row, Card, CardBody } from "reactstrap";

import HomeCarousel from "../components/Home/HomeCarousel";
import SearchBar from "../components/SearchBar/SearchBar";
import SearchResult from "../components/SearchResult/SearchResult";

const SearchResults = (props) => {
  const { state } = props.location;

  return (
    <div>
      <Card className="lao p-3">
        <CardBody>
          <Row>
            <Col md="6">
              <div className="searchbar-card ">
                <SearchBar />
              </div>
            </Col>
            <Col md="6">
              <HomeCarousel />
            </Col>
          </Row>
        </CardBody>
      </Card>
      <SearchResult data={state} />
    </div>
  );
};

export default SearchResults;
