// import { Icon } from "@chakra-ui/react";
import {
//   Button,
//   Card,
  Container,
//   Grid,
//   Group,
//   Modal,
//   Progress,
  SimpleGrid,
//   Text,
//   createStyles,
} from "@mantine/core";
// import { useDisclosure } from "@mantine/hooks";

import { useEffect } from "react";
import { useState } from "react";
import BookingModal from "./BookingModal";
import Options from "./Options";
// const useStyles = createStyles((theme) => ({
//   card: {
//     backgroundColor: theme.fn.primaryColor(),
//   },

//   title: {
//     color: theme.fn.rgba(theme.white, 0.65),
//   },

//   stats: {
//     color: theme.white,
//   },

//   progressBar: {
//     color: "yellow",
//     border: "1px solid yellow",
//     // backgroundColor: theme.white,
//   },

//   progressTrack: {
//     backgroundColor: theme.fn.rgba(theme.white, 0.4),
//   },
// }));

export const TableOptions = () => {
  //   const [opened, { open, close }] = useDisclosure(false);
    // const { classes } = useStyles();
  const [availableTable, setAvailableTable] = useState([]);
  const [selectTable, setSelectTable] = useState({});
  console.log(selectTable);
  useEffect(() => {
    fetch("tabledata.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAvailableTable(data);
      });
  }, []);

  //  const  handleTableBooking

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
            <Options setSelectTable={setSelectTable} table={table}></Options>
          ))}
        </SimpleGrid>
        <BookingModal selectTable={selectTable}></BookingModal>
      </Container>
    </div>
  );
};
