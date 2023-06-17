import {
  createStyles,
  Card,
  Image,
  Text,
  Group,
  Container,
  Grid,
  Button,
  rem,
} from "@mantine/core";
import { useContext, useState } from "react";
import { ApiContext } from "../../Context/DataContext";

import { Link } from "react-router-dom";

import { IconTrash } from "@tabler/icons-react";

// import { AuthContext } from "../../Context/UserContext";
import PaymentButton from "../../Components/PaymentButton";

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
  // controls: {
  //   marginTop: `calc(${theme.spacing.xs}* 1.5)`,

  //   display: "flex",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   paddingLeft: theme.spacing.xs,
  //   marginLeft: theme.spacing.md,

  //   [theme.fn.smallerThan("xs")]: {
  //     flexDirection: "column",
  //   },
  // },
  controls: {
    height: rem(32),
    // fontSize: theme.fontSizes.sm,
    color: "#B70C1C",
    marginTop: "12px",
    width: "100%",
    border: "1px solid red",
    ":hover": {
      backgroundColor: "red",
      border: "1px solid red",
      transition: "0.5s",
      color: "white",
    },

    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.xs,
    },

    [theme.fn.smallerThan("xs")]: {
      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}));

const Cart = () => {
  const { classes } = useStyles();
  // const { user } = useContext(AuthContext);

  // const [value, setValue] = useState();

  const {
    cart,
    removeItemFromCart,
    handleIncreaseItem,
    handleDecreaseItem,
    // quantity,
  } = useContext(ApiContext);
  // const [items, setitems] = useState(cart);

  // const handleQuantityChange = (itemId, quantity) => {
  //   setitems((previtems) =>
  //     previtems.map((item) =>
  //       item._id === itemId ? { ...item, quantity } : item
  //     )
  //   );
  // };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const calculateSubTotal = () => {
    return cart.reduce((subTotal, item) => {
      return subTotal + item.price * item.quantity;
    }, 0);
  };

  return (
    <div>
      <Container className="py-24">
        <div className={classes.subTitle}>
          <p>---check it out---</p>
        </div>
        <div className={classes.heading} color="#151515">
          <h1> Confirm Your Order</h1>
        </div>

        <Grid className="py-8">
          <Grid.Col md={6} lg={12}>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4  ">
              {cart?.map((item) => (
                <>
                  <Card withBorder radius="md" p={0} className={classes.card}>
                    <Group noWrap spacing={0} key={item.id}>
                      <Image src={item.image} height={140} width={140} />
                      <div className={classes.body}>
                        <Text className={classes.title} mb="md">
                          {item.name}
                        </Text>
                        <Text className={classes.title} mb="md">
                          ${item.price * item.quantity}
                        </Text>
                        <div class="flex gap-32 lg:gap-48">
                          <div className="cart-item-quantity">
                            <button
                              onClick={() => handleDecreaseItem(item._id)}
                            >
                              -
                            </button>
                            <div className="count">{item.quantity}</div>
                            <button
                              onClick={() => handleIncreaseItem(item._id)}
                            >
                              +
                            </button>
                          </div>
                          {/* <input
                            onChange={(e) =>
                              handleQuantityChange(item._id, e.target.value)
                            }
                            class="h-8 w-8 border bg-white text-center text-xs outline-none"
                            type="number"
                            value={item.quantity}
                          /> */}
                          <div position="center">
                            <Button
                              // defaultValue={4}
                              className={classes.control}
                              compact
                              variant="default"
                              size="xs"
                            >
                              {" "}
                              <IconTrash
                                onClick={() => removeItemFromCart(item._id)}
                              />
                            </Button>
                          </div>
                        </div>
                        <Group noWrap spacing="xs"></Group>
                      </div>
                    </Group>
                  </Card>
                </>
              ))}
            </div>
            <div className="py-8">
              {/* <Button variant="default" className="w-full">
                Checkout
              </Button> */}
            </div>
          </Grid.Col>
          <Grid.Col md={6} lg={12}>
            {/* <Grid.Col md={6} lg={4}> */}{" "}
            <Text
              variant="gradient"
              gradient={{ from: "#B70C1C", to: "#222222", deg: 90 }}
              sx={{ fontFamily: "Inter, sans-serif" }}
              ta="left"
              fz="xl"
              fw={700}
            >
              Bill Details
            </Text>
            <hr />
            <Text
              variant="gradient"
              gradient={{ from: "#B70C1C", to: "#222222", deg: 90 }}
              sx={{ fontFamily: "Inter, sans-serif" }}
              ta="left"
              fz="sm"
              fw={700}
            >
              <div className="py-8 ">
                {" "}
                <p className="pb-5">Subtotal: ${calculateSubTotal()}</p>
                <hr />
                <p className="pt-5">Total : ${calculateTotal()} </p>
              </div>
            </Text>
            {/* <div position="center" className={classes.controls}> */}
            {/* <Button compact className={classes.control} size="xs"> */}
            <PaymentButton
              size="xs"
              compact
              className={classes.controls}
              cart={cart}
              variant="default"
            ></PaymentButton>
            {/* </Button> */}
            {/* </div> */}
            <Link to="/shop" position="center" className={classes.controls}>
              <Button compact className={classes.controls} size="xs">
                Add more item
              </Button>
            </Link>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};

export default Cart;
