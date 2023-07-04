import {
  createStyles,
  Card,
  Image,
  Text,
  // Group,
  // Container,
  Grid,
  Button,
  rem,
} from "@mantine/core";
import { useContext } from "react";
import { ApiContext } from "../../Context/DataContext";

import { IconTrash } from "@tabler/icons-react";

import PaymentButton from "../../Components/PaymentButton";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../Context/UserContext";
import { toast } from "react-hot-toast";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    width: "100%",
  },

  title: {
    fontWeight: 700,
    opacity: "0.7",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
    // marginTop: "15px",
    // marginBottom: "15px",
  },

  body: {
    // padding: theme.spacing.md,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
    marginTop: "20px",
    marginBottom: "15px",
  },
  subTitle: {
    fontFamily: `Inter, sans-serif ${theme.fontFamily}`,
    fontWeight: 400,
    opacity: "0.5",
    lineHeight: 1.2,
    fontSize: rem(13),
    width: "75%",
    marginTop: "5px",
  },

  counterContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid gray",
    opacity: "0.5",
    paddingLeft: "9px",
    paddingRight: "9px",
    margin: "5px",
    borderRadius: "8px",
    gap: "7px",
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
    height: rem(22),
    color: "#B70C1C",
    width: "50%",
    // border: "1px solid red",

    ":hover": {
      backgroundColor: "white",
      // border: "1px solid red",
      transition: "0.5s",
      color: "#E4002B",
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

  cartItems: {
    border: "1px solid gray",
    opacity: "0.7",
    borderRadius: "15px",
  },
  cartPaymentSummary: {
    border: "1px solid gray",
    opacity: "0.7",
    borderRadius: "15px",
    height: "250px",
  },

  section: {
    width: "60%",
    margin: "auto",
  },
  counterMinusButton: {
    borderRight: "1px solid gray",
    opacity: "0.5",
    paddingRight: "9px",
  },
  counterPlusButton: {
    borderLeft: "1px solid gray",
    opacity: "0.5",
    paddingLeft: "9px",
  },
}));

const Cart = () => {
  // const { user } = useContext(AuthContext);
  const {
    cart,
    removeItemFromCart,
    handleIncreaseItem,
    handleDecreaseItem,
    // quantity,
  } = useContext(ApiContext);
  const { classes } = useStyles();
  const handleCheckout = () => {
    // console.log(cart);
    axios
      .post(`http://localhost:5000/checkoutPostInfo`, {
        price: calculateSubTotal(),
        totalPrice: calculateTotal(),
        // cart,
        // userId: user._id,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
          toast.success("add checkout info");
        }
      })
      .catch((err) => console.log(err.message));
  };

  // console.log(cart);

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
      <section className={classes.section}>
        <Text className={classes.heading}>My Cart</Text>

        <Grid className="py-8">
          <Grid.Col md={6} lg={8} className={classes.cartItems}>
            <div className="">
              {cart.length ? (
                <>
                  {cart?.map((item) => (
                    <>
                      <Card className={classes.card}>
                        <div key={item.id}>
                          <div className={classes.body}>
                            <div className="flex items-center gap-5 ">
                              <Image
                                src={item.image}
                                height={80}
                                width={120}
                                radius={10}
                              />
                              <div>
                                <Text className={classes.title}>
                                  {item.name}
                                </Text>
                                <Text className={classes.subTitle}>
                                  {item.description.slice(0, 75)}...
                                </Text>
                              </div>
                            </div>

                            <div class=" flex items-center gap-7 w-60">
                              <div className={classes.counterContainer}>
                                <button
                                  className={classes.counterMinusButton}
                                  onClick={() => handleDecreaseItem(item._id)}
                                >
                                  -
                                </button>
                                <div>{item.quantity}</div>
                                <button
                                  className={classes.counterPlusButton}
                                  onClick={() => handleIncreaseItem(item._id)}
                                >
                                  +
                                </button>
                              </div>

                              <div className="flex gap-2 items-center justify-between">
                                <Text className={classes.title}>
                                  ${item.price * item.quantity}
                                </Text>

                                <Button
                                  // defaultValue={4}
                                  className={classes.control}
                                  compact
                                  // variant="default"
                                  size="xs"
                                >
                                  {" "}
                                  <IconTrash
                                    onClick={() => removeItemFromCart(item._id)}
                                  />
                                </Button>
                              </div>
                            </div>
                            {/* <Group noWrap spacing="xs"></Group> */}
                          </div>
                        </div>
                      </Card>
                      <hr />
                    </>
                  ))}
                </>
              ) : (
                <>
                  <section className="flex items-center text-red-800 mt-8">
                    <div className="container flex flex-col items-center justify-center mx-auto">
                      <div className="max-w-md text-center">
                        {/* <h2 className="mb-8 font-extrabold text-9xl text-gray-400">
                          <span className="sr-only">Error</span>404
                        </h2> */}
                        <p className="text-2xl font-semibold md:text-3xl">
                          Sorry, we couldn't find items .
                        </p>
                        <p className="mt-4  text-info-600">
                          But dont worry, you can find items or things on our{" "}
                          <Link
                            to="/shop"
                            className="text-indigo-500 font-semibold text-md btn"
                          >
                            Shop
                          </Link>{" "}
                          page .
                        </p>
                      </div>
                    </div>
                  </section>
                </>
              )}
            </div>
            <div className="py-8">
              {/* <Button variant="default" className="w-full">
                Checkout
              </Button> */}
            </div>
          </Grid.Col>
          <Grid.Col md={6} lg={0.5}></Grid.Col>
          <Grid.Col md={6} lg={3.5} className={classes.cartPaymentSummary}>
            <Text
              variant="gradient"
              gradient={{ from: "#B70C1C", to: "#222222", deg: 90 }}
              sx={{ fontFamily: "Inter, sans-serif" }}
              ta="left"
              fz="xl"
              fw={700}
            >
              Payment summary
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
              <div className="mt-5">
                <div className="flex justify-between p-2">
                  <p>Subtotal :</p>
                  <p>${calculateSubTotal()}</p>
                </div>
                <hr />
                <div className="flex justify-between p-2">
                  <p>Total(tax incl.) : </p>
                  <p> ${calculateTotal()}</p>
                </div>
                <hr />
              </div>
            </Text>
            {/* <div position="center" className={classes.controls}> */}
            {/* <Button compact className={classes.control} size="xs"> */}
            <PaymentButton
              // size="xs"
              // compact
              // className={classes.controls}
              cart={cart}
              handleCheckout={handleCheckout}
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
      </section>
    </div>
  );
};

export default Cart;
