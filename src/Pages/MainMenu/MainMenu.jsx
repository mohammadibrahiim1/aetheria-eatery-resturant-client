import React from "react";
import MainMenuHeader from "./MainMenuHeader";
import { Offer } from "./Offer";
import Dessert from "./Dessert";
import Pizza from "./Pizza";
import Salads from "./Salads";

const MainMenu = () => {
  return (
    <div>
      <MainMenuHeader></MainMenuHeader>
      <Offer></Offer>
      <Dessert></Dessert>
      <Pizza></Pizza>
      <Salads></Salads>
    </div>
  );
};

export default MainMenu;
