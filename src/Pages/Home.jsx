import React from "react";
import Header from "../Components/Header";
// import OrderOnline from "../Components/OrderOnline";
import { Testimonials } from "../Components/Testimonials";
import Menu from "../Components/Menu";
import Contact from "../Components/Contact";
import PopularDishes from "../Components/PopularDishes";
import BigOffer from "../Components/BiggOffer";
import RichandHealthy from "../Components/RichandHealthy";
import { CheckOutMenu } from "../Components/CheckOutMenu/CheckOutMenu";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const { totalItems } = useLoaderData();
  return (
    <div>
      <Header></Header>
      <PopularDishes></PopularDishes>
      <RichandHealthy></RichandHealthy>
      {/* <OrderOnline></OrderOnline> */}
      <Menu></Menu>
      <CheckOutMenu totalItems={totalItems}></CheckOutMenu>
      <BigOffer></BigOffer>
      <Contact></Contact>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
