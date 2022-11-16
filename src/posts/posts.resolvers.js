import client from "../client";

export default {
  Query: {
    seePosts: async (_, { email }) => {
      const author = await client.user.findUnique({ where: { email } });
      return await client.post.findMany({ where: { authorId: author.id } });
    },
  },
};
