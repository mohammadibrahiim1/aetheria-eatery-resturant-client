import { useQuery } from "@tanstack/react-query";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export const ApiContext = createContext();
const cartFromLocalStorage = JSON.parse(localStorage.getItem("newCart") || "[]");

const DataContext = ({ children }) => {
  // const orderInfoFromLocalStorage = JSON.parse(localStorage.getItem("orderInfo") || "[]");
  // const [orderInfo, setOrderInfo] = useState(orderInfoFromLocalStorage);

  const [selectDate, setSelectDate] = useState(new Date());

  const [subTotal, setSubTotal] = useState(0);

  // add item to cart and save data in localStorage
  const [cart, setCart] = useState(cartFromLocalStorage);

  const addItemToCart = (selectItem) => {
    let newCart = [];
    const exists = cart.find((item) => item._id === selectItem._id);
    if (!exists) {
      selectItem.quantity = 1;
      newCart = [...cart, selectItem];
    } else {
      const rest = cart.filter((item) => item._id !== selectItem._id);
      newCart = [...rest, exists];
    }
    setCart(newCart);
    toast.success(`add ${selectItem.name} to cart successfully`, {
      style: {
        borderRadius: "10px",
        background: "#40C057",
        color: "#fff",
      },
    });
    localStorage.setItem("newCart", JSON.stringify(newCart));
  };

  // remove item from cart
  const removeItemFromCart = (selectItem) => {
    const updatedCart = cart.filter((item) => item._id !== selectItem._id);
    localStorage.setItem("newCart", JSON.stringify(updatedCart));
    setCart(updatedCart);
    toast.error(`remove ${selectItem.name} from cart!`, {
      style: {
        borderRadius: "10px",
        background: "#F03E3E",
        color: "#fff",
      },
    });
  };

  // home page food items data
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allProducts")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setFoodItems(data);
      });
  }, []);

  // display  restaurant menu items
  const [offer, setOffer] = useState([]);
  const [dessert, setDessert] = useState([]);
  const [pizza, setPizza] = useState([]);
  const [salads, setSalad] = useState([]);
  const [soup, setSoup] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [thai, setThai] = useState([]);
  const [indian, setIndian] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemPerPage] = useState(8);

  useEffect(() => {
    fetch(`http://localhost:5000/menu?page=${currentPage}&limit=${itemsPerPage}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
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
  }, [currentPage, itemsPerPage]);

  // filter  food items by category and sort by items price
  const [allItems, setAllItems] = useState([]);
  const [category, setCategory] = useState("");
  const [order, setOrder] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/category?category=${category}&order=${order}`)
      .then((res) => res.json())
      .then((data) => {
        setAllItems(data);
      });
  }, [category, order]);

  const { data: booking = [] } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/bookings`);
      const data = await res.json();

      return data;
    },
  });

  // increase cart item quantity
  const handleIncreaseItem = (id) => {
    const increaseQuantity = cart.map((item) => {
      if (item._id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    localStorage.setItem("newCart", JSON.stringify(increaseQuantity));
    setCart(increaseQuantity);
  };

  // decrease cart item quantity
  const handleDecreaseItem = (id) => {
    const decreaseQuantity = cart.map((item) => {
      if (item._id === id && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }

      return item;
    });
    setCart(decreaseQuantity);
    localStorage.setItem("newCart", JSON.stringify(decreaseQuantity));
  };

  // calculate cart item total price
  useEffect(() => {
    const subTotalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    setSubTotal(subTotalPrice);
  }, [cart]);

  let shipping = 35;
  let taxRate = 5;
  const taxDue = subTotal * (taxRate / 100);

  const finalPrice = subTotal * (1 + taxRate / 100);

  // transfer value to children
  const foodInfo = {
    foodItems,
    addItemToCart,
    removeItemFromCart,
    cart,
    setOrder,
    category,
    setCategory,
    offer,
    dessert,
    pizza,
    salads,
    soup,
    drinks,
    thai,
    indian,
    allItems,
    selectDate,
    setSelectDate,
    handleIncreaseItem,
    handleDecreaseItem,
    booking,
    subTotal,
    finalPrice,
    taxDue,
    shipping,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemPerPage,
    // totalItems,
    // orderInfo,
    // setOrderInfo,
  };

  return (
    <div>
      <ApiContext.Provider value={foodInfo}>{children}</ApiContext.Provider>
    </div>
  );
};

export default DataContext;
