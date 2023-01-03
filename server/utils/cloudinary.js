import { v2 as _cloudinary } from "cloudinary";



const cloudinary = () => {
  const {cloudinaryCloudName,cloudinaryApi , cloudinaryApiSecret } = useRuntimeConfig()
 
  _cloudinary.config({
    cloud_name: cloudinaryCloudName,
    api_key: cloudinaryApi,
    api_secret: cloudinaryApiSecret,
  });
  return _cloudinary

}


export const uploadToCloudinary = (image) => {
  return new Promise((resolve, reject) => {

    

    cloudinary().uploader.upload(image, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};
