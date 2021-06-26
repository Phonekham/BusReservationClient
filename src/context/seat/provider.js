import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const SeatProvider = ({ reducer, seatData, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, seatData)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
