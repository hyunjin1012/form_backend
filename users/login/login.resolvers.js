import client from "../../client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default {
  Mutation: {
    login: async (_, { email, password }) => {
      // find the user with the args.email
      const user = await client.user.findFirst({ where: { email } });
      if (!user) {
        return {
          ok: false,
          error:
            "We don't have your email address in our system. Want to sign up instead?",
        };
      }
      // check password with args.password
      const passwordOk = await bcrypt.compare(password, user.password);
      if (!passwordOk) {
        return {
          ok: false,
          error: "That's not your password. Please try again.",
        };
      }
      // issue a token and send it to the user
      const token = await jwt.sign({ id: user.id }, process.env.SECRET_KEY);
      return {
        ok: true,
        token,
      };
    },
  },
};
