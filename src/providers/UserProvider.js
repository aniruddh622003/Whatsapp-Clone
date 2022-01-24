import React, { createContext, useContext, useReducer } from "react";

export const UserContext = createContext();

const UserProvider = ({ reducer, initialState, children }) => {
  return (
    <UserContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUserValue = () => useContext(UserContext);
