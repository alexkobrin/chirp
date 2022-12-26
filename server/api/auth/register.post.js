import {sendError, createError} from "h3"
import { createUser } from "../../db/users"
export default defineEventHandler(async (event) => {
   const body =  await readBody(event)
   const {username , email , password , repeatPassword , name} = body
   if (!username || !email || !password || !repeatPassword || !name)  {
   return sendError(event , createError({statusCode:400 , statusMessage: 'invalid params'}))
   }

   if (password != repeatPassword) {
      return sendError(event , createError({statusCode:400 , statusMessage: 'password do not match'}))
   }

   
  const userData = {
     username,
     password,
     email,
     name

  }

   const user  = await createUser(userData)

   return {

    body: user

   }

})