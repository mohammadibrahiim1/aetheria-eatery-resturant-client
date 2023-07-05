import React from "react";
import { useContext } from "react";
import { ApiContext } from "../../Context/DataContext";
import { Table } from "@mantine/core";
// import { useQuery } from "@tanstack/react-query";

const AllBookings = () => {
  const { booking } = useContext(ApiContext);
  // const { data: booking = [] } = useQuery({
  //   queryKey: ["users"],
  //   queryFn: async () => {
  //     const res = await fetch(`  http://localhost:5000 /bookings`);
  //     const data = await res.json();
  //     console.log(data);
  //     return data;
  //   },
  // });
  const rows = booking.map((book, i) => (
    <tr key={book._id}>
      {/* <td>
        <img
          src={book.image}
          alt=""
          srcset=""
          className="h-12 w-12 rounded-full"
        />
      </td> */}
      <td>{i + 1}</td>
      <td>{book.table}</td>
      <td>{book.name}</td>
      <td>{book.email}</td>
      <td>{book.phone}</td>
      <td>{book.bookingDate}</td>
      <td>{book.slot}</td>
      {/* <td className=" btn btn-error btn-sm my-2">delete</td> */}
    </tr>
  ));

  return (
    <div>
      <p className="text-center"> See All booking data</p>
      <p className="text-center">
        Total <span className="text-error"> {booking.length}</span> bookings
      </p>
      <Table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Table</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Booking date</th>
            <th>Slot</th>

            {/* <th>image</th> */}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
};

export default AllBookings;
