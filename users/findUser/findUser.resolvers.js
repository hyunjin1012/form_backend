import client from "../../client";


export default {
  Query: {
    seeUser: ({ authorId }) =>
      client.user.findUnique({ where: { id: authorId } }),
  },
};
