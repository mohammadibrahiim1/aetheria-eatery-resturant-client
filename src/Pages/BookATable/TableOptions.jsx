// import { Icon } from "@chakra-ui/react";
import {
  Button,
  Card,
  Container,
  Grid,
  Progress,
  SimpleGrid,
  Text,
  createStyles,
} from "@mantine/core";

import { useEffect } from "react";
import { useState } from "react";
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
    // backgroundColor: theme.white,
  },

  progressTrack: {
    backgroundColor: theme.fn.rgba(theme.white, 0.4),
  },
}));

export const TableOptions = () => {
  const { classes } = useStyles();
  const [availableTable, setAvailableTable] = useState([]);
  useEffect(() => {
    fetch("tabledata.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAvailableTable(data);
      });
  }, []);

  return (
    <div>
      {availableTable.length}
      <Container>
        <SimpleGrid
          cols={3}
          breakpoints={[
            { maxWidth: "sm", cols: 1 },
            { maxWidth: "md", cols: 2 },
          ]}
        >
          {availableTable.map((table) => (
            <div>
              {/* const {(name, slots)}= table */}
              {/* <Grid.Col span={12}> */}{" "}
              <Card withBorder radius="md" p="xl" className={classes.card}>
                <Text fz="xs" tt="uppercase" fw={700} className={classes.title}>
                  {table.name}
                </Text>
                <Text fz="lg" fw={500} className={classes.stats}>
                  {table.slots.length > 0 ? table.slots[0] : "try another day"}
                </Text>
                <Text fz="lg" fw={500} className={classes.stats}>
                  Available free spaces : {table.slots.length}
                </Text>

                <Button className={classes.progressBar} variant="light">
                  Book A Table
                </Button>
              </Card>
            </div>
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
};
