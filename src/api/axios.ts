import axios from "axios";

import { getIdToken } from "./auth";

axios.defaults.baseURL = process.env.SERVER_API_ENDPOINT;

// TODO remove logs

axios.interceptors.request.use(async function (request) {
  const token = await getIdToken();

  if (token) {
    request.headers["Authorization"] = `Bearer ${token}`;
  }

  return request;
});

axios.interceptors.response.use(
  function (response) {
    console.log("interceptor: response = ", response);
    return response;
  },
  function (error) {
    console.error("interceptor: error = ", error);
    return Promise.reject(error);
  }
);

/**
 * create reusable Axios instance using own server config by default
 */
export default axios;
