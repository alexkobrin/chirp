import { getTweetById } from "../../db/tweets";
import { tweetTransformer } from "../../transformers/tweet";

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;

  const tweet = await getTweetById(id, {
    include: {
      author: true,
      mediaFiles: true,
      replyTo: {
        // only top relations
        include: {
          author: true,
        },
      },
      replies: {
        include: {
          mediaFiles: true,
          author: true,
          replyTo: {
            include: {
              author: true,
            },
          },
        },
      },
    },
  });
  return {
    tweet: tweetTransformer(tweet),
  };
});
