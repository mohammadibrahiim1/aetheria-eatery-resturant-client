// import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../Context/UserContext";
import axios from "axios";
import { createStyles, rem } from "@mantine/core";
import { Button } from "antd";
import { Link } from "react-router-dom";
// import { toast } from "react-hot-toast";
const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
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
    // marginTop: theme.spacing.xs,
    textTransform: "uppercase",
    textAlign: "center",
    // paddingBottom: theme.spacing.sm,
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
    // marginTop: `calc(${theme.spacing.xs}* 1.5)`,

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
    height: rem(32),
    // fontSize: theme.fontSizes.sm,
    color: "#B70C1C",
    marginTop: "12px",
    width: "100%",
    border: "1px solid red",
    ":hover": {
      backgroundColor: "red",
      border: "1px solid red !important",
      transition: "0.5s",
      color: "white !important",
    },

    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.xs,
    },

    [theme.fn.smallerThan("xs")]: {
      "&:not(:first-of-type)": {
        // marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}));
const PaymentButton = ({ cart }) => {
  const { classes } = useStyles();
  const { user } = useContext(AuthContext);
  // const url = "   http://localhost:5000";
  // console.log(user);
  const handleCheckout = () => {
    console.log(cart);
    axios
      .post(`http://localhost:5000/stripe/create-checkout-session`, {
        cart,
        userId: user._id,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div>
      <div
        onClick={() => handleCheckout()}
        to="/shop"
        position="center"
        className={classes.controls}
      >
        <Button compact className={classes.control} size="xs">
          Checkout
        </Button>
      </div>
      <Link to="/shop" position="center" className={classes.controls}>
        <Button compact className={classes.control} size="xs">
          Add more items
        </Button>
      </Link>
    </div>
  );
};

export default PaymentButton;
