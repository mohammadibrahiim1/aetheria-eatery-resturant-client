import { React, useContext, useState } from "react";
import { Container, Grid, Text } from "@mantine/core";
import { ApiContext } from "../Context/DataContext";
import FoodCard from "./FoodCard";
import DescriptionModal from "./Modal/DescriptionModal";

const Menu = () => {
  const [modalItem, setModalItem] = useState({});
  const { foodItems, addItemToCart, removeItemFromCart } = useContext(ApiContext);

  return (
    <div>
      <Container size={"lg"} py={75} id="menu">
        <Text fs={"italic"} fz={13} c={"#748FFC"} align="center" fw={600}>
          ---check it out---
        </Text>

        <Text fs={"italic"} fz={25} c={"orange"} align="center" fw={700}>
          From Our Menu
        </Text>

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
