import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

const resolverFn = async (_, { content, postId }, { loggedInUser }) => {
  const comment = await client.comment.create({
    data: { content, postId, authorId: loggedInUser.id },
  });
  if (comment) {
    return { ok: true, comment: comment };
  } else return { ok: false, error: "Please try again." };
};

export default {
  Mutation: {
    uploadComment: protectedResolver(resolverFn),
  },
};
