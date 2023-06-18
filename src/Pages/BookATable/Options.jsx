import { Button, Card, Text, createStyles } from "@mantine/core";
import React from "react";
const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.fn.primaryColor(),
  },

  title: {
    color: theme.fn.rgba(theme.white, 0.65),
  },

  stats: {
    color: theme.white,
  },

  progressBar: {
    color: "yellow",
    border: "1px solid yellow",
    padding: "5px",
    marginTop: "12px",
    borderRadius: "4px",
    cursor: "pointer",
    // backgroundColor: theme.white,
  },

  progressTrack: {
    backgroundColor: theme.fn.rgba(theme.white, 0.4),
  },
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
        <div className="mt-8">
          <label
            disabled={slots.length === 0}
            htmlFor="booking-modal"
            className={classes.progressBar}
            onClick={() => setSelectTable(option)}
          >
            Book A Table
          </label>
        </div>
        {/* </Button> */}
      </Card>
    </div>
  );
};

export default Options;
