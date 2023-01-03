import formidable from "formidable";
import { createTweet } from "../../../db/tweets";
import { tweetTransformer } from "../../../transformers/tweet";
import { createMediaFiles } from "../../../db/mediaFiles";
import { uploadToCloudinary } from "../../../utils/cloudinary";

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

  // Create media files
  const filePromises = Object.keys(files).map(async (key) => {
    const file = files[key];

    //  store image in cloudianry

   const cloudinaryResource = await uploadToCloudinary(file.filepath);

   
// Create info about image in db
    return createMediaFiles({
      url: cloudinaryResource.secure_url,
      providerPublicId: cloudinaryResource.public_id,
      userId: userId,
      tweetId: newTweet.id,
    });
  });

  await Promise.all(filePromises);

  return {
    tweet : tweetTransformer(newTweet)
  };
});
