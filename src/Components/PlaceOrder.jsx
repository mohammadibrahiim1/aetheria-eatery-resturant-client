import {
  createStyles,
  Card,
  Image,
  Text,
  // Group,
  // Container,
  Grid,
  rem,
  Container,
  ActionIcon,
  Group,
  Indicator,
} from "@mantine/core";
import { useContext } from "react";
// import { ApiContext } from "../../Context/DataContext";

import { IconArrowNarrowLeft } from "@tabler/icons-react";

// import PaymentButton from "../../Components/PaymentButton";
import { Link, useNavigate } from "react-router-dom";
import { ApiContext } from "../Context/DataContext";
// import { useState } from "react";
import { toast } from "react-hot-toast";
import PaymentCard from "./Payment";
import { Button } from "antd";

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
    // height: "380px",
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
  const { cart, orderInfo } = useContext(ApiContext);
  console.log(orderInfo);
  // localStorage.setItem("subtotal", subTotal);

  const { classes } = useStyles();

  // const [selectedRadio, setSelectedRadio] = useState(null);

  // const orderStatus = selectedRadio;

  // const { name, email, phone, city, state, totalPrice, zip } = orderInfo;
  const navigate = useNavigate();

  const handleConfirmOrder = () => {
    fetch(" http://localhost:5000  /orderInfo", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if ((data.acknowledged = true)) {
          toast.success(" orderInfo added successfully ");
          navigate("/myOrder");
        } else {
          console.log(console.error);
          //   toast.error(data.message);
        }
      });
  };
  // const handleRadioChange = (value) => {
  //   setSelectedRadio(value);
  // };

  return (
    <div>
      <Container size="lg">
        <Text className={classes.heading}>Order Items</Text>

        <Grid className="pt-2 pb-8" gutter={"xs"}>
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

                            <Text size={15} w={15} align="center">
                              {item.quantity}
                            </Text>

                            <Text w={50} align="center" className={classes.title}>
                              ${item.price * item.quantity}
                            </Text>
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
            {/* <div className="p-4">
              <Text c={"#4C6EF5"} ta="left" fz="md" fw={700}>
                Select payment method(
                <span className="text-[#F76707]"> please, select a payment method for confirm your order</span> )
              </Text>
              <div className="flex items-center gap-12 py-3">
                <label className="flex items-center text-lg gap-2">
                  <input
                    className="radio-sm checked:bg-blue-500"
                    type="radio"
                    name="radioGroup"
                    value="stripe"
                    checked={selectedRadio === "stripe"}
                    onChange={() => handleRadioChange("stripe")}
                  />
                  <Text c={"#4C6EF5"} ta="left" fz="lg" fw={700}>
                    Stripe
                  </Text>
                </label>

                <label className="flex items-center text-lg gap-2">
                  <input
                    className="radio-sm checked:bg-red-500"
                    type="radio"
                    name="radioGroup"
                    value="Cash on delivery"
                    checked={selectedRadio === "Cash on delivery"}
                    onChange={() => handleRadioChange("Cash on delivery")}
                  />
                  <Text c={"#0CA678"} ta="left" fz="md" fw={700}>
                    Cash on delivery
                  </Text>
                </label>
              </div>
            </div> */}
          </Grid.Col>

          <Grid.Col md={6} lg={0.2}></Grid.Col>
          <Grid.Col md={6} lg={3.5} className={classes.cartPaymentSummary}>
            <Text c={"#4C6EF5"} ta="center" fz="md" p={4} fw={700}>
              order Information
            </Text>
            <hr />

            <Text ta="left" fz="sm" fw={700}>
              <div className="">
                <div className=" flex p-2">
                  <Text c={"#495057"}>Name :</Text>
                  <Text pl={3} c={"#5C7CFA"}>
                    {" "}
                    {orderInfo.name}
                  </Text>
                </div>
                <hr />
                <div className=" flex p-2">
                  <Text c={"#495057"}>Email : </Text>
                  <Text pl={3} c={"#5C7CFA"}>
                    {" "}
                    {orderInfo.email}
                  </Text>
                </div>
                <hr />
                <div className=" flex p-2">
                  <Text c={"#495057"}>Phone : </Text>
                  <Text pl={3} c={"#5C7CFA"}>
                    {" "}
                    {orderInfo.phone}
                  </Text>
                </div>
                <hr />
                <div className=" flex p-2">
                  <Text c={"#495057"}> City : </Text>
                  <Text pl={3} c={"#5C7CFA"}>
                    {" "}
                    {orderInfo.city}
                  </Text>
                </div>{" "}
                <hr />
                <div className=" flex p-2">
                  <Text c={"#495057"}>state : </Text>
                  <Text pl={3} c={"#5C7CFA"}>
                    {" "}
                    {orderInfo.state}
                  </Text>
                </div>{" "}
                <hr />
                <div className=" flex p-2">
                  <Text c={"#495057"}> ZIP : </Text>
                  <Text pl={3} c={"#5C7CFA"}>
                    {" "}
                    {orderInfo.zip}
                  </Text>
                </div>
                <hr />
                <div className=" flex p-2">
                  <Text c={"#495057"}> Price : </Text>
                  <Text pl={3} c={"#5C7CFA"}>
                    {" "}
                    {orderInfo.totalPrice}
                  </Text>
                </div>
                <hr />
                <Button type="submit" className={classes.place_order} w={"100%"} size="sm" mt={16} color="indigo">
                  proceed
                </Button>
              </div>
            </Text>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};

export default PlaceOrder;
