import { Container, Grid, SimpleGrid, Text, Title, createStyles, rem } from "@mantine/core";
// import { DatePicker } from "antd";
import React from "react";

import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { useContext } from "react";
import { ApiContext } from "../../Context/DataContext";
// import { useState } from "react";
const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: rem(180),
    paddingBottom: rem(130),
    backgroundImage: "url(https://i.ibb.co/bzvJrdx/img.webp)",
    backgroundSize: "cover",
    backgroundPosition: "center",

    [theme.fn.smallerThan("xs")]: {
      paddingTop: rem(80),
      paddingBottom: rem(50),
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  title: {
    fontWeight: 700,
    fontSize: rem(17),

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(15),
      textAlign: "center",
    },
    [theme.fn.smallerThan("lg")]: {
      fontSize: rem(15),
      textAlign: "center",
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: "center",

    [theme.fn.smallerThan("xs")]: {
      fontSize: theme.fontSizes.md,
      textAlign: "left",
    },
  },

  input: {
    border: "1px solid #4C6EF5",
    padding: "3px",
    borderRadius: "3px",
    // marginTop: "15px",
    textAlign: "center",
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    display: "flex",
    justifyContent: "center",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  control: {
    textAlign: "center",
    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(15),
      textAlign: "left",
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: "rgba(255, 255, 255, .4)",

    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, .45) !important",
    },
  },
}));

const AvailableTables = () => {
  const { classes, cx } = useStyles();
  //   const [value, setValue] = (useState < Date) | (null > null);
  const { selectDate, setSelectDate } = useContext(ApiContext);

  const date = format(selectDate, "PP");
  return (
    <div>
      <Container size={"lg"} className="">
        <Text className="pb-5 text-2xl text-indigo-500 text-center font-semibold capitalize" py={22}>
          Book your desire Table
        </Text>
        <SimpleGrid
        p={12}
          cols={2}
          breakpoints={[
            { maxWidth: "sm", cols: 1 },
            { maxWidth: "md", cols: 1 },
          ]}
          className="py-5"
        >
          {/* <Grid.Col md={6} lg={6}> */}
          <Text c={"indigo"} className={classes.title}>
            <div>Available tables on {date}</div>
          </Text>
          {/* </Grid.Col> */}
          {/* <Grid.Col md={6} lg={6}> */}
          <Text c={"indigo"} align="right" className={classes.title}>
            Select Your Booking Date :{" "}
            <ReactDatePicker
              className={classes.input}
              mode="single"
              selected={selectDate}
              onChange={setSelectDate}
              dateFormat={"PP"}
            />
          </Text>
          {/* </Grid.Col> */}
        </SimpleGrid>{" "}
      </Container>
    </div>
  );
};

export default AvailableTables;
