import React from "react";
import { useContext } from "react";
import { ApiContext } from "../../Context/DataContext";

const AllBookings = () => {
  const { users } = useContext(ApiContext);
  return (
    <div>
      user bookings data
      <p>{users.length}</p>
    </div>
  );
};

export default AllBookings;
