import {
  Anchor,
  Avatar,
  Button,
  Card,
  Checkbox,
  Grid,
  Group,
  Image,
  Indicator,
  Input,
  Stack,
  Text,
  TextInput,
  createStyles,
  rem,
} from "@mantine/core";
// import { theme } from "antd";
import React, { useContext } from "react";
import PaymentSavedCart from "../../Components/PaymentSavedCart";
import PaymentCard from "../../Components/PaymentCard";
import { IconAt, IconPhone, IconWriting } from "@tabler/icons-react";
import { AuthContext } from "../../Context/UserContext";
import { upperFirst, useToggle } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { ApiContext } from "../../Context/DataContext";
import { IconTrash } from "@tabler/icons-react";
// import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  section: {
    width: "60%",
    margin: "auto",
    paddingTop: "50px",
    paddingBottom: "50px",
    // border: "1px solid gray",
    // borderRadius: "15px",
  },
  payment_method: {
    border: "1px solid gray",
    borderRadius: "15px",
    padding: "20px",
  },
  paymentCard: {
    border: "1px solid gray",
    borderRadius: "15px",
    // width: '90%'
    padding: "20px",
  },
  heading: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
    // marginTop: "20px",
    // marginBottom: "15px",
    fontSize: "18px",
  },
  paymentCard_heading: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
    marginTop: "25px",
    fontSize: "18px",
  },
}));

const Checkout = () => {
  const [type, toggle] = useToggle(["login", "register"]);

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
      marginTop: `calc(${theme.spacing.xs}* 5.5)`,
      // display: "flex",
      // justifyContent: "space-between",
      // alignItems: "center",
      // paddingLeft: theme.spacing.xs,
      // marginLeft: theme.spacing.md,

      // [theme.fn.smallerThan("xs")]: {
      //   flexDirection: "column",
      // },
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
      borderRadius: "5px",
    },
    cartPaymentSummary: {
      border: "1px solid rgb(229 231 235)",
      opacity: "0.7",
      borderRadius: "5px",
      height: "350px",
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

  // const form = useForm({
  //   initialValues: {
  //     name: "",
  //     email: "",
  //     city: "",
  //     terms: true,
  //   },

  //   validate: {
  //     email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
  //     password: (val) => (val.length <= 6 ? "Password should include at least 6 characters" : null),
  //   },
  // });
  const { user } = useContext(AuthContext);
  const { cart, removeItemFromCart, subTotal, finalPrice, taxDue, handleDecreaseItem, handleIncreaseItem } =
    useContext(ApiContext);
  console.log(cart);
  const { classes } = useStyles();

  return (
    <div>
      <Grid className={classes.section}>
        <Grid.Col sm={12} xs={12} lg={7.8} className={classes.cartItems}>
          <div className="">
            {cart.map((item) => (
              <>
                <Card className={classes.card}>
                  <div key={item.id}>
                    <div className={classes.body}>
                      <Indicator label={item.quantity} inline size={24}>
                        <Image src={item.image} width={50} height={50} radius={10} alt={item.name} />
                        {/* <Avatar size="lg" src={item.image} /> */}
                      </Indicator>
                      {/* <Image src={item.image} width={90} height={90} radius={10} alt={item.name} /> */}
                      <div className={classes.text_container}>
                        <Text className={classes.title}>{item.name}</Text>
                        <Text className={classes.subTitle}>{item.description.slice(0, 75)}...</Text>
                      </div>

                      <div className={classes.counterContainer}>
                        <button className="btn  btn-sm btn-circle" onClick={() => handleDecreaseItem(item._id)}>
                          -
                        </button>
                        {/* <Text size={5} w={15} align="center">
                          category : {item.category}
                        </Text> */}
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
                        <IconTrash size={"1.25rem"} onClick={() => removeItemFromCart(item)} />
                      </Button>
                    </div>
                  </div>
                </Card>
              </>
            ))}
          </div>
          <div className="p-5">
            <Text mb={10} c={"purple"} fw={600} fz={18}>
              Shipping Address
            </Text>
            <form>
              <Stack>
                <div className="flex items-center gap-4">
                  <TextInput
                    w={"100%"}
                    required
                    label="Full Name"
                    placeholder="Enter your name"
                    // value={form.values.name}
                    // onChange={(event) => setFieldValue("name", event.currentTarget.value)}
                    radius="sm"
                  />
                  <TextInput
                    w={"100%"}
                    required
                    label="Email"
                    placeholder="Enter your email"
                    // value={form.values.email}
                    // onChange={(event) => form.setFieldValue("email", event.currentTarget.value)}
                    // error={form.errors.email && "Invalid email"}
                    radius="sm"
                  />
                </div>

                <div className="flex items-center gap-4">
                  <TextInput
                    w={"100%"}
                    required
                    label="your Number"
                    placeholder="your contact number"
                    // value={form.values.email}
                    // onChange={(event) => form.setFieldValue("email", event.currentTarget.value)}
                    // error={form.errors.email && "Invalid email"}
                    radius="sm"
                  />
                  <TextInput
                    w={"100%"}
                    label="city"
                    placeholder="city"
                    // value={form.values.email}
                    // onChange={(event) => form.setFieldValue("email", event.currentTarget.value)}
                    // error={form.errors.email && "Invalid email"}
                    radius="sm"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <TextInput
                    w={"100%"}
                    label="state"
                    placeholder="state"
                    // value={form.values.email}
                    // onChange={(event) => form.setFieldValue("email", event.currentTarget.value)}
                    // error={form.errors.email && "Invalid email"}
                    radius="sm"
                  />
                  <TextInput
                    w={"100%"}
                    label="ZIP/Postal Code"
                    placeholder="postal code"
                    // value={form.values.email}
                    // onChange={(event) => form.setFieldValue("email", event.currentTarget.value)}/
                    // error={form.errors.email && "Invalid email"}
                    radius="sm"
                  />
                </div>

                <Checkbox
                  label="I accept terms and conditions"
                  // checked={form.values.terms}
                  // onChange={(event) => form.setFieldValue("terms", event.currentTarget.checked)}
                />
              </Stack>

              <Group position="apart" mt="xl">
                <Anchor component="button" type="button" color="dimmed" onClick={() => toggle()} size="xs">
                  {type === "register" ? "Already have an account? Login" : "Don't have an account? Register"}
                </Anchor>
                <Button type="submit" radius="xl">
                  {upperFirst(type)}
                </Button>
              </Group>
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
            <Text c={"#099268"} align="center" fz={"sm"}>
              Complete your order by providing your payment details.
            </Text>
            <div class="mt-5">
              {/* <Grid.Col md={6} lg={3.5} className={classes.cartPaymentSummary}> */}

              <hr />

              <div>
                <TextInput
                  w={"100%"}
                  required
                  label="Coupon Code"
                  placeholder="Enter Coupon Code"
                  // value={form.values.Text}
                  // onChange={(event) => form.setFieldValue("email", event.currentTarget.value)}
                  // error={form.errors.email && "Invalid email"}
                  radius="sm"
                />
              </div>

              <Text ta="left" fz="sm" fw={700}>
                <div className="">
                  <div className="flex justify-between p-2">
                    <Text c={"#495057"}>Subtotal :</Text>
                    <Text c={"#495057"}>$ {subTotal.toFixed(2)}</Text>
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
              {/* <PaymentButton cart={cart}></PaymentButton> */}
              {/* </Grid.Col> */}
            </div>
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default Checkout;
