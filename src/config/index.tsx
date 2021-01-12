import { environments, Environment } from "../utils/authorization";

export interface QuerySearch {
  pageIndex: number;
  pageSize: number;
}

export interface AntdPagination {
  current: number;
  total: number;
}

//默认查询条件
export const defaultQuery: QuerySearch = {
  pageSize: 10,
  pageIndex: 1,
};

//分页默认配置
export const defaultPagination: AntdPagination = {
  current: 1,
  total: 0,
};

//api
const apiEnv = {
  LOCALHOST: "test-",
  DEV: "dev-",
  TEST: "test-",
  UAT: "uat-",
  CZ: "",
};

function getHostUrl() {
  const hostStr = window.location.host;
  let uriStr = "https://";
  environments.forEach((item) => {
    const env: Environment = item as Environment;
    if (hostStr.toLowerCase().startsWith(env.toLowerCase())) {
      uriStr = `https://${apiEnv[env]}`;
    }
  });
  return uriStr;
}

let baseUrl = "";
if (process.env.NODE_ENV === "development") {
  baseUrl = ``;
}

if (process.env.NODE_ENV === "production") {
  baseUrl = ``;
}

export default {
  title: "init",

  company: "init",

  baseURL: baseUrl,
};
