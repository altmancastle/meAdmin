import { Subject } from "rxjs";

export enum ActionTypes {
  SET_USERINFO = "set usrinfo",
  SET_TOKEN = "set TOEKN",
  LOGOUT = "logout",
}

export interface UserInfo {
  email_verified: boolean;
  email?: string;
  locale?: string;
  family_name?: string;
  given_name?: string;
  mobile?: string;
  name?: string;
  preferred_username: string;
  sub: string;
}

interface InitialState {
  userInfo: UserInfo;
  token: string;
}

let state: InitialState = {
  userInfo: {} as UserInfo,
  token: "",
};

interface Action {
  type: String;
  payload?: any;
}

export const loginStore = new Subject<InitialState>();

export const Dispatcher = new Subject<Action>();

Dispatcher.subscribe((action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_USERINFO:
      state.userInfo = { ...action.payload };
      loginStore.next(state);
      break;
    case ActionTypes.SET_TOKEN:
      localStorage.setItem("token", state.token || "");
      loginStore.next(state);
      break;
    case ActionTypes.LOGOUT:
      logout();
      loginStore.next(state);
      break;
    default:
      break;
  }
});

export function logout() {
  loginStore.subscribe((state) => {
    localStorage.removeItem("token");
  });
}
