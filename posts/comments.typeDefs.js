import { gql } from "apollo-server";

export default gql`
  type Comment {
    id: Int!
    content: String
    author: User!
    authorId: Int!
    post: Post!
    postId: Int!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    seeComments(postId: Int!): [Comment]
  }
`;
