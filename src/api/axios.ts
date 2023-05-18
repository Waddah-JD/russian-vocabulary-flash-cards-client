import axios from "axios";

axios.defaults.baseURL = process.env.SERVER_API_ENDPOINT;

axios.interceptors.request.use(function (request) {
  console.log("interceptor: request = ", request);
  return request;
});

axios.interceptors.response.use(
  function (response) {
    console.log("interceptor: response = ", response);
    return response;
  },
  function (error) {
    console.error("interceptor: error = ", error);
  }
);

/**
 * create reusable Axios instance using own server config by default
 */
export default axios;
