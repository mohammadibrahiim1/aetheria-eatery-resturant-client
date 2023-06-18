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
import { useQuery } from "@tanstack/react-query";
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
//   const [availableTable, setAvailableTable] = useState([]);
  const [selectTable, setSelectTable] = useState({});
  console.log(selectTable);
  const { data: bookingOptions = [], isLoading } = useQuery({
    queryKey: ["bookingOptions"],
    queryFn: () =>
      fetch("http://localhost:5000/v2/bookingOptions").then((res) =>
        res.json()
      ),
  });
  //   useEffect(() => {

  //       .then((data) => {
  //         // console.log(data);
  //         setAvailableTable(data);
  //       });
  //   }, []);

  //  const  handleTableBooking

  return (
    <div>
      {bookingOptions.length}
      <Container>
        <SimpleGrid
          cols={3}
          breakpoints={[
            { maxWidth: "sm", cols: 1 },
            { maxWidth: "md", cols: 2 },
          ]}
        >
          {bookingOptions.map((option) => (
            <Options setSelectTable={setSelectTable} option={option}></Options>
          ))}
        </SimpleGrid>
        {selectTable && (
          <BookingModal
            setSelectTable={setSelectTable}
            selectTable={selectTable}
          ></BookingModal>
        )}
      </Container>
    </div>
  );
};
