import { prisma } from ".";
import bcrypt from "bcrypt";


export const createUser = (userData) => {
  const hash = bcrypt.hashSync(userData.password , 10)
  const finalUserData = {...userData , 
    password : hash
  }
  return prisma.user.create({
    data: finalUserData
  })
}
export const getUserByUsername = (username) => {
   return prisma.user.findUnique({
    where : {
      username
    }
   })
}
export const getUserById = (userId) => {
  return prisma.user.findUnique({
    where : {
      id : userId
    }
  })

}