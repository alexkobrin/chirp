import UrlPattern from "url-pattern"
import {decodedAccessToken} from "../utils/jwt"
import { sendError, createError } from "h3";
import { getUserById } from "../db/users";
import {handleError} from "../utils/error"

export default defineEventHandler(async(event) => {
  const endpoint = [
    '/api/auth/user' ,
    '/api/user/tweets',
    '/api/tweets',
    '/api/tweets/:id'
  ]
  const isHandleByThisMiddleware = endpoint.some(endpoint =>{
     const pattern = new UrlPattern(endpoint)

     return pattern.match(event.req.url)
  })
  if(!isHandleByThisMiddleware) {
      return
  }

  const token = event.req.headers['authorization']?.split(' ')[1]
   
  
  const decoded = decodedAccessToken(token)
  if(!decoded) {
    return  handleError(event , 401 , "Unauthorized")
  }
  
  try {
    const  userId = decoded.userId

    const user = await getUserById(userId)
    
    event.context.auth =  {user}

  } catch (err) {
    console.log(err , "err endpoin user.get");
    return
    
  }
  
})