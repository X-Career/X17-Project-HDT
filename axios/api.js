import axios from "./index.js";
import * as endpoints from "./apiEndpoints.js";

// Hàm gọi API
export const callApi = async (
  method,
  endpointKey,
  sendAccessToken,
  requestData = null
) => {
  try {
    const endpoint = endpointKey;
    if (!endpoint) {
      throw new Error("Endpoint không tồn tại");
    }

    const headers = {
      "Content-Type": "application/json",
    };
    if (sendAccessToken) {
      const accessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTBlZjIwMWE4Yzg0N2ZkZWVmNDc3NzYiLCJpYXQiOjE2OTU1NTIyODUsImV4cCI6MTY5NTU1OTQ4NX0.HcKB9qSj5qu8TsS7YYv6rsNlVU_0XnsjagH8BGd7RlI";
      headers.Authorization = `Bearer ${accessToken}`;
    }

    let response;
    if (method === "GET") {
      response = await axios.get(endpoint, { headers });
    } else if (method === "POST") {
      response = await axios.post(endpoint, requestData, { headers });
    } else if (method === "PUT") {
      response = await axios.put(endpoint, requestData, { headers });
    } else if (method === "DELETE") {
      response = await axios.delete(endpoint, { headers });
    } else {
      throw new Error(`Phương thức không hợp lệ: ${method}`);
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};
