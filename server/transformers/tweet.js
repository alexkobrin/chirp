import {mediaFilesTransformer} from "./mediaFiles"
import {exclude} from "./user"
import human from 'human-time'
export const tweetTransformer = (tweet) => {
   return  {
      id : tweet.id,
      text : tweet.text ,
      mediaFiles: !!tweet.mediaFiles ? tweet.mediaFiles.map(mediaFilesTransformer) : [],
      author: !!tweet.author ?  exclude(tweet.author , ['createdAt' , 'updatedAt' , 'password']) : null,
      replies: !!tweet.replies ? tweet.replies.map(tweetTransformer) : [],
      replyTo: !!tweet.replyTo ? tweetTransformer(tweet.replyTo) : null,
      repliesCount: !!tweet.replies ?  tweet.replies.length : 0,
      postedAt : human(tweet.createdAt)
  
   }
}