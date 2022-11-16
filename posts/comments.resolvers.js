import client from "../client";

export default {
  Query: {
    seeComments: (_, { postId }) =>
      client.comment.findMany({ where: { postId } }),
  },
};
