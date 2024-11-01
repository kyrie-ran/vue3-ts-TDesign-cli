import axios, { AxiosError, type AxiosInstance, type AxiosResponse } from "axios";
import type { ErrorResponse } from "./types";
import { MessagePlugin } from "tdesign-vue-next";

const BASE_URL: string = import.meta.env.VITE_BASE_URL;
const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
});

instance.interceptors.response.use((response: AxiosResponse) => {
  return response.data
}, async (error: AxiosError<ErrorResponse>) => {
  const responseData: ErrorResponse | undefined = error.response?.data
  responseData && await MessagePlugin.error(responseData.message)
  return Promise.reject(error)
})

export default instance;
