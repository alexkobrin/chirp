import { sendRefreshToken } from "~~/server/utils/jwt";
import { removeRefreshToken } from "../../db/refreshTokens";

export default defineEventHandler(async (event) => {
  const refreshToken = getCookie(event, "refresh_token");

  try {
    // Remove refresh_token
    await removeRefreshToken(refreshToken);
  } catch (err) {}

    sendRefreshToken(event , null)

    return   {
      message : 'Logout Succesfully'
    }
});
