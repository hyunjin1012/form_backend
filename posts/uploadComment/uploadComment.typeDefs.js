import { gql } from "apollo-server";

export default gql`
  type UploadCommentResult {
    ok: Boolean!
    comment: Comment
    error: String
  }
  type Mutation {
    uploadComment(content: String, postId: Int!): UploadCommentResult!
  }
`;
