import { gql } from "apollo-server";

export default gql`
  type UploadPostResult {
    ok: Boolean!
    post: Post
    error: String
  }
  type Mutation {
    uploadPost(title: String, content: String): UploadPostResult!
  }
`;
