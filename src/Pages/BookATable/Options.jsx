import { Button, Card, Text, createStyles, rem } from "@mantine/core";
import React from "react";
const useStyles = createStyles((theme) => ({
  card: {
    backgroundImage: theme.fn.gradient({ from: "#6677f4", to: "#4E60FF", deg: -60 }),
    color: theme.white,
    // backgroundImage: `linear-gradient(-60deg, ${
    //   theme.colors[theme.primaryColor][7]
    // } 0%, ${theme.colors[theme.primaryColor][7]} 100%)`,
  },

  title: {
    color: theme.fn.rgba(theme.white, 0.65),
  },

  stats: {
    color: theme.white,
  },

  progressBar: {
    color: "white",
    border: "1px solid red",
    padding: "5px",
    marginTop: "12px",
    borderRadius: "4px",
    cursor: "pointer",
    // backgroundImage: `linear-gradient(-60deg, ${
    //   theme.colors[theme.primaryColor][4]
    // } 0%, ${theme.colors[theme.primaryColor][7]} 100%)`,
    // backgroundColor: theme.white,
  },

  progressTrack: {
    backgroundColor: theme.fn.rgba(theme.white, 0.4),
  },

  controls: {
    // marginTop: `calc(${theme.spacing.xs}* 1.5)`,

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingLeft: theme.spacing.xs,
    // marginLeft: theme.spacing.md,

    [theme.fn.smallerThan("xs")]: {
      // flexDirection: "column",
    },
  },

  // control: {
  //   height: rem(32),
  //   fontSize: theme.fontSizes.sm,
  //   color: "White",
  //   marginTop: "12px",
  //   padding: "6px",
  //   // width: "100%",
  //   border: "1px solid #1C7ED6",
  //   borderRadius: "5px",
  //   ":hover": {
  //     backgroundColor: "White",
  //     border: "1px solid #4c6ef5 !important",
  //     transition: "0.5s",
  //     color: "#4c6ef5 !important",
  //     cursor: "pointer",
  //   },
  // },
}));
const Options = ({ option, setSelectTable }) => {
  const { classes } = useStyles();
  const { name, slots } = option;
  return (
    <div>
      <Card withBorder radius="md" p="xl" className={classes.card}>
        <Text fz="xs" tt="uppercase" fw={700} className={classes.title}>
          {name}
        </Text>
        <Text fz="lg" fw={500} className={classes.stats}>
          {slots.length > 0 ? slots[0] : "try another day"}
        </Text>
        <Text fz="lg" fw={500} className={classes.stats}>
          Available free spaces : {slots.length}
        </Text>

        {/* <Button> */}
        <div className={classes.controls}>
          <label
            disabled={slots.length === 0}
            htmlFor="booking-modal"
            className="btn btn-md mt-5 "
            onClick={() => setSelectTable(option)}
          >
            Book A Table
          </label>
        </div>
      </Card>
    </div>
  );
};

export default Options;
