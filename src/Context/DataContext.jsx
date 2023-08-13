import { useQuery } from "@tanstack/react-query";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export const ApiContext = createContext();
const cartFromLocalStorage = JSON.parse(localStorage.getItem("newCart") || "[]");

const DataContext = ({ children }) => {
  const [foodItems, setFoodItems] = useState([]);
  const [cart, setCart] = useState(cartFromLocalStorage);

  const orderInfoFromLocalStorage = JSON.parse(localStorage.getItem("orderInfo") || "[]");
  const [orderInfo, setOrderInfo] = useState(orderInfoFromLocalStorage);
  // console.log(orderInfo);

  // const [checkoutInfo, setCheckoutInfo] = useState({});
  // console.log(checkoutInfo);
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
  const [selectDate, setSelectDate] = useState(new Date());
  // const [clientSecret, setClientSecret] = useState("");
  // console.log(indian);
  // const [selectedCategory, setSelectedCategory] = useState("");
  const [subTotal, setSubTotal] = useState(0);
  // const [total, setTotal] = useState(0);

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
    toast.success(`add ${selectItem.name} to cart successfully`, {
      style: {
        borderRadius: "10px",
        background: "#40C057",
        // #DC3515
        color: "#fff",
      },
    });
    localStorage.setItem("newCart", JSON.stringify(newCart));
  };
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

  useEffect(() => {
    fetch("http://localhost:5000/allProducts")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setFoodItems(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/menu")
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
  }, []);

  //   fetch("  http://localhost:5000 /checkoutInfo")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setCheckoutInfo(data);
  //     });
  // }, []);

  // const handleTotalPrice = (totalPrice) => {
  //   setTotalPrice(totalPrice);
  //   // const checkoutInfo = {
  //   //   totalPrice,
  //   //   cart,
  //   // };

  //   // fetch("  http://localhost:5000 /checkoutInfo", {
  //   //   method: "POST",
  //   //   headers: {
  //   //     "content-type": "application/json",
  //   //   },
  //   //   body: JSON.stringify(checkoutInfo),
  //   // })
  //   //   .then((res) => res.json())
  //   //   .then((data) => {
  //   //     console.log(data);
  //   //     if (data.acknowledged) {
  //   //       alert("successfully added");
  //   //       window.location.reload();
  //   //     }
  //   //   })
  //   //   .catch((error) => console.error(error));
  // };

  // const handleCartInfo = (totalPrice) => {
  //   const checkoutInfo = {
  //     // cart,
  //     totalPrice,
  //   };
  //   console.log(checkoutInfo);
  //   // setTotalPrice(totalPrice);
  //   if (checkoutInfo) {
  //     fetch("http://localhost:5000/checkoutInfo", {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(checkoutInfo),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.acknowledged) {
  //           alert("added successfully");
  //         }

  //         // console.log(data);
  //       })
  //       .catch((error) => console.error(error.message));
  //   }
  // };

  // useEffect(() => {
  //   fetch(`  http://localhost:5000 /category?category=${selectedCategory}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setFoodItems(data);
  //     });
  // }, [selectedCategory]);

  const [category, setCategory] = useState("");
  const [order, setOrder] = useState("");
  // const [activeButton, setActiveButton] = useState("");
  // const [isButtonClicked, setIsButtonClicked] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/category?category=${category}&order=${order}`)
      .then((res) => res.json())
      .then((data) => {
        setAllItems(data);
        console.log(data);
      });
  }, [category, order]);

  // const handleClick = () => {
  //   setIsButtonClicked(!isButtonClicked);
  // };

  // const buttonStyle = {
  //   backgroundColor: isButtonClicked ? "blue" : "white",
  //   borderColor: isButtonClicked ? "blue" : "black",
  //   color: isButtonClicked ? "white" : "black",
  // };

  // const handleClick = async (selectedCategory) => {
  //   try {
  //     setActiveButton(selectedCategory); // Change button color
  //     const response = await fetch(`http://localhost:5000/category?category=${selectedCategory}&order=${order}`);
  //     const data = await response.json();
  //     console.log(data);
  //     setAllItems(data);
  //     // data.sort((a, b) => (a.price - b.price) * (sortingOrder === "asc" ? 1 : -1));
  //     // setSortedData(data);
  //   } catch (error) {
  //     console.error("Error fetching and sorting data:", error);
  //   }
  // };

  // const handleCategoryChange = async () => {
  //   try {
  //     const response = await fetch(`http://localhost:5000/category?category=${category}&order=${order}`);
  //     const data = await response.json();
  //     setAllItems(data);
  //     // await fetch(`http://localhost:5000/category?category=${selectedCategory}&order=${order}`)
  //     //   .then((res) => res.json())
  //     //   .then((data) => {
  //     //     // console.log(data);
  //     //     setAllItems(data);
  //     //   });
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   // setSelectedCategory(data);
  // };

  // const handleSortedData = (order) => {
  //   // console.log(order);
  //   fetch(`http://localhost:5000/category?order=${order}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setAllItems(data);
  //     });
  // };

  const { data: booking = [] } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/bookings`);
      const data = await res.json();
      // console.log(data);
      return data;
    },
  });

  const handleIncreaseItem = (id) => {
    const increaseQuantity = cart.map((item) => {
      if (item._id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      // localStorage.setItem("quantity", quantity);
      return item;
    });
    localStorage.setItem("newCart", JSON.stringify(increaseQuantity));
    setCart(increaseQuantity);
  };

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

  let shipping = 59;
  let taxRate = 11;
  const taxDue = subTotal * (taxRate / 100);
  // console.log(taxDue.toFixed(2));

  const finalPrice = subTotal * (1 + taxRate / 100);
  // console.log(finalPrice.toFixed(2));

  // useEffect(() => {

  //   const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  //   setTotal(totalPrice);
  // }, [cart]);

  // transfer value to children

  const foodInfo = {
    foodItems,
    addItemToCart,
    removeItemFromCart,
    cart,
    setOrder,
    category,
    // handleClick,
    // activeButton,
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
    // handleCartInfo,
    handleIncreaseItem,
    handleDecreaseItem,
    // newQuantity,
    booking,
    subTotal,
    finalPrice,
    taxDue,
    shipping,
    // orders,
    orderInfo,
    setOrderInfo,
    // handleSortedData,
    // handleCheckout
  };

  return (
    <div>
      <ApiContext.Provider value={foodInfo}>{children}</ApiContext.Provider>
    </div>
  );
};

export default DataContext;
