import { Observable } from "rxjs";
import { map, catchError, retry, tap } from "rxjs/operators";
import { ajax, AjaxError } from "rxjs/ajax";
import config from "../config";
import { logout } from "../store/login";
import { ITObject } from "./util";

export function getToken() {
  const token = localStorage.getItem("token");
  return `Bearer ${token}`;
}

const { baseURL } = config;

export interface MeResponse {
  success?: boolean;
  code?: string;
  message?: string;
  data?: any;
  time?: number;
}

type Method = "POST" | "GET" | "DELETE" | "PUT";

type Config = {
  url: string;
  method?: Method;
  params?: ITObject | string;
  baseUrl?: string;
  noToken?: boolean;
};

const errorRequest = (error: AjaxError) => {
  return new Observable(() => {
    if (error.status === 401) {
      logout();
    }
    if (error.status !== 200) {
      console.error("服务器错误，请联系管理员！");
    }
  });
};

function setQueryUrl(params: ITObject | string): string {
  if (typeof params === "string") {
    return params;
  }
  let query = "?";
  for (let key in params) {
    query = `${query}${encodeURIComponent(key)}=${encodeURIComponent(
      params[key]
    )}&`;
  }
  return query.substring(0, query.length - 1);
}

const request = (config: Config) => {
  let payload = config.params;
  let headers = {};
  if (!config.noToken) {
    headers = {
      Authorization: `${getToken()}`,
      "Access-Control-Allow-Origin": "*",
    };
  }

  if (
    config.params &&
    Object.prototype.toString.call(config.params) !== "[object FormData]"
  ) {
    headers = Object.assign(headers, { "Content-Type": "application/json" });
  }

  const congifAjax = {
    url: `${config.baseUrl ? config.baseUrl : baseURL}${config.url}`,
    method: config.method || "GET",
    headers: headers,
    body: payload,
    // responseType: "blob",
  };

  if (config.method === "GET") {
    congifAjax.url = `${congifAjax.url}${setQueryUrl(config.params || {})}`;
  }

  return ajax(congifAjax).pipe(
    tap((ajaxResponse) => {
      if (ajaxResponse.status !== 200) {
        console.error("服务器错误，请联系管理员！");
      }
    }),
    map(({ response }) => response),
    retry(1),
    catchError((error) => {
      return errorRequest(error);
    })
  );
};

export default request;
