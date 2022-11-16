import { gql } from "apollo-server";

export default gql`
  type EditProfileResult {
    ok: Boolean!
    user: User
    error: String
  }
  type Mutation {
    editProfile(
      email: String
      name: String
      password: String
    ): EditProfileResult!
  }
`;
