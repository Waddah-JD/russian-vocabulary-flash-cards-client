import axios from "axios";

import { getIdToken } from "./api/auth";

axios.defaults.baseURL = process.env.SERVER_API_ENDPOINT;

// TODO remove logs

axios.interceptors.request.use(async function (request) {
  const token = await getIdToken();

  if (token) {
    request.headers["Authorization"] = `Bearer ${token}`;
  }

  return request;
});

/**
 * create reusable Axios instance using own server config by default
 */
export default axios;
