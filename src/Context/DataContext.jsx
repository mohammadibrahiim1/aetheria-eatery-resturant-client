import React, { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();
const cartFromLocalStorage = JSON.parse(
  localStorage.getItem("newCart") || "[]"
);

const DataContext = ({ children }) => {
  const [foodItems, setFoodItems] = useState([]);
  const [cart, setCart] = useState(cartFromLocalStorage);
  const [allItems, setAllItems] = useState([]);
  const [offer, setOffer] = useState([]);
  const [dessert, setDessert] = useState([]);
  const [pizza, setPizza] = useState([]);
  // console.log(pizza);
  const [salads, setSalad] = useState([]);
  // console.log(salads);
  const [soup, setSoup] = useState([]);
  // console.log(soup);
  const [drinks, setDrinks] = useState([]);
  // console.log(drinks);
  const [thai, setThai] = useState([]);
  // console.log(thai);
  const [indian, setIndian] = useState([]);
  // console.log(indian);
  // const [selectedCategory, setSelectedCategory] = useState("");

  const addItemToCart = (selectItem) => {
    let newCart = [];
    const exists = cart.find((item) => item._id === selectItem._id);
    if (!exists) {
      selectItem.quantity = 1;
      newCart = [...cart, selectItem];
    } else {
      const rest = cart.filter((item) => item._id !== selectItem._id);
      // exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    localStorage.setItem("newCart", JSON.stringify(newCart));
  };
  const removeItemFromCart = (_id) => {
    const updatedCart = cart.filter((item) => item._id !== _id);
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
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOffer(data.slice(0, 4));
        setDessert(data.slice(4, 9));
        setPizza(data.slice(9, 15));
        setSalad(data.slice(15, 20));
        setSoup(data.slice(20, 24));
        setDrinks(data.slice(24, 30));
        setIndian(data.slice(30, 35));
        setThai(data.slice(35, 39));
        setAllItems(data);
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
    offer,
    dessert,
    pizza,
    salads,
    soup,
    drinks,
    thai,
    indian,
    allItems,
  };

  return (
    <div>
      <ApiContext.Provider value={foodInfo}>{children}</ApiContext.Provider>
    </div>
  );
};

export default DataContext;
