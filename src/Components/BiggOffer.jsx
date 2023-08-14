import { Container, Image, Text, Title } from "@mantine/core";
import React from "react";

const BigOffer = () => {
  return (
    <div>
      <Container size={"lg"}>
        <Title>
          <Text fz={25} c={"orange"} align="center" fs={"italic"}>
            Bigg Offer
          </Text>
          <Text c={"#748FFC"} align="center" uppercase fz={"sm"}>
            For in this week, take your food, buy your best one.
          </Text>
        </Title>

        <div className="flex justify-between items-center mt-5 gap-1">
          <div>
            <Image src="https://i.ibb.co/X7JpSTk/image-big-Offer-1.png" radius={"xs"} />
          </div>
          <div>
            <Image src="https://i.ibb.co/6tmy32q/image-big-Offer-2.png" radius={"xs"} />
          </div>
          <div>
            <Image src="https://i.ibb.co/WBQBcp4/image-big-Offer-3.png" radius={"xs"} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BigOffer;
