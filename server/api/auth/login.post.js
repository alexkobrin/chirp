import { sendError, createError } from "h3";
import { getUserByUsername } from "../../db/users";
import bcrypt from "bcrypt"



export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { username, password } = body;

  if (!username || !password) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Invalid entered params",
      })
    );
  }

  //  if the user registered
  const user = await getUserByUsername(username);
  if (!user) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Username or password is invalid ",
      })
    );
  }

  // Compare  passwords
  const doesThePasswordMatch = await bcrypt.compare(password , user.password)

  //  Generate Token
  return {
    user: user,
    doesThePasswordMatch
  }
});
