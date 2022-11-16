import { gql } from "apollo-server";

export default gql`
  type Post {
    id: Int!
    title: String
    content: String
    author: User!
    authorId: Int!
    comments: [Comment]
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    seePosts(email: String): [Post]
  }
`;
