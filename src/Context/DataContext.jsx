// import { select } from "@material-tailwind/react";
import React, { createContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export const ApiContext = createContext();
const cartFromLocalStorage = JSON.parse(
  localStorage.getItem("newCart") || "[]"
);

const DataContext = ({ children }) => {
  const [foodItems, setFoodItems] = useState([]);
  const [cart, setCart] = useState(cartFromLocalStorage);

  const addItemToCart = (selectItem) => {
    let newCart = [];
    const exists = cart.find((item) => item.id === selectItem.id);
    if (!exists) {
      selectItem.quantity = 1;
      newCart = [...cart, selectItem];
    } else {
      const rest = cart.filter((item) => item.id !== selectItem.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    localStorage.setItem("newCart", JSON.stringify(newCart));
  };
  const removeItemFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    localStorage.setItem("newCart", JSON.stringify(updatedCart));
    setCart(updatedCart);
    window.location.reload();
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
    addItemToCart,
    removeItemFromCart,
    cart,
  };

  return (
    <div>
      <ApiContext.Provider value={foodInfo}>{children}</ApiContext.Provider>
    </div>
  );
};

export default DataContext;
