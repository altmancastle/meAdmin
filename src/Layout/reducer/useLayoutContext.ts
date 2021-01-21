import { useContext, useMemo } from "react";
import { MeLayoutContext } from "./layoutContext";

export const useMeLayoutContext = () => {
  const { state, dispatch } = useContext(MeLayoutContext);

  return useMemo(() => {
    return { ...state, dispatch };
  }, [state, dispatch]);
};
