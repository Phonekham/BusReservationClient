import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { RiSteering2Fill } from "react-icons/ri";
import {
  Collapse,
  Button,
  CardBody,
  Card,
  CardTitle,
  Col,
  Row,
} from "reactstrap";

import "../../assets/scss/customs/SearchResult.scss";

import { QUERY_SEATS } from "../../graphql/queries";
import Seat from "./Seat";
import SeatInfo from "./SeatInfo";
import RouteInfo from "./RouteInfo";
import SeatSymbol from "./SeatSymbol";

const RouteCollapse = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const { id, busType, fare, route, time } = data;

  const { data: seats } = useQuery(QUERY_SEATS, {
    variables: { busType: busType.id },
  });

  return (
    <Card className="m-2 lao">
      <CardTitle className="text-center mt-2" tag="h5">
        {route.routeName}
      </CardTitle>
      <Row>
        <RouteInfo key={id} fare={fare} busType={busType} time={time} />
        <Col sm="2">
          <div className="m-2">
            <Button
              color={isOpen ? "danger" : "primary"}
              onClick={toggle}
              style={{ marginBottom: "1rem" }}
            >
              {isOpen ? "ເຊືອງລາຍລະອຽດ" : "ລາຍລະອຽດ"}
            </Button>
          </div>
        </Col>
      </Row>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            <div className="d-flex seat-symbols py-4 mb-2">
              <SeatSymbol color="grey" status="ຍັງຫວ່າງ" />
              <SeatSymbol color="red" status="ຖືກຈອງແລ້ວ" />
              <SeatSymbol color="green" status="ກຳລັງເລືອກ" />
            </div>
            <div className="row seat-details">
              <div className="col-md-4 mr-md-5">
                <div className="seat-plan">
                  <div className="diver-area text-left mx-3 pb-5">
                    <RiSteering2Fill />
                  </div>
                  <div
                    className="seats"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Row>
                      {seats &&
                        seats.seats.map((seat) => (
                          <Col md="3" sm="3" xs="3">
                            <Seat key={seat.id} seat={seat} />
                          </Col>
                        ))}
                    </Row>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <SeatInfo />
              </div>
            </div>
          </CardBody>
        </Card>
      </Collapse>
    </Card>
  );
};

export default RouteCollapse;
