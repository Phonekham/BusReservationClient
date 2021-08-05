import React from "react";
import { Row, Col, Container } from "reactstrap";

import Detail from "../components/Booking/Detail";
import "../assets/scss/customs/booking.scss";
import { QUERY_BOOKING_DETAIL } from "../graphql/queries";
import { useQuery } from "@apollo/client";

const BookingDetail = (props) => {
  const { state } = props.location;

  const { data: { bookingDetail } = {} } = useQuery(QUERY_BOOKING_DETAIL, {
    variables: { id: state },
  });

  return (
    <>
      <Container>
        <Row>
          <Col md="12" className="lao p-2">
            <Detail d={bookingDetail} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BookingDetail;
