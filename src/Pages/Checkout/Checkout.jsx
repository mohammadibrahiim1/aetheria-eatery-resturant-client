import {
  Button,
  Container,
  Tabs,
  Text,
  TextInput,
  createStyles,
  rem,
} from "@mantine/core";
import "react-phone-number-input/style.css";
import {
  IconAddressBook,
  IconBrandStripe,
  IconDeviceLandlinePhone,
  IconMailFilled,
  IconSignature,
  IconTruckDelivery,
} from "@tabler/icons-react";
import React, { useContext, useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
// import { Link } from "react-router-dom";
import {
  CardElement,
  useElements,
  useStripe,
  // totalPrice,
} from "@stripe/react-stripe-js";
import { ApiContext } from "../../Context/DataContext";
import { AuthContext } from "../../Context/UserContext";
// import { loadStripe } from "@stripe/stripe-js";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
    color: "#32C770",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  error: {
    color: "red",
    font: "sm",
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
  controls: {
    marginTop: `calc(${theme.spacing.xs}* 1.5)`,
  },
  control: {
    height: rem(32),
    fontSize: theme.fontSizes.sm,
    color: "#32C770",
    marginTop: "25px",
    width: "100%",
    border: "1px solid #32C770",
    ":hover": {
      backgroundColor: "#32C770",
      border: "1px solid #32C770",
      transition: "0.5s",
      color: "white",
    },

    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.xs,
    },
  },
  form: {
    width: "50%",
    margin: "auto",
    border: "1px solid #32C770",
    padding: "45px",
    borderRadius: "7px",
  },

  PhoneInput: {
    border: "1px solid #CED4DA",
    padding: "7px 0px 7px 7px",
    borderRadius: "3px",
  },

  input: {
    paddingBottom: "15px",
  },
}));

// const stripePromise = loadStripe(
//   "pk_test_51MlpzGLrYWLOOZ8UljA5X1ANJMi0EXPD3KZWZmLIjyuv5DQgLe3I2dZvA4TPFfa4n0opSlz0POZ3wbxzcy27Necr005pDnWQh8"
// );
// console.log(stripePromise);

// pk_test_51MlpzGLrYWLOOZ8UljA5X1ANJMi0EXPD3KZWZmLIjyuv5DQgLe3I2dZvA4TPFfa4n0opSlz0POZ3wbxzcy27Necr005pDnWQh8

