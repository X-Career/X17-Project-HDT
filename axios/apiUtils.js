import { callApi } from "./api.js";
import { combineEndpoint } from "./apiEndpoints.js";
const handleCallApi = async (sendAccessToken) => {
  try {
    const response = await callApi(
      "GET",
      combineEndpoint.userInfoEndpoint,
      sendAccessToken
    );
    return response;
  } catch (error) {
    console.error("Lỗi:", error);
    throw error;
  }
};
const handleCallApiLogin = async (loginData, sendAccessToken) => {
  try {
    const response = await callApi(
      "POST",
      combineEndpoint.login,
      sendAccessToken,
      loginData
    );
    return response;
  } catch (error) {
    console.error("Lỗi đăng nhập:", error);
    throw error;
  }
};
export { handleCallApi, handleCallApiLogin };
