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
    // paddingTop: "50px",
    // paddingBottom: "50px",
    // border: "1px solid gray",
    // borderRadius: "15px",
  },
  payment_method: {
    border: "1px solid gray",
    borderRadius: "15px",
    // padding: "20px",
  },
  paymentCard: {
    border: "1px solid gray",
    borderRadius: "15px",
    // width: '90%'
    // padding: "20px",
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
        <Grid className="py-8 ">
          <Grid.Col sm={12} xs={12} lg={8} className={classes.payment_method}>
            <p
            // class={classes.heading}
            >
              Select payment method
            </p>
            <div class="mt-4">
              <PaymentSavedCart></PaymentSavedCart>
            </div>

            <p
            //  class={classes.paymentCard_heading}
            >
              New payment method
            </p>
          </Grid.Col>
          <Grid.Col sm={12} xs={12} lg={1}></Grid.Col>
          <Grid.Col sm={12} xs={12} lg={3} class={classes.paymentCard}>
            {/* <div> */}
            <p
            // class={classes.heading}
            >
              Payment Details
            </p>
            <p class="">
              Complete your order by providing your payment details.
            </p>
            <div class="">
              <label for="email">Email</label>
              <div class="relative">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="your.email@gmail.com"
                />
              </div>

              <div>
                <PaymentCard></PaymentCard>
              </div>
            </div>
          </Grid.Col>
        </Grid>
      </section>
    </div>
  );
};

export default Checkout;
