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
import { useContext } from "react";
import { ApiContext } from "../../Context/DataContext";

import { IconTrash } from "@tabler/icons-react";

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

  counterButton: {
    border: "1px solid red",
    paddingRight: "5px",
    paddingLeft: "5px",
  },

  controls: {
    marginTop: `calc(${theme.spacing.xs}* 1.5)`,

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: theme.spacing.xs,
    marginLeft: theme.spacing.md,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },
  control: {
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

  const {
    cart,
    removeItemFromCart,
    handleIncreaseItem,
    handleDecreaseItem,
    // quantity,
  } = useContext(ApiContext);

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
              {cart && cart ? (
                cart?.map((item) => (
                  <>
                    <Card withBorder radius="md" p={0} className={classes.card}>
                      <Group noWrap spacing={0} key={item.id}>
                        <Image src={item.image} height={140} width={140} />
                        <div className={classes.body}>
                          <Text className={classes.title} mb={3}>
                            {item.name}
                          </Text>
                          <Text className={classes.title}>
                            ${item.price * item.quantity}
                          </Text>
                          <div class=" flex justify-between items-center gap-32 lg:gap-52">
                            <div className="cart-item-quantity flex justify-between items-center">
                              <button
                                className={classes.counterButton}
                                onClick={() => handleDecreaseItem(item._id)}
                              >
                                -
                              </button>
                              <div className={classes.counterButton}>
                                {item.quantity}
                              </div>
                              <button
                                className={classes.counterButton}
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
                ))
              ) : (
                <p className="text-red"> your card in empty!</p>
              )}
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
              // size="xs"
              // compact
              // className={classes.controls}
              cart={cart}
              // variant="default"
            ></PaymentButton>
            {/* </Button> */}
            {/* </div> */}
            {/* <Link to="/shop" position="center" className={classes.controls}>
              <Button compact className={classes.control} size="xs">
                Add more item
              </Button>
            </Link> */}
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};

export default Cart;
