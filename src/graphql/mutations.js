import { gql } from "@apollo/client";
import { MEMBER_INFO, USER_INFO } from "./fragments";

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
