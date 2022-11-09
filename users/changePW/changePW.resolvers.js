import bcrypt from "bcrypt";
import client from "../../client";
import jwt from "jsonwebtoken";

export default {
  Mutation: {
    changePW: async (_, { password: newPassword, token }) => {
      // verify token
      const { id } = await jwt.verify(token, process.env.SECRET_KEY);
      // hash the new PW and update the user info
      let hashedPW = null;
      if (newPassword) {
        hashedPW = await bcrypt.hash(newPassword, 10);
      }
      const updatedUser = client.user.update({
        where: { id },
        data: { ...(hashedPW && { password: hashedPW }) },
      });
      if (updatedUser.id) {
        return {
          ok: true,
        };
      } else {
        return {
          ok: false,
          error: "Sorry, your password couldn't be changed.",
        };
      }
    },
  },
};
