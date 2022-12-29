 

export default () => {
  // State
  const useAuthToken = () => useState("auth_token");
  const useAuthUser = () => useState("auth_user");

  // Helper function for manage State
  const setToken = (newToken) => {
    const authToken = useAuthToken();
    authToken.value = newToken;
  };
  const setUser = (newUser) => {
    const authUser = useAuthUser();
    authUser.value = newUser;
  };

  const login = async ({ username, password }) => {
    try {
      const { user, access_token } = await $fetch("/api/auth/login", {
        method: "POST",
        body: {
          username,
          password,
        },
      });
      setToken(access_token);
      setUser(user);
    } catch (error) {
       console.log(error , "Error login");
    }
  };




  // const refreshToken = async () => {
  //   try {
  //   // const {access_token} = await  $fetch('api/auth/refresh')
  //   // setToken(access_token);
  // } catch (error) {
      
  //   }
  // }

  // const initAuth = async () => {
  //   try {
  //     //  await sendRefreshToken()
  //   } catch (error) {
      
  //   }
  // }

  return {
    login,
    useAuthUser
  };
};
