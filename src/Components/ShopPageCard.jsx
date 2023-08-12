import { Card, Image, Text, Badge, Button, Group, Modal, createStyles, Indicator } from "@mantine/core";
import { IconInfoCircleFilled } from "@tabler/icons-react";
import { IconShoppingBag } from "@tabler/icons-react";
// import DescriptionModal from "./Modal/DesciptionModal";
// import { useState } from "react";
import { FaBagShopping } from "react-icons/fa";
// import { useDisclosure } from "@mantine/hooks";

// function Demo() {
//     const [opened, { open, close }] = useDisclosure(false)}
// card css styles
const useStyles = createStyles(() => ({
  item_card: {
    width: "350px",
    height: "227px",
  },
}));
export const ShopPageCard = ({ item, addItemToCart, setModalItem, cart }) => {
  const { classes } = useStyles();
  const { image, name, description, price, category } = item;
  return (
    <div>
      <Card className={classes.item_card} shadow="sm" radius="md" withBorder>
        <div className="flex items-center justify-between gap-5 ">
          <div>
            <div className="flex justify-between items-center gap-5">
              <Badge color="#4263EB" variant="light">
                category : {category}
              </Badge>
              <Badge color="#4263EB" variant="light">
                $ {price}
              </Badge>
            </div>
            <Text mt={12} weight={500}>
              {name}
            </Text>
          </div>

          <div>
            <Image src={image} height={90} alt={name} radius={12} />
          </div>
        </div>

        <div className="flex items-center gap-5 mt-5 ">
          <Text size="sm" color="dimmed">
            {description.slice(0, 60)}...
          </Text>
          <label onClick={() => setModalItem(item)} htmlFor="my_modal_6" className="cursor-pointer text-[#5C7CFA]">
            <IconInfoCircleFilled />
          </label>
        </div>

        <div className="mt-5">
          <IconShoppingBag onClick={() => addItemToCart(item)} className="text-[#5C7CFA] cursor-pointer" />
        </div>
      </Card>
    </div>
  );
};
