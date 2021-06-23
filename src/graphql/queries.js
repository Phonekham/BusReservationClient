import { gql } from "@apollo/client";

import { ROUTE_INFO, ROUTE_LISTS_INFO } from "./fragments";

export const CHECK_DEPAERTURE_TIME = gql`
  query checkDepartureTime($departureDate: Date!, $route: ID!, $seatQty: Int!) {
    checkDepartureTime(
      departureDate: $departureDate
      route: $route
      seatQty: $seatQty
    ) {
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
      id
      seatNo
      busType {
        id
        type
      }
    }
  }
`;
