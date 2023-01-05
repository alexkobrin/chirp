import {mediaFilesTransformer} from "./mediaFiles"
import {exclude} from "./user"
export const tweetTransformer = (tweet) => {
   return  {
      id : tweet.id,
      text : tweet.text ,
      mediaFiles: tweet.mediaFiles ? tweet.mediaFiles.map(mediaFilesTransformer) : [],
      author: tweet.author ?  exclude(tweet.author , ['createdAt' , 'updatedAt' , 'password']) : null
   }
}