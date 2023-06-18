import React from "react";
import AvailableTables from "./AvailableTables";
import BookATableBanner from "./BookATableBanner";
import { TableOptions } from "./TableOptions";

const BookATable = () => {
  
  return (
    <div>
      <BookATableBanner></BookATableBanner>
      <AvailableTables></AvailableTables>
      <TableOptions></TableOptions>
    </div>
  );
};

export default BookATable;
