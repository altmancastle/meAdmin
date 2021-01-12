import request from "../utils/request";

export const getUserInfo = () =>
  request({
    url: "/user/info",
    method: "GET",
  });
