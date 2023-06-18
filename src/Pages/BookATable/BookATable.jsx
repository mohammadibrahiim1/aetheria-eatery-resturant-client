import React from "react";
import AvailableTables from "./AvailableTables";
import BookATableBanner from "./BookATableBanner";
import { TableOptions } from "./TableOptions";
import BookingModal from "./BookingModal";

const BookATable = () => {
  return (
    <div>
      <BookATableBanner></BookATableBanner>
      <AvailableTables></AvailableTables>
      <TableOptions></TableOptions>
      {/* <BookingModal></BookingModal> */}
    </div>
  );
};

export default BookATable;
