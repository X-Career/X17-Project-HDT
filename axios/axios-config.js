import axios from "axios";
const baseURL = "http://localhost:5000/api/v1";
// const baseURL = "https://x17-be.vercel.app/api/v1";
const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.response.data.message === "jwt expired" &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken) {
        try {
          const response = await axios.post(`${baseURL}/auth/refresh-token`, {
            refreshToken: refreshToken,
          });
          localStorage.setItem("accessToken", response.data?.data?.token);
          localStorage.setItem("refreshToken", response.data?.data?.RT);
          return instance(originalRequest);
        } catch (refreshError) {
          console.log("blabla");
          //chuyển đến login or...
        }
      } else {
        console.log("blabla");
        //chuyển đến login or...
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
