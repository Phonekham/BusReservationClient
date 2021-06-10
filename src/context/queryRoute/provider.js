import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const RouteProvider = ({ reducer, routeData, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, routeData)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
