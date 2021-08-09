import { gql } from "@apollo/client";
import { BOOKING_INFO, MEMBER_INFO, USER_INFO } from "./fragments";

export const LOGIN_MEMBER = gql`
  mutation loginMember($email: String, $username: String, $password: String!) {
    loginMember(email: $email, username: $username, password: $password) {
      ...userInfo
    }
  }
  ${USER_INFO}
`;

export const REGISTER_MEMBER = gql`
  mutation registerMember($input: MemberInput!) {
    registerMember(input: $input) {
      ...memberInfo
    }
  }
  ${MEMBER_INFO}
`;

export const BOOK_TICKET = gql`
  mutation bookTicket($input: BookingInput!) {
    bookTicket(input: $input) {
      ...bookingInfo
    }
  }
  ${BOOKING_INFO}
`;

export const PAY_BOOKING = gql`
  mutation payBooking($bookingId: ID!, $input: PayBookingInput!) {
    payBooking(bookingId: $bookingId, input: $input) {
      ...bookingInfo
    }
  }
  ${BOOKING_INFO}
`;
