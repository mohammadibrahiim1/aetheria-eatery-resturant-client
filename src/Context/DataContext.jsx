import React, { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();
const cartFromLocalStorage = JSON.parse(
  localStorage.getItem("newCart") || "[]"
);

const DataContext = ({ children }) => {
  const [foodItems, setFoodItems] = useState([]);
  const [cart, setCart] = useState(cartFromLocalStorage);
  // const [selectedCategory, setSelectedCategory] = useState("");

  const addItemToCart = (selectItem) => {
    let newCart = [];
    const exists = cart.find((item) => item.id === selectItem.id);
    if (!exists) {
      selectItem.quantity = 1;
      newCart = [...cart, selectItem];
    } else {
      const rest = cart.filter((item) => item.id !== selectItem.id);
      // exists.quantity = exists.quantity + 1;
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
    fetch("http://localhost:5000/allProducts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFoodItems(data);
      });
  }, []);

  // useEffect(() => {
  //   fetch(`http://localhost:5000/category?category=${selectedCategory}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setFoodItems(data);
  //     });
  // }, [selectedCategory]);

  const handleCategoryChange = (selectedCategory) => {
    fetch(`http://localhost:5000/category?category=${selectedCategory}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFoodItems(data);
      });
    // setSelectedCategory(data);
  };
  const foodInfo = {
    foodItems,
    addItemToCart,
    removeItemFromCart,
    cart,
    handleCategoryChange,
  };

  return (
    <div>
      <ApiContext.Provider value={foodInfo}>{children}</ApiContext.Provider>
    </div>
  );
};

export default DataContext;
