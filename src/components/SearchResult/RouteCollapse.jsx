import React, { useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { RiSteering2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Collapse, Button, CardBody, Card, Col, Row } from "reactstrap";

import "../../assets/scss/customs/SearchResult.scss";

import {
  QUERY_GET_BOOKED_SEATS,
  QUERY_SEATS,
  QUERY_SEATS2,
} from "../../graphql/queries";
import Seat from "./Seat";
import SeatInfo from "./SeatInfo";
import RouteInfo from "./RouteInfo";
import SeatSymbol from "./SeatSymbol";
import { useStateValue } from "../../context/queryRoute/provider";

const RouteCollapse = ({ data }) => {
  const bookingState = useSelector((state) => state.booking);
  const { departureTime } = bookingState;
  const { id, busType, fare, time, isBookable } = data;
  console.log(data);
  const [routeData] = useStateValue();
  const { departureDate } = routeData;

  const [dTime, setDTTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const { data: seats } = useQuery(QUERY_SEATS, {
    variables: { busType: busType && busType.id },
  });
  const { data: seats2 } = useQuery(QUERY_SEATS2, {
    variables: { busType: busType && busType.id },
  });

  const [fetchBookedSeats, { data: { getBookedSeats } = {} }] = useLazyQuery(
    QUERY_GET_BOOKED_SEATS,
    {
      variables: { departureTime: dTime && dTime, departureDate },
    },
    { fetchPolicy: "network-only" }
  );
  const bookedSeats = getBookedSeats && getBookedSeats.map((s) => s.id);

  return (
    <Card outline body color="info" className="m-3 lao p-2 pt-4">
      <Row>
        <RouteInfo
          key={id}
          fare={fare}
          busType={busType}
          time={time}
          isBookable={isBookable}
        />
        <Col sm="2">
          <div className="m-2">
            <Button
              disabled={!isBookable}
              color={isOpen ? "danger" : "primary"}
              onClick={() => {
                toggle();
                setDTTime(id);
                fetchBookedSeats();
              }}
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
            <Row className="seat-details">
              <Col md="4">
                <div className="seat-plan">
                  <div className="diver-area text-left mx-3 pb-5">
                    <RiSteering2Fill />
                    <h5 className="text-center">ຊັ້້ນ 1</h5>
                  </div>
                  <div
                    className="seats"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Row>
                      {seats &&
                        seats.seats.map((seat) => (
                          <Col md="3" sm="3" xs="3">
                            <Seat
                              key={seat.id}
                              seat={seat}
                              departureTimeId={id}
                              fare={fare}
                              dTime={dTime}
                              getBookedSeats={getBookedSeats}
                              bookedSeats={bookedSeats}
                            />
                          </Col>
                        ))}
                    </Row>
                  </div>
                </div>
              </Col>
              {data.busType.floorType === 2 && (
                <Col md="4">
                  <div className="seat-plan">
                    <h5 className="text-center mt-3">ຊັ້້ນ 2</h5>
                    <div
                      className="seats"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Row className="mt-5">
                        {seats2 &&
                          seats2.seats2.map((seat) => (
                            <Col md="3" sm="3" xs="3">
                              <Seat
                                key={seat.id}
                                seat={seat}
                                departureTimeId={id}
                                fare={fare}
                                dTime={dTime}
                                getBookedSeats={getBookedSeats}
                                bookedSeats={bookedSeats}
                              />
                            </Col>
                          ))}
                      </Row>
                    </div>
                  </div>
                </Col>
              )}
              <Col md="4">
                {departureTime === id && <SeatInfo routeId={id} data={data} />}
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Collapse>
    </Card>
  );
};

export default RouteCollapse;
