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
// import FoodCard from "./FoodCard";
// import Modal from "./FoodModal";
// import FoodModal from "./FoodModal";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    width: "100%",
  },

  title: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },
  heading: {
    fontFamily: `Inter, sans-serif ${theme.fontFamily}`,
    fontWeight: 700,
    color: "#151515",
    lineHeight: 1.2,
    fontSize: rem(22),
    // marginTop: theme.spacing.xs,
    textTransform: "uppercase",
    textAlign: "center",
    // paddingBottom: theme.spacing.sm,
  },
  subTitle: {
    fontFamily: `Inter, sans-serif ${theme.fontFamily}`,
    fontWeight: 500,
    color: "#D99904",
    lineHeight: 1.2,
    fontSize: rem(12),
    marginTop: theme.spacing.xs,
    textTransform: "uppercase",
    textAlign: "center",
    paddingBottom: theme.spacing.xs,
  },

  body: {
    padding: theme.spacing.md,
  },

  controls: {
    marginTop: `calc(${theme.spacing.xs}* 1.5)`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingLeft: theme.spacing.xs,
    // marginRight: theme.spacing.md,

    // [theme.fn.smallerThan("xs")]: {
    //   flexDirection: "column",
    // },
  },
  control: {
    height: rem(28),
    fontSize: theme.fontSizes.sm,
    color: "#B70C1C",

    // "&:not(:first-of-type)": {
    // marginLeft: theme.spacing.xs,
    // },

    // [theme.fn.smallerThan("xs")]: {
    //   "&:not(:first-of-type)": {
    //     marginTop: theme.spacing.md,
    //     marginLeft: 0,
    //   },
    // },
  },
}));

const Shop = () => {
  const { allItems, addItemToCart, removeItemFromCart, handleCategoryChange } =
    useContext(ApiContext);
  const { classes, cx } = useStyles();

  //   const [foodItem, setFoodItem] = useState({});

  return (
    <div>
      <ShopPageHeader></ShopPageHeader>
      <Container className="py-24">
        <div className={classes.subTitle}>
          <p>---check it out---</p>
        </div>
        <div className={classes.heading} color="#151515">
          <h1> Order Your Favourite Food</h1>
        </div>

        <Grid className="py-8">
          <Grid.Col md={6} lg={3}>
            <Text
              variant="gradient"
              gradient={{ from: "#B70C1C", to: "#222222", deg: 90 }}
              sx={{ fontFamily: "Inter, sans-serif" }}
              ta="left"
              fz="xl"
              fw={700}
            >
              {" "}
              Category
            </Text>
            <Text
              variant="gradient"
              gradient={{ from: "#B70C1C", to: "#222222", deg: 90 }}
              sx={{ fontFamily: "Inter, sans-serif" }}
              ta="center"
              fz="xl"
              fw={700}
            >
              {" "}
              <div className="py-8  ">
                <List spacing="sm" size="md" ta="left" className="">
                  <List.Item
                    onClick={() => handleCategoryChange("desert")}
                    className="cursor-pointer"
                  >
                    Desert
                  </List.Item>
                  <List.Item
                    onClick={() => handleCategoryChange("offer")}
                    className="cursor-pointer"
                  >
                    Offer
                  </List.Item>
                  <List.Item
                    onClick={() => handleCategoryChange("drinks")}
                    className="cursor-pointer"
                  >
                    Drinks
                  </List.Item>
                  <List.Item
                    onClick={() => handleCategoryChange("pizza")}
                    className="cursor-pointer"
                  >
                    Pizza
                  </List.Item>
                  <List.Item
                    onClick={() => handleCategoryChange("salad")}
                    className="cursor-pointer"
                  >
                    Salads
                  </List.Item>
                  <List.Item
                    onClick={() => handleCategoryChange("thai")}
                    className="cursor-pointer"
                  >
                    Thai
                  </List.Item>
                  <List.Item
                    onClick={() => handleCategoryChange("soup")}
                    className="cursor-pointer"
                  >
                    Soup
                  </List.Item>
                  <List.Item
                    onClick={() => handleCategoryChange("indian")}
                    className="cursor-pointer"
                  >
                    Indian
                  </List.Item>
                  {/* <List.Item
                    onClick={() => handleCategoryChange("shakes")}
                    className="cursor-pointer"
                  >
                    Shakes
                  </List.Item> */}
                  {/* <List.Item
                    onClick={() => handleCategoryChange(allItems)}
                    className="cursor-pointer"
                  >
                    All Items
                  </List.Item> */}
                </List>
              </div>
            </Text>
          </Grid.Col>

          <Grid.Col md={6} lg={9}>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4  ">
              {allItems?.slice(0, 4)?.map((item) => (
                <>
                  <ShopPageCard
                    item={item}
                    addItemToCart={addItemToCart}
                    removeItemFromCart={removeItemFromCart}
                    handleCategoryChange={handleCategoryChange}
                  ></ShopPageCard>
                  {/* <FoodCard
                    item={item}
                    setFoodItem={setFoodItem}
                    addItemToCart={addItemToCart}
                    removeItemFromCart={removeItemFromCart}
                    foodItem={foodItem}
                    key={item.id}
                  ></FoodCard> */}
                </>
              ))}
            </div>
            <div>
              {/* {foodItem && (
                <FoodModal
                  foodItem={foodItem}
                  setFoodItem={setFoodItem}
                ></FoodModal>
              )} */}
            </div>
          </Grid.Col>
        </Grid>
      </Container>
      <Contact></Contact>
    </div>
  );
};

export default Shop;
