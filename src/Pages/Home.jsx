import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import OrderOnline from "../Components/OrderOnline";
import { Testimonials } from "../Components/Testimonials";
// import ContactUs from "../Components/AboutUs";
import Menu from "../Components/Menu";
import Contact from "../Components/Contact";

const Home = () => {
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("data.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenu(data);
  //       console.log(data);
  //     });
  // }, []);
  return (
    <div>
      {/* <h1>
      <a href="https://ibb.co/qBF2Fk4"><img src="https://i.ibb.co/Zd1b1Ww/header-img.png" alt="header-img" border="0"></a>
        {menu.map((item) => (
          <div>{item.category}</div>
        ))}
      </h1> */}

      <Header></Header>
      <OrderOnline></OrderOnline>
      <Menu></Menu>
      {/* <ContactUs></ContactUs> */}
      <Contact></Contact>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
