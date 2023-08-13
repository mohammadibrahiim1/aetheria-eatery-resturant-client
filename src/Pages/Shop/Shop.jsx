import { React, useContext, useState } from "react";
import { Button, Container, Grid, List, Text, rem } from "@mantine/core";
// import { ApiContext } from "../Context/DataContext";

import {
  createStyles,
  //  Card, Image, Group
} from "@mantine/core";
// import FoodCard from "../../Components/FoodCard";
// import FoodModal from "../../Components/FoodModal";
import { ApiContext } from "../../Context/DataContext";
import { ShopPageCard } from "../../Components/ShopPageCard";
import ShopPageHeader from "../../Components/ShopPageHeader";
import Contact from "../../Components/Contact";
// import OrderOnline from "../../Components/OrderOnline";
import MostFavourite from "./MostFavourite";
import DescriptionModal from "../../Components/Modal/DescriptionModal";
import Filters from "../../Components/Filters/Filters";
import Header from "../../Components/Header";
import ShopPageMenu from "../../Components/ShopPageMune/ShopPageMenu";
// import FoodCard from "./FoodCard";
// import Modal from "./FoodModal";
// import FoodModal from "./FoodModal";

const useStyles = createStyles((theme) => ({
  // container: {
  //   width: "60%",
  //   margin: "auto",
  // },

  card: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    width: "100%",
  },

  title: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },
  heading: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
    color: "#606072",
    lineHeight: 1.2,
    fontSize: rem(19),
    marginTop: "11px",

    // textTransform: "uppercase",
    // textAlign: "center",
  },

  category: {
    border: "1px solid #E4002B",
    // padding: "9px",
    paddingRight: "15px",
    paddingLeft: "15px",
    paddingTop: "5px",
    paddingBottom: "5px",
    borderRadius: "11px",
    cursor: "pointer",
  },

  category_container: {
    marginBottom: "11px",
  },
  // category: {
  //   fontFamily: `Inter, sans-serif ${theme.fontFamily}`,
  //   fontWeight: 600,
  //   color: "#D99904",
  //   fontSize: rem(15),
  //   marginTop: theme.spacing.xs,
  //   textAlign: "center",
  //   paddingBottom: theme.spacing.xs,
  //   cursor: "pointer",
  // },

  body: {
    padding: theme.spacing.md,
  },

  controls: {
    [theme.fn.smallerThan("sm")]: {},
  },
  control: {
    height: rem(28),
    fontSize: theme.fontSizes.sm,
    color: "#B70C1C",
  },
}));

const Shop = () => {
  const [modalItem, setModalItem] = useState({});
  const [showMore, setShowMore] = useState(9);
  const { allItems, addItemToCart, removeItemFromCart, handleCategoryChange, cart } = useContext(ApiContext);

  const handleShowMore = () => {
    setShowMore((preValue) => preValue + 3);
  };

  return (
    <div>
      <Header></Header>
      {/* <ShopPageHeader></ShopPageHeader> */}
      <Container size={"lg"} py={75}>
        <div className="text-center">
          <ShopPageMenu></ShopPageMenu>
        </div>

        <Filters></Filters>

        <Grid className="">
          <Grid.Col>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4">
              {allItems?.slice(0, showMore)?.map((item) => (
                <>
                  <ShopPageCard
                    setModalItem={setModalItem}
                    item={item}
                    cart={cart}
                    addItemToCart={addItemToCart}
                    removeItemFromCart={removeItemFromCart}
                    handleCategoryChange={handleCategoryChange}
                  ></ShopPageCard>
                </>
              ))}
            </div>
            <div>
              <DescriptionModal setModalItem={setModalItem} modalItem={modalItem}></DescriptionModal>
            </div>

            <div className="flex justify-center py-5">
              {/* {showMore.length < index ? (
                ""
              ) : ( */}
                <button
                  onClick={handleShowMore}
                  className="btn btn-md px-12 border-indigo-500 hover:border-indigo-500 hover:bg-indigo-500 duration-300 hover:text-white capitalize"
                >
                  Show More
                </button>
              {/* )} */}
            </div>
          </Grid.Col>
        </Grid>

        <MostFavourite></MostFavourite>
      </Container>
      <Contact></Contact>
    </div>
  );
};

export default Shop;
