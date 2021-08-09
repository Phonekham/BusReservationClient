import React from "react";
import { Row, Col, Container } from "reactstrap";

import PayDetail from "../components/Booking/Detail/PayDetail";
import "../assets/scss/customs/booking.scss";
import { QUERY_BOOKING_DETAIL } from "../graphql/queries";
import { useQuery } from "@apollo/client";

const PayBooking = (props) => {
  const { state } = props.location;

  const { data: { bookingDetail } = {}, refetch } = useQuery(
    QUERY_BOOKING_DETAIL,
    {
      variables: { id: state },
    }
  );

  return (
    <>
      <Container>
        <Row>
          <Col md="12" className="lao p-2">
            <PayDetail d={bookingDetail} refetch={refetch} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PayBooking;
