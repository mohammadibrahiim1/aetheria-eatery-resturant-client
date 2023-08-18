// import axios from "axios";
import React from "react";
// import { AuthContext } from "../Context/UserContext";
// import axios from "axios";
import { createStyles, rem } from "@mantine/core";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ApiContext } from "../Context/DataContext";
// import { toast } from "react-hot-toast";
const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
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
    // height: rem(32),
    // fontSize: theme.fontSizes.sm,
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
        // marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
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
const PaymentButton = () => {
  const { classes } = useStyles();
  // const { cart } = useContext(ApiContext);
  // const url = "   http://localhost:5000   ";
  // console.log(user);

  return (
    <div className="mt-5">
      <div>
        <Link to="/checkout">
          <Button className={classes.control} size="md">
            Proceed to checkout
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentButton;
