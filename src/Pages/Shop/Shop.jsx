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
    fontWeight: 600,
    color: "#D99904",
    lineHeight: 1.2,
    fontSize: rem(15),
    marginTop: theme.spacing.xs,
    // textTransform: "uppercase",
    textAlign: "center",
    paddingBottom: theme.spacing.xs,
    cursor: "pointer",
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
      <Container className="lg:py-24 md:pt-16 sm:pt-12">
        <div className={classes.subTitle}>
          <p>---check it out---</p>
        </div>
        <div className={classes.heading} color="#151515">
          <h1> Order Your Favourite Food</h1>
        </div>

        <Grid className="py-8">
          <Grid.Col sm={12} md={6} lg={3}>
            <Text
              variant="gradient"
              gradient={{ from: "#B70C1C", to: "#222222", deg: 90 }}
              sx={{ fontFamily: "Inter, sans-serif" }}
              ta="center"
              fz="xl"
              fw={700}
            >
              {" "}
              <div className="pt-6 self-center ">
                <Grid>
                  <Grid.Col lg={12}>
                    <span
                      onClick={() => handleCategoryChange("desert")}
                      className={classes.subTitle}
                    >
                      Desert
                    </span>
                  </Grid.Col>
                  <Grid.Col lg={12}>
                    <span
                      onClick={() => handleCategoryChange("offer")}
                      className={classes.subTitle}
                    >
                      Offer
                    </span>
                  </Grid.Col>
                  <Grid.Col lg={12}>
                    <span
                      onClick={() => handleCategoryChange("drinks")}
                      className={classes.subTitle}
                    >
                      Drinks
                    </span>
                  </Grid.Col>
                  <Grid.Col lg={12}>
                    <span
                      onClick={() => handleCategoryChange("pizza")}
                      className={classes.subTitle}
                    >
                      Pizza
                    </span>
                  </Grid.Col>
                  <Grid.Col lg={12}>
                    <span
                      onClick={() => handleCategoryChange("salad")}
                      className={classes.subTitle}
                    >
                      Salads
                    </span>
                  </Grid.Col>
                  <Grid.Col lg={12}>
                    <span
                      onClick={() => handleCategoryChange("thai")}
                      className={classes.subTitle}
                    >
                      Thai
                    </span>
                  </Grid.Col>
                  <Grid.Col lg={12}>
                    <span
                      onClick={() => handleCategoryChange("soup")}
                      className={classes.subTitle}
                    >
                      Soup
                    </span>
                  </Grid.Col>
                  <Grid.Col lg={12}>
                    <span
                      onClick={() => handleCategoryChange("indian")}
                      className={classes.subTitle}
                    >
                      Indian
                    </span>
                  </Grid.Col>
                </Grid>
              </div>
            </Text>
          </Grid.Col>

          <Grid.Col sm={12} md={6} lg={9}>
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
          </Grid.Col>
        </Grid>
      </Container>
      <Contact></Contact>
    </div>
  );
};

export default Shop;
