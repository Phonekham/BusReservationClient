import { gql } from "@apollo/client";
import { USER_INFO } from "./fragments";

export const LOGIN_MEMBER = gql`
  mutation loginMember($email: String!, $password: String!) {
    loginMember(email: $email, password: $password) {
      ...userInfo
    }
  }
  ${USER_INFO}
`;
