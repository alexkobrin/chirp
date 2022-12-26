import {sendError, createError} from "h3"
import { createUser } from "../../db/users"
import {exclude} from "../../transformers/user"
export default defineEventHandler(async (event) => {
   const body =  await readBody(event)
   //  some basic validation
   const {username , email , password , repeatPassword , name} = body
   if (!username || !email || !password || !repeatPassword || !name)  {
   return sendError(event , createError({statusCode:400 , statusMessage: 'invalid params'}))
   }
//  some basic validation to passwords
   if (password != repeatPassword) {
      return sendError(event , createError({statusCode:400 , statusMessage: 'password do not match'}))
   }

   //  Prepare data to db 
  const userData = {
     username,
     password,
     email,
     name,
     profileImage: 'https://picsum.photos/200/200'

  }
//  write data in DB
   const user  = await createUser(userData)
// Prepare to return data to client without data exposing

   const userWithoutPassword = exclude(user, ['password','createdAt' ,'updatedAt'])

   return {

    body: userWithoutPassword

   }

})