import { gql } from "@apollo/client";

export const USER_INFO = gql`
  fragment userInfo on Route {
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
