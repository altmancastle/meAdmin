type ActionType = "setCollapsed";

export interface LayoutAction {
  type: ActionType;
  payload?: any;
}

export interface InitialState {
  collapsed: boolean;
}

export const initialState: InitialState = {
  collapsed: false,
};

export function layoutReducer(state: InitialState, action: LayoutAction) {
  switch (action.type) {
    case "setCollapsed":
      return { ...state, collapsed: action.payload };
    default:
      throw new Error();
  }
}
