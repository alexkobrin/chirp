import { sendError, createError } from "h3";
export const handleError = (event, code, message) => {
  return sendError(event , createError({
    statusCode: code,
    statusMessage: message
   }))
}