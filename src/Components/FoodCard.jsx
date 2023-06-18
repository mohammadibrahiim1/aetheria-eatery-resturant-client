import React from "react";
import {
  Button,
  // Container, Grid, List, Modal,
  Text,
  rem,
} from "@mantine/core";

import { createStyles, Card, Image, Group } from "@mantine/core";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
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
    fontFamily: `Inter, sans-serif ${theme.fontFamily}`,
    fontWeight: 700,
    color: "#151515",
    lineHeight: 1.2,
    fontSize: rem(32),
    textTransform: "uppercase",
    textAlign: "center",
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
  },
  control: {
    height: rem(28),
    fontSize: theme.fontSizes.sm,
    color: "#B70C1C",
  },
}));

const FoodCard = ({ item, setFoodItem, addItemToCart }) => {
  const { classes } = useStyles();

  return (
    <div>
      <Card withBorder radius="md" p={0} className={classes.card}>
        <Group noWrap spacing={0}>
          <Image src={item.image} height={140} width={140} />
          <div className={classes.body}>
            <Text transform="uppercase" color="dimmed" weight={700} size="xs">
              {item.name}
            </Text>
            <Text className={classes.title} mt="xs" mb="md">
              <div className="flex justify-between align-center gap-28">
                <span size="xs"> {item.category}</span>
                <span>${item.price}</span>
              </div>
            </Text>
            <div>
              {" "}
              <div className={classes.controls}>
                <Button
                  onClick={() => addItemToCart(item)}
                  compact
                  className={classes.control}
                  variant="default"
                  size="xs"
                >
                  add to cart
                </Button>
                <Link to="/shop">
                  <Button
                    // onClick={open,()=>setFoodItem()}
                    onClick={() => setFoodItem(item)}
                    compact
                    className={classes.control}
                    variant="default"
                    size="xs"
                  >
                    see more items
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Group>
      </Card>
    </div>
  );
};

export default FoodCard;
