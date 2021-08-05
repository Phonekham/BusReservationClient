import { gql } from "@apollo/client";

import {
  BOOKING_INFO,
  ROUTE_INFO,
  ROUTE_LISTS_INFO,
  SEAT_INFO,
} from "./fragments";

export const CHECK_DEPAERTURE_TIME = gql`
  query checkDepartureTime($departureDate: Date!, $route: ID!) {
    checkDepartureTime(departureDate: $departureDate, route: $route) {
      ...routeListsInfo
    }
  }
  ${ROUTE_LISTS_INFO}
`;

export const QUERY_ROUTES = gql`
  query queryRoutes {
    routes {
      ...routeInfo
    }
  }
  ${ROUTE_INFO}
`;

export const QUERY_ROUTE = gql`
  query queryRoute($id: ID!) {
    route(id: $id) {
      ...routeInfo
    }
  }
  ${ROUTE_INFO}
`;

export const QUERY_SEATS = gql`
  query seats($busType: ID!) {
    seats(busType: $busType) {
      ...seatInfo
    }
  }
  ${SEAT_INFO}
`;

export const QUERY_SEATS2 = gql`
  query seats2($busType: ID!) {
    seats2(busType: $busType) {
      ...seatInfo
    }
  }
  ${SEAT_INFO}
`;

export const QUERY_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      username
      email
      phone
      firstname
      lastname
    }
  }
`;

export const QUERY_BOOKING_DETAIL = gql`
  query bookingDetail($id: ID!) {
    bookingDetail(id: $id) {
      ...bookingInfo
    }
  }
  ${BOOKING_INFO}
`;

export const QUERY_USER_BOOKINGS = gql`
  query userBookings($id: ID!) {
    userBookings(id: $id) {
      ...bookingInfo
    }
  }
  ${BOOKING_INFO}
`;
