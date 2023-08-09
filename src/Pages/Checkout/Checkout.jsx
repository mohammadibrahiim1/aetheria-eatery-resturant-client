import {
  ActionIcon,
  Button,
  Card,
  Checkbox,
  Container,
  Grid,
  Image,
  Indicator,
  Stack,
  Text,
  TextInput,
  createStyles,
  rem,
} from "@mantine/core";

import React, { useContext } from "react";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { AuthContext } from "../../Context/UserContext";

import { ApiContext } from "../../Context/DataContext";
import { IconTrash } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useReducer } from "react";
import { initialState, reducer } from "../../state/formReducers";
import { useState } from "react";

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
    color: "#4C6EF5",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
    marginTop: "10px",
    marginBottom: "15px",
    textAlign: "center",
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
    alignItems: "center",
    gap: "7px",
  },

  controls: {
    marginTop: `calc(${theme.spacing.xs}* 5.5)`,
  },
  control: {
    height: rem(22),
    color: "#B70C1C",

    ":hover": {
      backgroundColor: "white",
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
    borderRadius: "5px",
  },
  cartPaymentSummary: {
    border: "1px solid rgb(229 231 235)",
    opacity: "0.7",
    borderRadius: "5px",
    height: "430px",
  },

  section: {
    width: "60%",
    margin: "auto",
    paddingTop: "100px",
    paddingBottom: "100px",
  },

  counterMinusButton: {
    border: "1px solid gray",

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

  place_order: {
    color: "#4263EB",
    marginTop: "12px",
    width: "100%",
    border: "1px solid #4263EB",
    ":hover": {
      backgroundColor: "#4263EB",
      border: "1px solid #4263EB",
      transition: "0.5s",
      color: "#FFFFFF !important ",
    },

    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.xs,
    },

    [theme.fn.smallerThan("xs")]: {
      "&:not(:first-of-type)": {
        marginLeft: 0,
      },
    },
  },
}));
const Checkout = () => {
  const { user } = useContext(AuthContext);
  const { displayName, email } = user;

  const [isChecked, setIsChecked] = useState(false);

  console.log(user);
  const { cart, removeItemFromCart, subTotal, finalPrice, taxDue, handleDecreaseItem, handleIncreaseItem, shipping } =
    useContext(ApiContext);
  console.log(cart);
  const { classes } = useStyles();
  // const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const phone = form.number.value;
    const city = form.city.value;
    const state = form.state.value;
    const zip = form.zip.value;
    console.log(name, phone, email, city, state, zip);
  };

  return (
    <div>
      <Container size={"lg"}>
        <div className="flex justify-between items-center ">
          <Text c={"#4C6EF5"} ta="left" fz="md" py={25} fw={700}>
            Checkout
          </Text>
          <Link to="/cart" className="flex justify-start items-center">
            <ActionIcon c={"#5C7CFA"}>
              <IconArrowNarrowLeft size="1.25rem" />
            </ActionIcon>
            <Text c={"#4C6EF5"} ta="left" fz="md" py={25} fw={700}>
              Back to Cart
            </Text>
          </Link>
        </div>
        <Grid className="mb-8">
          <Grid.Col sm={12} xs={12} lg={7.8} className={classes.cartItems}>
            <div className="">
              {cart.map((item) => (
                <>
                  <Card className={classes.card}>
                    <div key={item.id}>
                      <div className={classes.body}>
                        <Indicator label={item.quantity} inline size={24}>
                          <Image src={item.image} width={50} height={50} radius={10} alt={item.name} />
                        </Indicator>

                        <div className={classes.text_container}>
                          <Text className={classes.title}>{item.name}</Text>
                          <Text className={classes.subTitle}>{item.description.slice(0, 75)}...</Text>
                        </div>

                        <div className={classes.counterContainer}>
                          <button className="btn  btn-sm btn-circle" onClick={() => handleDecreaseItem(item._id)}>
                            -
                          </button>

                          <button className="btn btn-sm btn-circle" onClick={() => handleIncreaseItem(item._id)}>
                            +
                          </button>
                        </div>

                        <Text w={50} align="center" className={classes.title}>
                          ${item.price * item.quantity}
                        </Text>

                        <Button className={classes.control} compact size="xs">
                          {" "}
                          <IconTrash size={"1.25rem"} onClick={() => removeItemFromCart(item)} />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </>
              ))}
            </div>
            <div className="p-5">
              <Text c={"#4C6EF5"} ta="left" fz="md" pb={5} fw={700}>
                Shipping address
              </Text>

              <form onSubmit={handleSubmit}>
                <Stack>
                  <div className="flex items-center gap-4">
                    <TextInput
                      w={"100%"}
                      required
                      label="Full Name"
                      name="name"
                      id="name"
                      placeholder="Enter your name"
                      value={displayName}
                      radius="sm"
                    />
                    <TextInput
                      w={"100%"}
                      required
                      label="Email"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      value={email}
                      radius="sm"
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <TextInput
                      w={"100%"}
                      required
                      label="your Number"
                      name="number"
                      id="number"
                      placeholder="your contact number"
                      radius="sm"
                    />
                    <TextInput w={"100%"} label="city" placeholder="city" name="city" id="city" radius="sm" />
                  </div>

                  <div className="flex items-center gap-2">
                    <TextInput w={"100%"} label="state" placeholder="state" name="state" id="state" radius="sm" />
                    <TextInput
                      w={"100%"}
                      label="ZIP/Postal Code"
                      placeholder="postal code"
                      name="zip"
                      id="zip"
                      radius="sm"
                    />
                  </div>

                  <Checkbox
                    required
                    size="xs"
                    label="I accept terms and conditions"
                    type="checkbox"
                    name="term"
                    id="terms"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                  />
                  <Button
                    type="submit"
                    disabled={!isChecked}
                    className={classes.place_order}
                    w={"100%"}
                    size="sm"
                    mt={16}
                    color="indigo"
                  >
                    Place order
                  </Button>
                </Stack>
              </form>
            </div>
          </Grid.Col>
          <Grid.Col md={6} lg={0.2}></Grid.Col>
          <Grid.Col sm={12} xs={12} lg={4} className={classes.cartPaymentSummary}>
            <div class={classes.paymentCard}>
              <Text c={"#4C6EF5"} ta="center" fz="md" p={4} fw={700}>
                Order summary
              </Text>
              <hr />
              <Text c={"#099268"} align="center" fz={"sm"} mt={5}>
                Complete your order by providing your payment details.
              </Text>
              <div class="mt-5">
                <hr />

                <div>
                  <TextInput w={"100%"} label="Coupon Code" placeholder="Enter Coupon Code" radius="sm" mt={12} />
                  <TextInput w={"100%"} label="discount" placeholder="Enter discount price" radius="sm" mt={12} />
                </div>

                <Text ta="left" fz="sm" fw={700}>
                  <div className="mt-5">
                    <div className="flex justify-between p-2">
                      <Text c={"#495057"}>Subtotal :</Text>
                      <Text c={"#495057"}>$ {subTotal.toFixed(2)}</Text>
                    </div>
                    <hr />
                    <div className="flex justify-between p-2">
                      <Text c={"#495057"}>Shipping :</Text>
                      <Text c={"#495057"}>$ {shipping}</Text>
                    </div>
                    <hr />
                    <div className="flex justify-between p-2">
                      <Text c={"#495057"}>Tax(11%) :</Text>
                      <Text c={"#495057"}>$ {taxDue.toFixed(2)}</Text>
                    </div>
                    <hr />
                    <div className="flex justify-between p-2">
                      <Text c={"#495057"}>Total : </Text>
                      <Text c={"#5C7CFA"}> $ {finalPrice.toFixed(2)}</Text>
                    </div>
                    <hr />
                  </div>
                </Text>
              </div>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};

export default Checkout;
