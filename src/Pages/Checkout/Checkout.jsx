import { Grid, Input, createStyles } from "@mantine/core";
// import { theme } from "antd";
import React from "react";
import PaymentSavedCart from "../../Components/PaymentSavedCart";
import PaymentCard from "../../Components/PaymentCard";
import { IconAt, IconPhone, IconWriting } from "@tabler/icons-react";
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
  const { classes } = useStyles();
  return (
    <div>
      <Grid className={classes.section}>
        <Grid.Col sm={12} xs={12} lg={8}>
          <div className={classes.payment_method}>
            <p class={classes.heading}>Select payment method</p>
            <div class="mt-4">
              <PaymentSavedCart></PaymentSavedCart>
            </div>

            <p class={classes.paymentCard_heading}>New payment method</p>
          </div>
        </Grid.Col>
        {/* <Grid.Col sm={12} xs={12} lg={0.5}></Grid.Col> */}
        <Grid.Col sm={12} xs={12} lg={4}>
          <div class={classes.paymentCard}>
            <p class={classes.heading}>Payment Details</p>
            <p class="">
              Complete your order by providing your payment details.
            </p>
            <div class="mt-5">
              <label for="email">Name</label>
              <div class="relative">
                <Input
                  mt={4}
                  type="text"
                  id="name"
                  name="name"
                  icon={<IconWriting />}
                  placeholder="Your Name"
                />
                {/* <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="your.email@gmail.com"

                /> */}
              </div>
              <label for="email">Email</label>
              <div class="relative">
                <Input
                  mt={4}
                  type="email"
                  id="email"
                  name="email"
                  icon={<IconAt />}
                  placeholder="Your email"
                />
                {/* <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="your.email@gmail.com"

                /> */}
              </div>
              <label for="email">Phone</label>
              <div class="relative">
                <Input
                  mt={4}
                  type="phone"
                  id="phone"
                  name="phone"
                  icon={<IconPhone />}
                  placeholder="Your phone"
                />
                {/* <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="your.email@gmail.com"

                /> */}
              </div>

              <div>
                <PaymentCard></PaymentCard>
              </div>
            </div>
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default Checkout;
