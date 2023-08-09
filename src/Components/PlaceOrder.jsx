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
  Indicator,
} from "@mantine/core";
import { useContext } from "react";
// import { ApiContext } from "../../Context/DataContext";

import { IconArrowNarrowLeft, IconMoon, IconTrash, IconTruckDelivery } from "@tabler/icons-react";

// import PaymentButton from "../../Components/PaymentButton";
import { Link, useNavigate } from "react-router-dom";
import { ApiContext } from "../Context/DataContext";
import { useState } from "react";
import { toast } from "react-hot-toast";
// import { useState } from "react";

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
    borderRadius: "15px",
  },

  cartPaymentSummary: {
    border: "1px solid rgb(229 231 235)",
    opacity: "0.7",
    borderRadius: "15px",
    height: "380px",
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

const PlaceOrder = () => {
  const orderInfoFromLocalStorage = JSON.parse(localStorage.getItem("orderInfo") || "[]");
  const [orderInfo, setOrderInfo] = useState(orderInfoFromLocalStorage);
  const { name, email, phone, city, state, totalPrice, zip } = orderInfo;
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    const orderInfo = { name, email, phone, city, state, totalPrice, zip };
    fetch("http://localhost:5000/orderInfo", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if ((data.acknowledged = true)) {
          toast.success(" orderInfo added successfully ");
          navigate("/myOrder");
        } else {
          console.log(console.error);
          //   toast.error(data.message);
        }
      });
  };
  // const [shipping, setShipping] = useState("delivery");

  // const handleChange = (event, newShipping) => {
  //   setShipping(newShipping);
  // };

  // const { user } = useContext(AuthContext);
  const { cart } = useContext(ApiContext);
  // localStorage.setItem("subtotal", subTotal);

  const { classes } = useStyles();

  //   const [showData, setShowData] = useState(false);
  const [showData1, setShowData1] = useState(true);
  const [showData2, setShowData2] = useState(false);

  const toggleData1 = () => {
    setShowData1(!showData1);
    setShowData2(false); // Hide the other data
  };

  const toggleData2 = () => {
    setShowData2(!showData2);
    setShowData1(false); // Hide the other data
  };

  return (
    <div>
      <Container size="lg">
        <Text className={classes.heading}>Order Items</Text>

        <Grid className="pt-8 pb-2" gutter={"xs"}>
          <Grid.Col md={6} lg={8.2} gap={2} className={classes.cartItems}>
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
                            <Indicator inline label={item.quantity} size={16}>
                              <Image src={item.image} width={90} height={90} radius={10} alt={item.name} />
                            </Indicator>
                            <div className={classes.text_container}>
                              <Text className={classes.title}>{item.name}</Text>
                              <Text className={classes.subTitle}>{item.description.slice(0, 75)}...</Text>
                            </div>

                            {/* <div className={classes.counterContainer}>
                              <button className="btn  btn-sm btn-circle" onClick={() => handleDecreaseItem(item._id)}>
                                -
                              </button> */}
                            <Text size={15} w={15} align="center">
                              {item.quantity}
                            </Text>
                            {/* <button className="btn btn-sm btn-circle" onClick={() => handleIncreaseItem(item._id)}>
                                +
                              </button>
                            </div> */}

                            <Text w={50} align="center" className={classes.title}>
                              ${item.price * item.quantity}
                            </Text>

                            {/* <Button
                              // defaultValue={4}
                              className={classes.control}
                              compact
                              // variant="default"
                              size="xs"
                            >
                              {" "}
                              <IconTrash size={"1.25rem"} onClick={() => removeItemFromCart(item)} />
                            </Button> */}
                          </div>
                        </div>
                      </Card>
                      <hr />
                    </>
                  ))}
                </>
              ) : (
                <>
                  <section className="flex items-center text-[#FF922B] mt-8">
                    <div className="container flex flex-col items-center justify-center mx-auto">
                      <div className="text-center">
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find items .</p>
                        <p className="mt-4  ">
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
            <div className="py-2">
              <Text c={"#4C6EF5"} ta="left" fz="md" p={4} fw={700}>
                select payment method
              </Text>
              <div>
                <button onClick={toggleData1}>Toggle Data 1</button>
                <button onClick={toggleData2}>Toggle Data 2</button>
                {showData1 && (
                  <div>
                    {/* Place your data for Data 1 here */}
                    <p>This is Data 1 that will be displayed when the first button is clicked.</p>
                  </div>
                )}
                {showData2 && (
                  <div>
                    {/* Place your data for Data 2 here */}
                    <p>This is Data 2 that will be displayed when the second button is clicked.</p>
                  </div>
                )}
              </div>
            </div>
          </Grid.Col>

          <Grid.Col md={6} lg={0.2}></Grid.Col>
          <Grid.Col md={6} lg={3.5} className={classes.cartPaymentSummary}>
            <Text c={"#4C6EF5"} ta="center" fz="md" p={4} fw={700}>
              order Information
            </Text>
            <hr />

            {/* <Group position="center" my="xl">
                <SegmentedControl
                  value={shipping}
                  onChange={handleChange}
                  data={[
                    {
                      value: "delivery",
                      label: (
                        <Center>
                          <IconTruckDelivery size="1rem" stroke={1.5} />
                          <Box ml={10}>Delivery</Box>
                        </Center>
                      ),
                    },
                    {
                      value: "Pickup",
                      label: (
                        <Center>
                          <IconMoon size="1rem" stroke={1.5} />
                          <Box ml={10}>Pickup</Box>
                        </Center>
                      ),
                    },
                  ]}
                />
              </Group> */}
            <Text ta="left" fz="sm" fw={700}>
              <div className="">
                <div className=" flex p-2">
                  <Text c={"#495057"}>Name :</Text>
                  <Text pl={3} c={"#495057"}>
                    {" "}
                    {name}
                  </Text>
                </div>
                <hr />
                <div className=" flex p-2">
                  <Text c={"#495057"}>Email : </Text>
                  <Text pl={3} c={"#495057"}>
                    {" "}
                    {email}
                  </Text>
                </div>
                <hr />
                <div className=" flex p-2">
                  <Text c={"#495057"}>Phone : </Text>
                  <Text pl={3} c={"#5C7CFA"}>
                    {" "}
                    {phone}
                  </Text>
                </div>
                <hr />
                <div className=" flex p-2">
                  <Text c={"#495057"}> City : </Text>
                  <Text pl={3} c={"#5C7CFA"}>
                    {" "}
                    {city}
                  </Text>
                </div>{" "}
                <hr />
                <div className=" flex p-2">
                  <Text c={"#495057"}>state : </Text>
                  <Text pl={3} c={"#5C7CFA"}>
                    {" "}
                    {state}
                  </Text>
                </div>{" "}
                <hr />
                <div className=" flex p-2">
                  <Text c={"#495057"}> ZIP : </Text>
                  <Text pl={3} c={"#5C7CFA"}>
                    {" "}
                    {zip}
                  </Text>
                </div>
                <hr />
                <div className=" flex p-2">
                  <Text c={"#495057"}> Price : </Text>
                  <Text pl={3} c={"#5C7CFA"}>
                    {" "}
                    {totalPrice}
                  </Text>
                </div>
                <hr />
                <Button
                  onClick={handlePlaceOrder}
                  className={classes.place_order}
                  w={"100%"}
                  size="sm"
                  mt={16}
                  color="indigo"
                >
                  place order
                </Button>
              </div>
            </Text>
            {/* <PaymentButton cart={cart}></PaymentButton> */}
          </Grid.Col>
        </Grid>
        {/* <Link to={"/shop"} className="flex justify-start items-center gap-1 pb-5">
          <ActionIcon c={"#5C7CFA"}>
            <IconArrowNarrowLeft size="1.25rem" />
          </ActionIcon>
          <Text c={"#5C7CFA"} fw={600} fz="sm">
            Add more meals
          </Text>
        </Link> */}
      </Container>
    </div>
  );
};

export default PlaceOrder;
