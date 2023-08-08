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
  Container,
  ActionIcon,
  Group,
} from "@mantine/core";
import { useContext } from "react";
import { ApiContext } from "../../Context/DataContext";

import { IconArrowNarrowLeft, IconTrash } from "@tabler/icons-react";

import PaymentButton from "../../Components/PaymentButton";
import { Link } from "react-router-dom";
// import axios from "axios";
// import { AuthContext } from "../../Context/UserContext";
// import { toast } from "react-hot-toast";
// import { toast } from "react-hot-toast";
// import { isEmail } from "@mantine/form";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontWeight: 700,
    opacity: "0.7",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },

  body: {
    display: "grid",
    gridTemplateColumns: "repeat(5,1fr)",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
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
    width: "90%",
    marginTop: "5px",
  },

  counterContainer: {
    display: "flex",
    // justifyContent: "space-between",
    alignItems: "center",
    // border: "1px solid gray",
    // paddingLeft: "9px",
    // paddingRight: "9px",
    // margin: "5px",
    // borderRadius: "8px",
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
    // width: "50%",
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
    border: "1px solid rgb(229 231 235)",
    overflow: "auto",
    borderRadius: "15px",
  },
  cartPaymentSummary: {
    border: "1px solid rgb(229 231 235)",
    opacity: "0.7",
    borderRadius: "15px",
    height: "250px",
  },

  section: {
    width: "60%",
    margin: "auto",
  },

  counterMinusButton: {
    border: "1px solid gray",
    // opacity: "0.5",
    paddingRight: "4px",
    paddingLeft: "4px",
    borderRadius: "100%",
  },
  counterPlusButton: {
    borderLeft: "1px solid gray",
    opacity: "0.5",
    paddingLeft: "9px",
  },

  text_container: {
    width: "400px",
  },
}));

const Cart = () => {
  // const { user } = useContext(AuthContext);
  const {
    cart,
    subTotal,
    total,
    removeItemFromCart,
    handleIncreaseItem,
    handleDecreaseItem,
    // quantity,
  } = useContext(ApiContext);
  const { classes } = useStyles();

  // const handleCheckout = () => {
  //   const checkout = {
  //     total,
  //     name: user.displayName,
  //     email: user.email,
  //   };
  //   fetch("https://resturant-website-server.vercel.app/checkout", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(checkout),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.acknowledged) {
  //         // setSelectTable(null);
  //         toast.success("added  successfully");
  //         // refetch();
  //       } else {
  //         toast.error(data.message);
  //       }
  //     });
  // };

  //   axios
  //     .post(`https://resturant-website-server.vercel.app/checkoutPostInfo`, {
  //       price: calculateSubTotal(),
  //       totalPrice: calculateTotal(),
  //     })
  //     .then((res) => {
  //       if (res.data.url) {
  //         window.location.href = res.data.url;
  //         toast.success("add checkout info");
  //       }
  //     })
  //     .catch((err) => console.log(err.message));
  // };

  // console.log(cart);

  // const calculateTotal = () => {
  //   return cart.reduce((total, item) => {
  //     return total + item.price * item.quantity;
  //   }, 0);
  // };

  // const calculateSubTotal = () => {
  //   return cart.reduce((subTotal, item) => {
  //     return subTotal + item.price * item.quantity;
  //   }, 0);
  // };

  return (
    <div>
      <Container size="lg">
        <Text className={classes.heading}>My Cart</Text>

        <Grid className="pt-8 pb-2" gutter={"xs"}>
          <Grid.Col md={6} lg={8.2} h={500} gap={2} className={classes.cartItems}>
            <div className="">
              {cart.length ? (
                <>
                  <Group c={"#5C7CFA"} className="flex justify-start items-center gap-2 ms-4">
                    <Text fw={700} mb={2}>
                      Menu
                    </Text>
                    <Text fw={700} fz={12}>
                      {cart.length} meals
                    </Text>
                  </Group>

                  {cart?.map((item) => (
                    <>
                      <Card className={classes.card}>
                        <div key={item.id}>
                          <div className={classes.body}>
                            <Image src={item.image} width={90} height={90} radius={10} />
                            <div className={classes.text_container}>
                              <Text className={classes.title}>{item.name}</Text>
                              <Text className={classes.subTitle}>{item.description.slice(0, 75)}...</Text>
                            </div>

                            <div className={classes.counterContainer}>
                              <button className="btn  btn-sm btn-circle" onClick={() => handleDecreaseItem(item._id)}>
                                -
                              </button>
                              <Text size={15} w={15} align="center">
                                {item.quantity}
                              </Text>
                              <button className="btn btn-sm btn-circle" onClick={() => handleIncreaseItem(item._id)}>
                                +
                              </button>
                            </div>

                            <Text w={50} align="center" className={classes.title}>
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
                              <IconTrash onClick={() => removeItemFromCart(item)} />
                            </Button>
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
                      <div className="text-center">
                        {/* <h2 className="mb-8 font-extrabold text-9xl text-gray-400">
                          <span className="sr-only">Error</span>404
                        </h2> */}
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find items .</p>
                        <p className="mt-4  text-info-600">
                          Good food is always cooking! Go ahead, order some yummy items from the menu.
                          <Link to={"/shop"} className="flex justify-center items-center gap-1">
                            <ActionIcon c={"#5C7CFA"}>
                              <IconArrowNarrowLeft size="1.25rem" />
                            </ActionIcon>
                            <Text c={"#5C7CFA"} fw={600} fz="sm">
                              Add more meals
                            </Text>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </section>
                </>
              )}
            </div>
            <div className="py-8"></div>
          </Grid.Col>

          <Grid.Col md={6} lg={0.2}></Grid.Col>
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
                  <p>
                    $
                    {
                      subTotal
                      // cart.reduce(
                      //   (total, item) => total + item.price * item.quantity,
                      //   0
                      // )
                    }
                  </p>
                </div>
                <hr />
                <div className="flex justify-between p-2">
                  <p>Total(tax incl.) : </p>
                  <p>
                    {" "}
                    $
                    {
                      total
                      // cart.reduce(
                      //   (total, item) => total + item.price * item.quantity,
                      //   0
                      // )
                    }
                  </p>
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
              // handleCheckout={handleCheckout}
              // variant="default"
            ></PaymentButton>
       
          </Grid.Col>
        </Grid>
        <Link to={"/shop"} className="flex justify-start items-center gap-1 pb-5">
          <ActionIcon c={"#5C7CFA"}>
            <IconArrowNarrowLeft size="1.25rem" />
          </ActionIcon>
          <Text c={"#5C7CFA"} fw={600} fz="sm">
            Add more meals
          </Text>
        </Link>
      </Container>
    </div>
  );
};

export default Cart;
