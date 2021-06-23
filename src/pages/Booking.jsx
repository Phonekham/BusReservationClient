import React from "react";
import { useQuery } from "@apollo/client";
import { MdEventSeat } from "react-icons/md";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Container,
  CardHeader,
} from "reactstrap";

import "../assets/scss/customs/booking.scss";
import { QUERY_SEATS } from "../graphql/queries";
import Seat from "../components/Booking/Seat";
import SeatMap from "../components/Booking/SeatMap";
import SeatChart from "../components/Booking/SeatChart";

const Booking = (props) => {
  const { busType, route, time } = props.location.state;
  console.log(props.location.state);
  const { data } = useQuery(QUERY_SEATS, {
    variables: { busType: busType.id },
  });

  return (
    <>
      <Container>
        <Row>
          <Col md="12" className="lao p-2">
            <Card>
              <CardBody>
                <CardTitle className="text-center" tag="h5">
                  <b>{route.routeName}</b> ເວລາ {time}
                  <p></p>
                </CardTitle>
                <Row>
                  <Col md="12">
                    <Card>
                      <CardBody>
                        <SeatChart />
                        {/* {data &&
                            data.seats.map((seat) => (
                              <div key={seat.id} className="the-seat">
                                <MdEventSeat color="black" size="25" />
                                <p className="mt-2">{seat.seatNo}</p>
                              </div>
                            ))} */}
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/* <Seat /> */}
      </Container>
    </>
  );
};

export default Booking;
