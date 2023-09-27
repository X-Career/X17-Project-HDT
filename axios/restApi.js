import instance from "./axios-config";
import { METHODS } from "../global";
export const restApi = async (method, endpointKey, requestData = null) => {
  try {
    const endpoint = endpointKey;
    if (!endpoint) {
      throw new Error("Endpoint không tồn tại");
    }

    let response;
    switch (method) {
      case METHODS.GET:
        response = await instance.get(endpoint);
        break;
      case METHODS.POST:
        response = await instance.post(endpoint, requestData);
        break;
      case METHODS.PUT:
        response = await instance.put(endpoint, requestData);
        break;
      case METHODS.DELETE:
        response = await instance.delete(endpoint);
        break;
      default:
        throw new Error(`Phương thức không hợp lệ: ${method}`);
    }

    return {
      data: response.data,
      message: "Success",
      success: true,
      status: response.status,
    };
  } catch (error) {
    return {
      data: error.response.data,
      message: "Error: " + error.message,
      success: false,
    };
  }
};

export default restApi;
