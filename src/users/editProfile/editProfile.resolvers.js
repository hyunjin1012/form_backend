import client from "../../client";
import bcrypt from "bcrypt";
import { protectedResolver } from "../users.utils";

const resolverFn = async (
  _,
  { email, name, password: newPassword },
  { loggedInUser }
) => {
  let hashedPW = null;
  if (newPassword) {
    hashedPW = await bcrypt.hash(newPassword, 10);
  }
  const editedUser = await client.user.update({
    where: { id: loggedInUser.id },
    data: {
      email,
      name,
      ...(hashedPW && { password: hashedPW }),
    },
  });
  if (editedUser) {
    return {
      ok: true,
      user: editedUser,
    };
  } else {
    return {
      ok: false,
      error: "Couldn't update your profile.",
    };
  }
};

export default {
  Mutation: {
    editProfile: protectedResolver(resolverFn),
  },
};
