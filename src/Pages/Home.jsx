import React from "react";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import PopularDishes from "../Components/PopularDishes";
import BigOffer from "../Components/BiggOffer";
import RichandHealthy from "../Components/RichandHealthy";
import { CheckOutMenu } from "../Components/CheckOutMenu/CheckOutMenu";
import { useLoaderData } from "react-router-dom";
import { Delivery } from "../Components/Delivery/Delivery";

const Home = () => {
  const { totalItems } = useLoaderData();

  return (
    <div>
      <Header></Header>
      <PopularDishes></PopularDishes>
      <RichandHealthy></RichandHealthy>
      <Menu></Menu>
      <CheckOutMenu totalItems={totalItems}></CheckOutMenu>
      <BigOffer></BigOffer>
      <Delivery></Delivery>
    </div>
  );
};

export default Home;
