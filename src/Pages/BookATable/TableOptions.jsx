import { Container, SimpleGrid } from "@mantine/core";

import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { useContext, useState } from "react";
import { ApiContext } from "../../Context/DataContext";
import BookingModal from "./BookingModal";
import Options from "./Options";

export const TableOptions = () => {
  const { selectDate } = useContext(ApiContext);

  const date = format(selectDate, "PP");

  const [selectTable, setSelectTable] = useState({});
  console.log(selectTable);

  const { data: bookingOptions = [], refetch } = useQuery({
    queryKey: ["bookingOptions", date],
    queryFn: async () => {
      const res = await fetch(`https://resturant-website-server.vercel.app/bookingOptions?date=${date}`);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <Container size={"lg"} className="">
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
          <BookingModal setSelectTable={setSelectTable} selectTable={selectTable} refetch={refetch}></BookingModal>
        )}
      </Container>
    </div>
  );
};
