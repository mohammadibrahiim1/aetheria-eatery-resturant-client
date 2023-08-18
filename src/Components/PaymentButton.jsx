// import axios from "axios";
import React from "react";
// import { AuthContext } from "../Context/UserContext";
// import axios from "axios";
import { createStyles, rem } from "@mantine/core";
import { Button } from "antd";
import { Link } from "react-router-dom";

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
