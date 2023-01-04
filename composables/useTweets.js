import useFetchApi from "./useFetchApi";

export default () => {
  const postTweet = (formData) => {
    const form = new FormData();

     
    form.append("text", formData.text);

    // Iterating media files
    formData.mediaFiles.forEach((media , index) => {
        form.append('media_file_' + index , media)
    });


     

    return useFetchApi('/api/user/tweets', {
      method: 'POST',
      body: form,
    });
  };
  return {
    postTweet
  }
};
