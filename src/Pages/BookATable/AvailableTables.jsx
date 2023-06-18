import {
  Container,
  Grid,
  SimpleGrid,
  Text,
  Title,
  createStyles,
  rem,
} from "@mantine/core";
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
    fontWeight: 800,
    fontSize: rem(17),
    // letterSpacing: rem(-1),
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    // color: "light",
    marginBottom: theme.spacing.xs,
    textAlign: "center",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(15),
      textAlign: "left",
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
    height: rem(42),
    fontSize: theme.fontSizes.md,

    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan("xs")]: {
      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
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
      <Container>
        {" "}
        <SimpleGrid
          cols={2}
          breakpoints={[
            { maxWidth: "sm", cols: 1 },
            { maxWidth: "md", cols: 2 },
          ]}
        >
          {/* <Grid.Col span={5}> */}
          <ReactDatePicker
            span={6}
            mode="single"
            selected={selectDate}
            onChange={setSelectDate}
          />
          {/* </Grid.Col> */}
          {/* <Grid.Col span={6}> */}
          <Text
            span={6}
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan", deg: 45 }}
            className={classes.title}
          >
            {" "}
            <div className="text-center">Available tables on {date}</div>
          </Text>
          {/* </Grid.Col> */}
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default AvailableTables;
