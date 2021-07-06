import React from "react";
import { Container } from "reactstrap";

import RouteCollapse from "./RouteCollapse";

const SearchResult = ({ data }) => {
  return (
    <div className="search-results py-5">
      <Container>
        {data &&
          data.checkDepartureTime.map((route) => (
            <RouteCollapse data={route} key={route.id} />
          ))}
      </Container>
    </div>
  );
};

export default SearchResult;
