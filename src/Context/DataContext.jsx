import React, { createContext } from "react";

export const ApiContext = createContext();

const DataContext = ({ children }) => {
  return (
    <div>
      <ApiContext.Provider>{children}</ApiContext.Provider>
    </div>
  );
};

export default DataContext;
