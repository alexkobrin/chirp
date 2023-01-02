import { sendError, createError } from "h3";
 import {getRefreshTokenByToken} from "../../db/refreshTokens"
 import {decodeRefreshToken , generateToken} from "../../utils/jwt"
 import  {getUserById} from "../../db/users"


export default defineEventHandler(async (event)=> {
      const refreshToken = getCookie(event , 'refresh_token') || '' 
      
      
      if(!refreshToken) {
        return  sendError(event,  createError({
          statusCode: 401,
          statusMessage: 'Refresh token is invalid'
        }))
       }

      //  check is refresh Token is in out DB
      const rToken = await getRefreshTokenByToken(refreshToken)
    
      if(!rToken) {
        return  sendError(event,  createError({
          statusCode: 401,
          statusMessage: 'Refresh token is invalid'
        }))
       }

      //  check if user token is not expired
       const tk = decodeRefreshToken(refreshToken)


       try {
          const user = await getUserById(tk.userId)
          const {accessToken} = generateToken(user)

          return {
           access_token: accessToken
          }
       } catch (error) {
        return  sendError(event,  createError({
          statusCode: 500,
          statusMessage: 'something went wrong'
        }))
       }
 
})