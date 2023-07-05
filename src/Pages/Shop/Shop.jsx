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
// import FoodCard from "./FoodCard";
// import Modal from "./FoodModal";
// import FoodModal from "./FoodModal";

const useStyles = createStyles((theme) => ({
  container: {
    width: "60%",
    margin: "auto",
  },

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
  const [showMore, setShowMore] = useState(4);
  const { allItems, addItemToCart, removeItemFromCart, handleCategoryChange } =
    useContext(ApiContext);
  const { classes } = useStyles();

  const handleShowMore = () => {
    setShowMore((preValue) => preValue + 1);
  };

  return (
    <div>
      <ShopPageHeader></ShopPageHeader>
      <section className={classes.container}>
        <Text className={classes.heading}>
          <h1>All Items</h1>
        </Text>

        <Grid className="py-8">
          <Grid.Col className={classes.category_container}>
            <Grid>
              <Grid.Col sm={1} lg={1.5}>
                <span
                  className={classes.category}
                  variant="primary"
                  onClick={() => handleCategoryChange("desert")}
                >
                  Desert
                </span>
              </Grid.Col>
              <Grid.Col sm={1} lg={1.5}>
                <span
                  onClick={() => handleCategoryChange("offer")}
                  className={classes.category}
                >
                  Offer
                </span>
              </Grid.Col>
              <Grid.Col sm={1} lg={1.5}>
                <span
                  onClick={() => handleCategoryChange("drinks")}
                  className={classes.category}
                >
                  Drinks
                </span>
              </Grid.Col>
              <Grid.Col sm={1} lg={1.5}>
                <span
                  onClick={() => handleCategoryChange("pizza")}
                  className={classes.category}
                >
                  Pizza
                </span>
              </Grid.Col>
              <Grid.Col sm={1} lg={1.5}>
                <span
                  onClick={() => handleCategoryChange("salad")}
                  className={classes.category}
                >
                  Salads
                </span>
              </Grid.Col>
              <Grid.Col sm={1} lg={1.5}>
                <span
                  onClick={() => handleCategoryChange("thai")}
                  className={classes.category}
                >
                  Thai
                </span>
              </Grid.Col>
              <Grid.Col sm={1} lg={1.5}>
                <span
                  onClick={() => handleCategoryChange("soup")}
                  className={classes.category}
                >
                  Soup
                </span>
              </Grid.Col>
              <Grid.Col sm={1} lg={1.5}>
                <span
                  onClick={() => handleCategoryChange("indian")}
                  className={classes.category}
                >
                  Indian
                </span>
              </Grid.Col>
            </Grid>
          </Grid.Col>

          <Grid.Col>
            <p className="mb-1">
              found{" "}
              <span className="text-md text-[#4E60FF] ">{allItems.length}</span>{" "}
              items
            </p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
              {allItems?.slice(0, showMore)?.map((item) => (
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
            <Button
              onClick={handleShowMore}
              variant="light"
              color="red"
              fullWidth
              center
              mt="md"
              radius="md"
              // variant="gradient"
              // gradient={{ from: "teal", to: "blue", deg: 60 }}
            >
              load more
            </Button>
          </Grid.Col>
        </Grid>

        <MostFavourite></MostFavourite>
      </section>
      <Contact></Contact>
    </div>
  );
};

export default Shop;
