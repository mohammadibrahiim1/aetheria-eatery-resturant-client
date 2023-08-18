import { React, useContext, useState } from "react";
import { Container, Grid, Overlay, Text, Title, rem } from "@mantine/core";

import { createStyles } from "@mantine/core";

import { ApiContext } from "../../Context/DataContext";
import { ShopPageCard } from "../../Components/ShopPageCard";

import DescriptionModal from "../../Components/Modal/DescriptionModal";
import Filters from "../../Components/Filters/Filters";
import Header from "../../Components/Header";
import ShopPageMenu from "../../Components/ShopPageMune/ShopPageMenu";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    width: "100%",
  },

  title: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
    color: "#FFF",
  },
  heading: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
    color: "#606072",
    lineHeight: 1.2,
    fontSize: rem(19),
    marginTop: "11px",
  },

  category: {
    border: "1px solid #E4002B",

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
  wrapper: {
    position: "relative",
    marginTop: "60px",
    paddingTop: rem(200),
    paddingBottom: rem(160),
    backgroundImage: "url(https://i.ibb.co/1TVscGD/image-items-bg.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",

    [theme.fn.smallerThan("xs")]: {
      paddingTop: rem(80),
      paddingBottom: rem(50),
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: "center",

    [theme.fn.smallerThan("xs")]: {
      fontSize: theme.fontSizes.md,
      textAlign: "left",
    },
  },
}));

const Shop = () => {
  const { classes } = useStyles();
  const [modalItem, setModalItem] = useState({});
  const [showMore, setShowMore] = useState(9);
  const { allItems, addItemToCart, removeItemFromCart, handleCategoryChange, cart } = useContext(ApiContext);

  const handleShowMore = () => {
    setShowMore((preValue) => preValue + 3);
  };

  return (
    <div>
      <div>
        <div>
          <div className={classes.wrapper}>
            <Overlay color="#000" opacity={0.65} zIndex={1} />

            <div className={classes.inner}>
              <Title className={classes.title} align="center">
                ITEMS
              </Title>

              <div>
                <Text size="lg" className={classes.description}>
                  See our Menu items, order from the menu
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Header></Header>
      </div>
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

        <div className="mt-12">
          <img src="https://i.ibb.co/pRQrwmh/image-items-List-ooffer-2.png" alt="" srcSet="" />
        </div>

        {/* <MostFavourite></MostFavourite> */}
      </Container>
      {/* <Contact></Contact> */}
    </div>
  );
};

export default Shop;
