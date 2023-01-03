import formidable from "formidable";
import { createTweet } from "../../../db/tweets";

export default defineEventHandler(async (event) => {
  const form = formidable({});
  //  send tweet data
  const response = await new Promise((resolve, reject) => {
    form.parse(event.req, (err, fields, files) => {
      if (err) {
        reject(err);
      }
      resolve({ files, fields });
    });
  });

  const { fields, files } = response;

  //  get userId
  const userId = event.context?.auth?.user?.id;

  //
  const tweetData = {
    text: fields.text,
    authorId: userId,
  };
  const newTweet = await createTweet(tweetData);

  return {
    tweet: newTweet,
  };
});
