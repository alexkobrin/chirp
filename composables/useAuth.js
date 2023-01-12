import useFetchApi from "../composables/useFetchApi";
import jwt_decode from "jwt-decode";
export default () => {
  // State app
  const useAuthToken = () => useState("auth_token");
  const useAuthUser = () => useState("auth_user");
  const useAuthLoading = () => useState("auth_loading", () => true);
  // Helper function for manage State
  const setToken = (newToken) => {
    const authToken = useAuthToken();
    authToken.value = newToken;
  };
  const setUser = (newUser) => {
    const authUser = useAuthUser();
    authUser.value = newUser;
  };

  const setIsAuthLoading = (boolean) => {
    const authLoading = useAuthLoading();
    authLoading.value = boolean;
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
      console.log(error, "Error login");
    }
  };

  const reRefreshAccessToken = () => {
    const authToken = useAuthToken();

    if (!authToken.value) return;

    const jwt = jwt_decode(authToken.value);

   const newRefreshTime = jwt.exp - 60000
   setTimeout(async()=>{
       await  refreshToken()
      reRefreshAccessToken()
   }, newRefreshTime)
  };

  const refreshToken = async () => {
    try {
      const { access_token } = await $fetch("/api/auth/refresh");
      setToken(access_token);
    } catch (error) {}
  };
  const getUser = async () => {
    try {
      const data = await useFetchApi("/api/auth/user");
      setUser(data.user);
    } catch (err) {
      console.log(err, "User not defined");
    }
  };

  const initAuth = async () => {
    setIsAuthLoading(true);
    try {
      await refreshToken();
      await getUser();

      reRefreshAccessToken();

      setIsAuthLoading(false);
    } catch (err) {
      console.log(err, "err Refresh");
    }
  };
  const logout = () => {
    return  new Promise(async(resolve, reject) => {
       try {
         await useFetchApi('/api/auth/logout' , {
          method: 'POST',
         })
         setToken(null)
         setUser(null)
         resolve()
       } catch (err) {
        reject(err)
       }
    })
  }

  return {
    login,
    useAuthUser,
    useAuthToken,
    initAuth,
    useAuthLoading,
    logout,
  };
};
