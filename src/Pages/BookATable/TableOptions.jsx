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

// import { useEffect } from "react";
import { useState } from "react";
import BookingModal from "./BookingModal";
import Options from "./Options";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { ApiContext } from "../../Context/DataContext";
import { format } from "date-fns";
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
  const { selectDate } = useContext(ApiContext);

  const date = format(selectDate, "PP");
  //   const [opened, { open, close }] = useDisclosure(false);
  // const { classes } = useStyles();
  //   const [availableTable, setAvailableTable] = useState([]);
  const [selectTable, setSelectTable] = useState({});
  console.log(selectTable);

  const { data: bookingOptions = [], refetch } = useQuery({
    queryKey: ["bookingOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/bookingOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      {/* {bookingOptions.length} */}
      <Container className="py-28">
        <p className="pb-5 text-xl text-accent text-center font-semibold">
          Book your desire Table
        </p>
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
            refetch={refetch}
          ></BookingModal>
        )}
      </Container>
    </div>
  );
};
