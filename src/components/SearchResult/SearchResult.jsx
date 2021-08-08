import React from "react";
import { Alert, Container } from "reactstrap";

import { useStateValue } from "../../context/queryRoute/provider";

import RouteCollapse from "./RouteCollapse";

const SearchResult = ({ data }) => {
  const [routeData] = useStateValue();

  return (
    <div className="search-results py-5">
      <Container>
        <div className="text-center lao mb-4">
          <Alert color="info">
            <h3>ລາຍການທ້ຽວລົດປະຈຳສາຍ {routeData.route.label}</h3>
          </Alert>
        </div>
        {data &&
          data.checkDepartureTime.map((route) => (
            <RouteCollapse data={route} key={route.id} />
          ))}
      </Container>
    </div>
  );
};

export default SearchResult;
