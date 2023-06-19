import React from "react";
import Header from "../Components/Header";
import OrderOnline from "../Components/OrderOnline";
import { Testimonials } from "../Components/Testimonials";
import Menu from "../Components/Menu";
import Contact from "../Components/Contact";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <OrderOnline></OrderOnline>
      <Menu></Menu>
      <Contact></Contact>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
