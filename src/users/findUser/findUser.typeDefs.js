import { gql } from "apollo-server";

export default gql`
  type User {
    id: Int!
    email: String!
    name: String
    createdAt: String!
    updatedAt: String!
  }
  type Query {
    seeUser: [User]
  }
`;
