import useFetchApi from "./useFetchApi";

export default () => {
  const postTweet = (formData) => {
    const form = new FormData();

    form.append("text", formData.text);

    // Iterating media files
    formData.mediaFiles.forEach((media, index) => {
      form.append("media_file_" + index, media);
    });

    return useFetchApi("/api/user/tweets", {
      method: "POST",
      body: form,
    });
  };
  const getHomeTweets = async () => {
    try {
      const response = await useFetchApi("api/tweets");
      return response;
    } catch (err) {
      console.log(err, "homeTweets Error");
      return err;
    }
  };

  const getTweetById = (tweetId) => {
    
    return new Promise(async (resolve, reject) => {
      try {
        const response = await useFetchApi(`/api/tweets/${tweetId}`);
        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  };

  return {
    postTweet,
    getHomeTweets,
    getTweetById,
  };
};
