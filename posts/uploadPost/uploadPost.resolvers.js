import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

const resolverFn = async (_, { title, content }, { loggedInUser }) => {
  const post = await client.post.create({
    data: { title, content, authorId: loggedInUser.id },
  });
  if (post) {
    return { ok: true, post: post };
  } else return { ok: false, error: "Please try again." };
};

export default {
  Mutation: {
    uploadPost: protectedResolver(resolverFn),
  },
};
