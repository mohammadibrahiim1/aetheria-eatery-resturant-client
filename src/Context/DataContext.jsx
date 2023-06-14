// import { select } from "@material-tailwind/react";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ApiContext = createContext();
// const cartFromLocalStorage = JSON.parse(
//   localStorage.getItem("newCart") || "[]"
// );

const DataContext = ({ children }) => {
  const [foodItems, setFoodItems] = useState([]);
  const [cart, setCart] = useState([]);
  // console.log(cart);

  // Load cart data from local storage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem(cart);
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, [cart]);

  // update local storage whenever the cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // add an item to the cart
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
    alert(` added to cart!`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const removeItemFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
    // toast.success(`${item.name} added to cart!`);
    // toast.success("🦄 Wow so easy!", {
    //   position: "top-center",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "colored",
    // });
  };
  // const handleAddToCart = (foodItem) => {
  //   let newCart = [];
  //   const exists = cart.find((item) => item.id === foodItem.id);
  //   if (!exists) {
  //     foodItem.quantity = 1;
  //     newCart = [...cart, foodItem];
  //   } else {
  //     const rest = cart.filter((item) => item.id !== foodItem.id);
  //     exists.quantity = exists.quantity + 1;
  //     newCart = [...rest, exists];
  //   }
  //   setCart(newCart);
  //   localStorage.setItem("newCart", JSON.stringify(newCart));
  //   // console.log(newCart);
  // };

  // const handleRemoveProduct = (id) => {
  //   // const remaining = cart.filter((item) => item.id !== foodItem.id);
  //   // setCart(remaining);
  //   const updatedItems = [...cart];
  //   updatedItems.splice(id, 1);
  //   localStorage.setItem("newCart", JSON.stringify(updatedItems));
  //   setCart(updatedItems);
  // };

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
