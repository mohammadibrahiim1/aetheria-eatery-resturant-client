import { Grid, createStyles } from "@mantine/core";
// import { theme } from "antd";
import React from "react";
import PaymentSavedCart from "../../Components/PaymentSavedCart";
import PaymentCard from "../../Components/PaymentCard";
// import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  section: {
    width: "60%",
    margin: "auto",
    paddingTop: "50px",
    paddingBottom: "50px",
  },
  payment_method: {
    border: "1px solid gray",
    // opacity: "0.7",
    borderRadius: "15px",
    padding: "20px",
  },
  paymentCard: {
    border: "1px solid gray",
    // opacity: "0.7",
    borderRadius: "15px",
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
  const { classes } = useStyles();
  return (
    <div>
      <section className={classes.section}>
        <Grid>
          <Grid.Col md={6} lg={8} className={classes.payment_method}>
            <p class={classes.heading}>Select payment method</p>
            {/* <p class="text-gray-400">
              Check your items. And select a suitable shipping method.
            </p> */}
            <div class="mt-4">
              <PaymentSavedCart></PaymentSavedCart>
            </div>

            <p class={classes.paymentCard_heading}>New payment method</p>
          </Grid.Col>
          <Grid.Col md={6} lg={0.5}></Grid.Col>
          <Grid.Col md={6} lg={3.5} class={classes.paymentCard}>
            <div>
              <p class={classes.heading}>Payment Details</p>
              <p class="text-gray-400">
                Complete your order by providing your payment details.
              </p>
              <div class="">
                <label for="email" class="mt-4 mb-2 block text-sm font-medium">
                  Email
                </label>
                <div class="relative">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="your.email@gmail.com"
                  />
                  <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </div>
                </div>

                <div>
                  <PaymentCard></PaymentCard>
                </div>
              </div>
            </div>
          </Grid.Col>
        </Grid>
      </section>
    </div>
  );
};

export default Checkout;