const Checkout = () => {
  // const { checkoutInfo } = useContext(ApiContext);
  // console.log(checkoutInfo);
  // const { totalPrice } = checkoutInfo;
  const { user } = useContext(AuthContext);

  const stripe = useStripe();
  const elements = useElements();
  const { classes } = useStyles();
  const [value, setValue] = useState();
  const [cardError, setCardError] = useState("");

  const [clientSecret, setClientSecret] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState("");
  const [processing, setProccesing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:5000/create-payment-intent", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       totalPrice,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setClientSecret(data.clientSecret);
  //     });
  // }, []);
  // create function for stripe data
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const card = elements.getElement(CardElement);
  //   const form = event.target;
  //   // const email = form.email.value;
  //   // const name = form.name.value;
  //   const phone = form.phone.value;
  //   const address = form.address.value;
  //   console.log(phone, address);

  //   if (!stripe || !elements) {
  //     return;
  //   }

  //   if (card === null) {
  //     return;
  //   }
  //   const { error, paymentMethod } = await stripe.createPaymentMethod({
  //     type: "card",
  //     card,
  //   });
  //   console.log(card);
  //   if (error) {
  //     console.log(error);
  //     setCardError(error.message);
  //   } else {
  //     console.log("paymentMethod", paymentMethod);
  //     setCardError("");
  //   }
  //   setProccesing(true);
  //   setPaymentSuccess("");

  //   const { paymentIntent, error: confirmError } =
  //   await stripe.confirmCardPayment(
  //       clientSecret,

  //       {
  //         payment_method: {
  //           card: card,
  //           billing_details: {
  //             name: user.name,
  //             email: user.email,
  //             // phone,
  //             // address,
  //           },
  //         },
  //       }
  //     );

  //   if (confirmError) {
  //     setCardError(confirmError.message);
  //     return;
  //   }
  //   if (paymentIntent.status === "succeeded") {
  //     console.log("card info", card);
  //     const payment = {
  //       totalPrice,
  //       transactionId: paymentIntent.id,
  //       email: user.email,
  //       name: user.name,
  //       phone: phone,
  //       address: address,
  //     };
  //     // console.log(paymentInfo);
  //     fetch("http://localhost:5000/payments", {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(payment),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         if (data.insertedId) {
  //           setPaymentSuccess("congrats! your payment completed");
  //           setTransactionId(paymentIntent.id);
  //           // nabigate('/cart')
  //           window.location.reload();
  //         }
  //       });
  //   }
  //   setProccesing(false);
  // };
  return (
    <div>
      <Container className="py-28">
        <div className={classes.form}>
          <form
            action=""
            // onSubmit={handleSubmit}
          >
            <div className="pb-8 ">
              <Text className={classes.title}>
                {" "}
                <p>Payment</p>
                {/* <p>total amount : ${totalPrice} </p> */}
              </Text>
              <hr />
            </div>
            <div className={classes.input}>
              <TextInput
                type="text"
                id="name"
                withAsterisk
                icon={<IconSignature />}
                label="Your Name"
                defaultValue={user.displayName}
                required
              />
            </div>
            <div className={classes.input}>
              <TextInput
                type="email"
                id="email"
                withAsterisk
                icon={<IconMailFilled />}
                label="Your Email"
                defaultValue={user.email}
                required
              />
            </div>
            <label htmlFor="">Phone</label>
            <div className={classes.input}>
              <PhoneInput
                className={classes.PhoneInput}
                icon={<IconDeviceLandlinePhone />}
                value={value}
                type="phone"
                id="phone"
                onChange={setValue}
                defaultCountry="BD"
                required
              />
            </div>
            <div className={classes.input}>
              <TextInput
                type="text"
                id="address"
                icon={<IconAddressBook />}
                withAsterisk
                label="Your Address"
                required
              />
            </div>

            <div>
              <Tabs color="teal" defaultValue="gallery">
                <Tabs.List>
                  <Tabs.Tab
                    value="gallery"
                    icon={<IconTruckDelivery size="0.8rem" />}
                  >
                    cash on delivery
                  </Tabs.Tab>
                  <Tabs.Tab
                    value="messages"
                    icon={<IconBrandStripe size="0.8rem" />}
                  >
                    Strip
                  </Tabs.Tab>
                  {/* <Tabs.Tab
                    value="settings"
                    icon={<IconSettings size="0.8rem" />}
                  >
                    Settings
                  </Tabs.Tab> */}
                </Tabs.List>

                <Tabs.Panel value="gallery" pt="xs">
                  {/* Gallery tab content */}
                </Tabs.Panel>

                <Tabs.Panel value="messages" pt="sm">
                  <CardElement
                    options={{
                      style: {
                        base: {
                          fontSize: "15px",
                          color: "#424770",
                          "::placeholder": {
                            color: "#aab7c4",
                          },
                        },
                        invalid: {
                          color: "#9e2146",
                        },
                      },
                    }}
                  />
                </Tabs.Panel>
                {/* 
                <Tabs.Panel value="settings" pt="xs">
                  Settings tab content
                </Tabs.Panel> */}
              </Tabs>
            </div>

            <p className={classes.error}>{cardError}</p>

            <div position="center" className={classes.controls}>
              <Button
                type="submit"
                // disabled={!stripe || !clientSecret || !processing}
                compact
                className={classes.control}
                size="xs"
              >
                Confirm
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
