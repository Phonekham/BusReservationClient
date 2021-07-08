import { gql } from "@apollo/client";

export const USER_INFO = gql`
  fragment userInfo on MemberAuthData {
    user {
      id
      username
      email
      phone
      firstname
      lastname
    }
    jwt
  }
`;

export const ROUTE_LISTS_INFO = gql`
  fragment routeListsInfo on DepartureTime {
    id
    time
    fare
    isBookable
    busType {
      id
      type
      floorType
    }
    route {
      id
      routeName
      destination
    }
  }
`;

export const ROUTE_INFO = gql`
  fragment routeInfo on Route {
    id
    routeName
    routeEngName
    distance
    departure
    destination
  }
`;

export const SEAT_INFO = gql`
  fragment seatInfo on Seat {
    id
    seatNo
    busType {
      id
      type
    }
    floor
  }
`;

export const MEMBER_INFO = gql`
  fragment memberInfo on Member {
    id
    username
    email
    phone
    firstname
    lastname
  }
`;
