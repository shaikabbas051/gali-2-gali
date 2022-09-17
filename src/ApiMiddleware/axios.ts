import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const API_URL = "";

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json, text/plain, */*",
  },
});

axiosInstance.interceptors.request.use(async (config: AxiosRequestConfig) => {
  //   if (config.url !== "user/auth") {
  //     const authInfo: { type: string; token: string } = await localStorage.get(
  //       "sessionDetail"
  //     );
  //     config.headers[
  //       "Aurlis-Authorisation"
  //     ] = `${authInfo.type} ${authInfo.token}`;
  //   }
  //   if (config.url.includes("media/file/upload")) {
  //     config.headers["content-Type"] =
  //       "multipart/form-data; boundary=----WebKitFormBoundaryvBrM3UOBqAAJkwmz";
  //   }

  return config;
});

axiosInstance.interceptors.response.use((response: AxiosResponse): any => {
  return response.data;
});

export default axiosInstance;
