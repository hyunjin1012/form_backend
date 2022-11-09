import { gql } from "apollo-server";

export default gql`
  type changePWResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    changePW(password: String!): changePWResult!
  }
`;
