import client from "../../client";

export default {
  Query: {
    seeProfile: async (_, { id }) =>
      await client.user.findUnique({ where: { id } }),
  },
};
