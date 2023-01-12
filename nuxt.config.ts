// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app : {
    head: {
      titleTemplate: "%s | Twitter",
    }
  },

  modules: ["@nuxtjs/tailwindcss"],
  build : {
    transpile : ['@heroicons/vue']
  },

  // Access to variable in env
  runtimeConfig: {
    // JWT
    jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
    jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET,

    // Cloudinary
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
    cloudinaryApi: process.env.CLOUDINARY_API,
    cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
  },
});
