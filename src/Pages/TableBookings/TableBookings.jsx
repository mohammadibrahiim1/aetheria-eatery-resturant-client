import React from "react";
import { useContext } from "react";
import { ApiContext } from "../../Context/DataContext";
import {  Table, Text, createStyles } from "@mantine/core";

// import { useQuery } from "@tanstack/react-query";
const useStyles = createStyles(() => ({
  table: {
    width: "100%",
    margin: "auto",
  },
}));

const TableBookings = () => {
  const { classes } = useStyles();
  const { booking } = useContext(ApiContext);
  console.log(booking);
  // const { data: booking = [] } = useQuery({
  //   queryKey: ["bookings"],
  //   queryFn: async () => {
  //     const res = await fetch(`   http://localhost:5000   /bookings`);
  //     const data = await res.json();
  //     console.log(data);
  //     return data;
  //   },
  // });
  // const rows = booking.map((book, i) => (
  //   <tr key={book._id}>
  //     {/* <td>
  //       <img
  //         src={book.image}
  //         alt=""
  //         srcset=""
  //         className="h-12 w-12 rounded-full"
  //       />
  //     </td> */}
  //     <td>{i + 1}</td>
  //     <td>{book.table}</td>
  //     <td>{book.name}</td>
  //     <td>{book.email}</td>
  //     <td>{book.phone}</td>
  //     <td>{book.bookingDate}</td>
  //     <td>{book.slot}</td>
  //     {/* <td className=" btn btn-error btn-sm my-2">delete</td> */}
  //   </tr>
  // ));
  const rows = booking.map((book, i) => (
    <tr className="text-center" key={book._id}>
      <td>
        <Text fw={700} c={"green"}>
          {i + 1}
        </Text>
      </td>
      <td>
        <Text fw={700} c={"teal"}>
          {book.table}
        </Text>
      </td>
      <td>
        <Text fw={700} c={"indigo"} tt={"capitalize"}>
          {book.name}
        </Text>
      </td>
      <td>
        <Text fw={700} c={"cyan"}>
          {book.email}
        </Text>
      </td>
      <td>
        <Text fw={700} c={"#A953FF"}>
          {book.phone}
        </Text>
      </td>
      <td>
        <Text fw={700} c={"orange"}>
          {book.bookingDate}
        </Text>
      </td>
      <td>
        <Text fw={700} c={"red"}>
          {book.slot}
        </Text>
      </td>
    </tr>
  ));

  const ths = (
    <tr className="bg-[#F7F7F9]  ">
      <th>
        <Text align="center" size={"sm"} c={"indigo"} fw={600}>
          Index
        </Text>
      </th>

      <th>
        <Text align="center" size={"sm"} c={"indigo"} fw={600}>
          Table position
        </Text>
      </th>
      <th>
        <Text align="center" size={"sm"} c={"indigo"} fw={600}>
          Name
        </Text>
      </th>
      <th>
        <Text align="center" size={"sm"} c={"indigo"} fw={600}>
          Email
        </Text>
      </th>
      <th>
        <Text align="center" size={"sm"} c={"indigo"} fw={600}>
          Phone
        </Text>
      </th>
      <th>
        <Text align="center" size={"sm"} c={"indigo"} fw={600}>
          Booking Date
        </Text>
      </th>
      <th>
        <Text align="center" size={"sm"} c={"indigo"} fw={600}>
          Slot
        </Text>
      </th>
    </tr>
  );

  return (
    <div>
      <Text c={"indigo"} fz={18} fw={700} py={12}>
        Table Bookings information
      </Text>

      <Table
        verticalSpacing="md"
        horizontalSpacing={"xl"}
        mb={194}
        captionSide="bottom"
        withBorder
        fontSize="sm"
        fw={600}
        radius="xl"
        className={classes.table}
      >
        <thead>{ths}</thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
};

export default TableBookings;
