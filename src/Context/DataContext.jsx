import React, { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();

const DataContext = ({ children }) => {
  const [foodItems, setFoodItems] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setFoodItems(data);
      });
  }, []);

  const foodInfo = {
    foodItems,
  };

  return (
    <div>
      <ApiContext.Provider value={foodInfo}>{children}</ApiContext.Provider>
    </div>
  );
};

export default DataContext;
