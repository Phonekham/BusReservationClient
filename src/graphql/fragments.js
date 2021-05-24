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
