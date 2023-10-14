import instance from "./axios-config";
import { METHODS } from "../global";

const restApi = async (
  method,
  endpointKey,
  requestData = null,
  headers = null
) => {
  try {
    const listReqParams = requestData?.payload?.query?.params;
    if (listReqParams && !endpointKey.includes("$params")) {
      throw new Error("Missing $params item");
    } else if (listReqParams && endpointKey.includes("$params")) {
      endpointKey = endpointKey.replace("$params", listReqParams);
    }
    const requestDataFormat = requestData?.payload?.body;
    let response;
    switch (method) {
      case METHODS.GET:
        response = await instance.get(endpointKey);
        break;
      case METHODS.POST:
        response = await instance.post(endpointKey, requestDataFormat, headers);
        break;
      case METHODS.PUT:
        response = await instance.put(endpointKey, requestDataFormat);
        break;
      case METHODS.DELETE:
        response = await instance.delete(endpointKey);
        break;
      default:
        throw new Error(`Phương thức không hợp lệ: ${method}`);
    }

    // Xử lý và trả về dữ liệu từ phản hồi
    return {
      data: response.data,
      message: response.data.message || "success",
      success: true,
      status: response.status,
    };
  } catch (error) {
    // Xử lý và trả về lỗi nếu có
    return {
      data: error.response ? error.response.data : null,
      message: "Error: " + error.message,
      success: false,
    };
  }
};

export default restApi;
