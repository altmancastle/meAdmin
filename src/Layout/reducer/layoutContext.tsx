import { createContext } from "react";
import { LayoutAction, InitialState, initialState } from ".";

interface ILayoutControl {
  state: InitialState;
  dispatch: React.Dispatch<LayoutAction>;
}

export const MeLayoutContext = createContext<ILayoutControl>({
  state: initialState,
  dispatch: () => {},
});
