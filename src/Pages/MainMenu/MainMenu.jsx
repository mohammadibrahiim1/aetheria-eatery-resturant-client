import React from "react";
import MainMenuHeader from "./MainMenuHeader";
import { Offer } from "./Offer";
import Dessert from "./Dessert";
import Pizza from "./Pizza";
import Salads from "./Salads";
import Soup from "./Soup";
import Drinks from "./Drinks";
import Thai from "./Thai";
import Indian from "./Indian";
import Contact from "../../Components/Contact";

const MainMenu = () => {
  return (
    <div>
      <MainMenuHeader></MainMenuHeader>
      <Offer></Offer>
      <Dessert></Dessert>
      <Pizza></Pizza>
      <Salads></Salads>
      <Soup></Soup>
      <Drinks></Drinks>
      <Thai></Thai>
      <Indian></Indian>
      <Contact></Contact>
    </div>
  );
};

export default MainMenu;
