import React, { createContext, useContext, useMemo, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const GlobalContext = createContext();
export const GlobalContextProvider = ({ children }) => {
  const [globalState, globalDispatch] = useReducer(reducer, {});
  const contextValue = useMemo(() => {
    return [globalState, globalDispatch];
  }, [globalState, globalDispatch]);

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
export function useGlobalContext() {
  return useContext(GlobalContext);
}
