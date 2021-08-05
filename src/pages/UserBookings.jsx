import React from "react";
import { Row, Col, Container } from "reactstrap";

import Detail from "../components/Booking/Detail";
import "../assets/scss/customs/booking.scss";
import { QUERY_USER_BOOKINGS } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import UserBookingTable from "../components/Booking/Table/UserBookingsTable";
import { useSelector } from "react-redux";

const UserBookings = (props) => {
  const authState = useSelector((state) => state.auth);
  const { userData } = authState;

  const { data: { userBookings } = {} } = useQuery(QUERY_USER_BOOKINGS, {
    variables: { id: userData.id },
  });

  return (
    <>
      <Container>
        <Row>
          <Col md="12" className="lao p-2">
            <UserBookingTable bookings={userBookings} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserBookings;
