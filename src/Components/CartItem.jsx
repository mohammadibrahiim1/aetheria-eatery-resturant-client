import React, { useState } from "react";
import {
  createStyles,
  Card,
  Image,
  Text,
  Group,
  Container,
  Grid,
  AspectRatio,
} from "@mantine/core";
const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },

  body: {
    padding: theme.spacing.md,
  },
}));

const CartItem = ({ item }) => {




  return (
    <div>
     
    </div>
  );
};

export default CartItem;
