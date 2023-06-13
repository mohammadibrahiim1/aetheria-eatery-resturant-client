import React, { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();

const DataContext = ({ children }) => {
  const [foodItems, setFoodItems] = useState([]);
  const [cart, setCart] = useState([]);
  // console.log(cart);

  const handleAddToCart = (foodItem) => {
    let newCart = [];
    const exists = cart.find((item) => item.id === foodItem.id);
    if (!exists) {
      foodItem.quantity = 1;
      newCart = [...cart, foodItem];
    } else {
      const rest = cart.filter((item) => item.id !== foodItem.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    // console.log(newCart);
  };

  const handleRemoveFoodItem = (foodItem) => {
    const remaining = cart.filter((item) => item.id !== foodItem.id);
    setCart(remaining);
    // const updatedItems = [...cart];
    // updatedItems.splice(id, 1);
    // setCart(updatedItems);
  };

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
    handleAddToCart,
    handleRemoveFoodItem,
    cart,
  };

  return (
    <div>
      <ApiContext.Provider value={foodInfo}>{children}</ApiContext.Provider>
    </div>
  );
};

export default DataContext;
