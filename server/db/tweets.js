import {prisma} from "."
export const createTweet = (tweet) => {
 return prisma.tweet.create({
    data: tweet
  })
}

export const getTweets = (params = {}) => {
  return prisma.tweet.findMany({
   ...params
  })
}