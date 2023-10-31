import { Container, Image, Text, Title } from "@mantine/core";
import React from "react";

const PopularDishes = () => {
  return (
    <div>
      <Container size={"lg"} py={45}>
        <Title>
          <Text c={"#748FFC"} fs={"italic"} align="center" uppercase fz={"sm"}>
            Food Items
          </Text>
          <Text fz={25} fs={"italic"} c={"orange"} align="center">
            Popular Dishes
          </Text>
        </Title>

        <div className="grid  place-content-center lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 lg:justify-between sm:justify-center md:justify-center items-center py-4 gap-4 ">
          <div>
            <Image
              width={220}
              height={110}
              src="https://i.ibb.co/m84jPR1/image-Dishes-1.png"
              radius={"sm"}
            />
          </div>
          <div>
            <Image
              width={220}
              height={110}
              src="https://i.ibb.co/LStT5wt/image-Dishes-2.png"
              radius={"sm"}
            />
          </div>
          <div>
            <Image
              width={220}
              height={110}
              src="https://i.ibb.co/PWn4gFH/image-Dishes-3.png"
              radius={"sm"}
            />
          </div>
          <div>
            <Image
              width={220}
              height={110}
              src="https://i.ibb.co/Zh3gTJ0/image-Dishes-4.png"
              radius={"sm"}
            />
          </div>
          <div>
            <Image
              width={220}
              height={110}
              src="https://i.ibb.co/QHkQbjy/image-Dishes-5.png"
              radius={"sm"}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PopularDishes;
