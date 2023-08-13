import React from "react";
import Header from "../Components/Header";
// import OrderOnline from "../Components/OrderOnline";
import { Testimonials } from "../Components/Testimonials";
import Menu from "../Components/Menu";
import Contact from "../Components/Contact";
import PopularDishes from "../Components/PopularDishes";
import BigOffer from "../Components/BiggOffer";
import RichandHealthy from "../Components/RichandHealthy";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <PopularDishes></PopularDishes>
      <RichandHealthy></RichandHealthy>
      {/* <OrderOnline></OrderOnline> */}
      <Menu></Menu>
      <BigOffer></BigOffer>
      <Contact></Contact>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
