import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Button } from "@mantine/core";

const FoodModal = ({ foodItem }) => {
  // console.log(foodItem);
  const { name, image } = foodItem;
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        {/* Modal content */}
      </Modal>
    </div>
  );
};

export default FoodModal;
