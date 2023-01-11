import useFetchApi from "./useFetchApi";

export default () => {

  const usePostTweetModal = () =>  useState('post_tweet_modal'  , () => false)
 const useReplyTweet = () => useState('reply_tweet' , ()=> null)

  const closePostTweetModal  = () => {
       const postTweetModal =  usePostTweetModal()
       postTweetModal.value = false
  }

  const  setReplyTo = (tweet) => {
    const replyTo = useReplyTweet()
    replyTo.value = tweet
  }
  const openPostTweetModal  = (tweet = null) => {

    const postTweetModal =  usePostTweetModal()
    postTweetModal.value = true
    setReplyTo(tweet)
  }






  const postTweet = (formData) => {
    const form = new FormData();

    form.append("text", formData.text);

    
    form.append('replyTo', formData.replyTo)

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
    closePostTweetModal,
    usePostTweetModal,
    openPostTweetModal,
    useReplyTweet
  };
};
