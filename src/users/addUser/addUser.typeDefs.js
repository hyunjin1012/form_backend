import { gql } from "apollo-server";

export default gql`
  type AddUserResult {
    ok: Boolean!
    user: User
    error: String
  }
  type Mutation {
    addUser(email: String!, password: String!, name: String): AddUserResult!
  }
`;
