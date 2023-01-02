import jwt from "jsonwebtoken" 
const  {jwtAccessSecret , jwtRefreshSecret} = useRuntimeConfig()

const generateAccessToken = (user) => {
  
 return jwt.sign({userId: user.id} ,  jwtAccessSecret , {expiresIn: '10m'})

}
const generateRefreshToken = (user) => {
  return jwt.sign({userId: user.id} ,  jwtRefreshSecret , {expiresIn: '4h'})
}
// check if refresh token is not expired
 export const decodeRefreshToken = (token) => {
  try {
      return  jwt.verify(token , jwtRefreshSecret)
  } catch (err) {
    console.log(err , "Decode Refresh token Error");
    
  }
 }

export const generateToken = (user) => {
const accessToken = generateAccessToken(user)
const refreshToken = generateRefreshToken(user)
 

  return  {
    accessToken  ,
    refreshToken  
  }
}

export const sendRefreshToken =   (event , token) => {
 
     setCookie(event, "refresh_token" , token , {
      httpOnly: true,
      sameSite: true
     })
}