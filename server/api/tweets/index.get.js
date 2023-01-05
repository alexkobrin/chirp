import { tweetTransformer } from "~~/server/transformers/tweet"
import { getTweets } from "../../db/tweets"



export default defineEventHandler(async (event)=>{
  const tweets = await getTweets({
    include:{
      author : true,
      mediaFiles: true
    }
  })
 
  return {
   tweets: tweets.map(tweetTransformer)
  }
})