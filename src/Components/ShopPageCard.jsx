import { Card, Image, Text, Badge, Button, Group, Modal, createStyles } from "@mantine/core";
import DescriptionModal from "./Modal/DesciptionModal";
import { useState } from "react";
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
export const ShopPageCard = ({ item, addItemToCart, setModalItem }) => {
  const { classes } = useStyles();
  const { image, name, description, price, category } = item;
  return (
    <div>
      {/* <Modal
      //  opened={opened} onClose={close} title="About Dishes" centered
      >
        <Text size="sm" color="dimmed">
          {name}
        </Text>

        <Text size="sm" color="dimmed">
          {description}
        </Text>
      </Modal> */}
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

        <Text size="sm" color="dimmed" mt={5}>
          {description.slice(0, 60)}...
        </Text>

        <div className="grid grid-cols-2 gap-5 justify-between items-center mt-5">
          <Button
            onClick={() => addItemToCart(item)}
            className="btn btn-sm capitalize border-[#4263EB] hover:bg-[#4263EB] duration-500 hover:text-[#FFF]"
          >
            Add To Cart
          </Button>

          <label
            onClick={() => setModalItem(item)}
            htmlFor="my_modal_6"
            className="btn btn-sm capitalize border-[#4263EB] hover:bg-[#4263EB] duration-500 hover:text-[#FFF]"
          >
            see more
          </label>
        </div>
      </Card>
    </div>
  );
};
