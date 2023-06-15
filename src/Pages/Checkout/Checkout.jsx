import {
  Container,
  Input,
  NumberInput,
  TextInput,
  createStyles,
  rem,
} from "@mantine/core";
import "react-phone-number-input/style.css";
import { IconAt } from "@tabler/icons-react";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";

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
    marginTop: `calc(${theme.spacing.xs}* 1.5)`,
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
    height: rem(32),
    fontSize: theme.fontSizes.sm,
    color: "#B70C1C",
    width: "100%",
    border: "1px solid red",
    ":hover": {
      backgroundColor: "red",
      border: "1px solid red",
      transition: "0.5s",
      color: "white",
    },

    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.xs,
    },

    // [theme.fn.smallerThan("xs")]: {
    //   "&:not(:first-of-type)": {
    //     marginTop: theme.spacing.md,
    //     marginLeft: 0,
    //   },
    // },
  },
  form: {
    width: "50%",
    margin: "auto",
  },

  PhoneInput: {
    border: "1px solid #CED4DA",
    padding: "7px 0px 7px 7px",
    borderRadius: "3px",
  },
}));

const Checkout = () => {
  const { classes } = useStyles();
  const [value, setValue] = useState();
  return (
    <div>
      <Container>
        <div className={classes.form}>
          <form
            action="
        "
          >
            <div>
              <TextInput
                type="text"
                withAsterisk
                icon={<IconAt />}
                placeholder="Your Name"
                label="Your Name"
              />
            </div>
            <div>
              <TextInput
                type="email"
                withAsterisk
                icon={<IconAt />}
                placeholder="Your email"
                label="Your Email"
              />
            </div>
            <label htmlFor="">Phone</label>
            <div className={classes.PhoneInput}>
              <PhoneInput
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
                defaultCountry="BD"
                required
              />
            </div>
            <div>
              <TextInput
                type="text"
                icon={<IconAt />}
                withAsterisk
                placeholder="Your Address"
                label="Your Address"
              />
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
