import client from "../../client";
import bcrypt from "bcrypt";

export default {
  Mutation: {
    addUser: async (_, { email, password, name }) => {
      // check if the email is already on DB.
      const existingUser = await client.user.findFirst({ where: { email } });
      if (existingUser) {
        return {
          ok: false,
          error:
            "We already have your email address in our system. Want to log in instead?",
        };
      }
      // hash password
      const hashedPW = await bcrypt.hash(password, 10);
      // save and return the user
      const newUser = await client.user.create({
        data: { email, password: hashedPW, name },
      });
      return { ok: true, user: newUser };
    },
  },
};
