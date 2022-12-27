import { sendError, createError } from "h3";
import { getUserByUsername } from "../../db/users";
import bcrypt from "bcrypt"
import {generateToken , sendRefreshToken} from "../../utils/jwt"
import {exclude} from "../../transformers/user"
import { createRefreshToken } from "../../db/refreshTokens";
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
  
//  Simple check
  if (!doesThePasswordMatch){
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Username or password is invalid ",
      })
    );
  }



  //  Generate Token
  // Access Token 
  // Refresh  Token

  const {accessToken , refreshToken} = generateToken(user)
  const userWithoutPassword = exclude(user, ['password','createdAt' ,'updatedAt'])

  // Save it in db
  await createRefreshToken({
    token:  refreshToken,
    userId : user.id
  })


  // Add http only cookie
    sendRefreshToken(event , refreshToken)


  return {
    access_token: accessToken,
    user : userWithoutPassword
     
  }
});
