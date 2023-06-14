import React from "react";
import { useContext } from "react";
import { Button, Container, Grid, List, Modal, Text, rem } from "@mantine/core";
// import { ApiContext } from "../Context/DataContext";

import { createStyles, Card, Image, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

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

const FoodCard = ({ item, setFoodItem, addItemToCart }) => {
  //   console.log(foodItem);
  const [opened, { open, close }] = useDisclosure(false);
  //   console.log(setFoodItem);
  const { classes, cx } = useStyles();

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
                <span size="xs" > {item.category}</span>
                <span>${item.price}</span>
              </div>
            </Text>
            <div>
              {" "}
              <div position="center" className={classes.controls}>
                <Button
                
                  onClick={() => addItemToCart(item)}
                  compact
                  className={classes.control}
                  variant="default"
                  size="xs"
                >
                  add to cart
                </Button>
                <Button
                  // onClick={open,()=>setFoodItem()}
                  onClick={() => setFoodItem(item)}
                  open={open}
                  compact
                  className={classes.control}
                  variant="default"
                  size="xs"
                >
                  view
                </Button>
              </div>
            </div>
            <Modal
              opened={opened}
              onClose={close}
              title="Authentication"
              centered
            >
              {/* Modal content */}
            </Modal>
          </div>
        </Group>
      </Card>
    </div>
  );
};

export default FoodCard;
