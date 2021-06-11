import React, { useRef } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { Row, Col, Card, CardBody, CardTitle, Container } from "reactstrap";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import "../assets/scss/customs/Home.scss";
import QueryRouteForm from "../components/Home/Form/QueryRouteForm";
import QueryRouteTable from "../components/Home/Table";
import { CHECK_DEPAERTURE_TIME, QUERY_ROUTE } from "../graphql/queries";
import LeftSlider from "../components/Home/LeftSlider";
import "./style.scss";
import { useStateValue } from "../context/queryRoute/provider";

const Home = () => {
  const tableRef = useRef(null);
  const executeScroll = () => tableRef.current.scrollIntoView();
  const [routeData] = useStateValue();
  const { departureDate, seatQty, route } = routeData;

  const { data: theRoute } = useQuery(QUERY_ROUTE, {
    variables: { id: route && route },
  });

  const [checkQueryRoute, { data, loading }] = useLazyQuery(
    CHECK_DEPAERTURE_TIME,
    {
      variables: { departureDate, seatQty, route },
      fetchPolicy: "network-only",
    }
  );
  if (data) {
    executeScroll({ behavior: "smooth" });
  }

  const renderTable = () => {
    if (loading) {
      return (
        <div className="text-center">
          <Loader type="Circles" color="#00BFFF" height={300} width={300} />
        </div>
      );
    } else if (data) {
      return (
        <Card>
          <CardBody>
            <CardTitle className="text-center lao" tag="h5">
              <b>ຕາຕະລາງລົດ {theRoute && theRoute.route.routeName}</b>
            </CardTitle>
            <QueryRouteTable data={data} />
          </CardBody>
        </Card>
      );
    }
  };

  return (
    <>
      <section className="p-0 head">
        <Container>
          <Row>
            <Col md="6" sm="6">
              <LeftSlider />
            </Col>
            <Col md="6" sm="6" className="lao p-2">
              <Card>
                <CardBody>
                  <CardTitle className="text-center" tag="h5">
                    <b>ຄົ້ນຫາຕາຕະລາງລົດ</b>
                  </CardTitle>
                  <QueryRouteForm
                    checkQueryRoute={checkQueryRoute}
                    loading={loading}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section ref={tableRef}>
        <Container>
          <Row>
            <Col md="12">{renderTable()}</Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
