import { React, useContext, useState } from "react";
import { Container, Grid, rem } from "@mantine/core";
import { ApiContext } from "../Context/DataContext";
import { createStyles } from "@mantine/core";
import FoodCard from "./FoodCard";
// import Modal from "./FoodModal";
import DescriptionModal from "./Modal/DescriptionModal";
// import FoodModal from "./FoodModal";

const useStyles = createStyles((theme) => ({
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
    fontFamily: `Inter, sans-serif ${theme.fontFamily}`,
    fontWeight: 700,
    color: "#151515",
    lineHeight: 1.2,
    fontSize: rem(32),
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

const Menu = () => {
  const [modalItem, setModalItem] = useState({});
  const { foodItems, addItemToCart, removeItemFromCart, handleCategoryChange } = useContext(ApiContext);
  const { classes, cx } = useStyles();

  return (
    <div>
      <Container size={"lg"} className="py-22" id="menu">
        <div className={classes.subTitle}>
          <p>---check it out---</p>
        </div>
        <div className={classes.heading} color="#151515">
          <h1> From Our Menu</h1>
        </div>

        <Grid className="py-8">
          <Grid.Col md={6} lg={12}>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4  ">
              {foodItems?.slice(0, 6).map((item) => (
                <>
                  <FoodCard
                    item={item}
                    setModalItem={setModalItem}
                    addItemToCart={addItemToCart}
                    removeItemFromCart={removeItemFromCart}
                    key={item.id}
                  ></FoodCard>
                </>
              ))}
            </div>
            <div>
              <DescriptionModal modalItem={modalItem}></DescriptionModal>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};

export default Menu;
