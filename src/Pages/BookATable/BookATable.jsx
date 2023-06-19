import React from "react";
import AvailableTables from "./AvailableTables";
import BookATableBanner from "./BookATableBanner";
import { TableOptions } from "./TableOptions";
import Contact from "../../Components/Contact";

const BookATable = () => {
  return (
    <div>
      <BookATableBanner></BookATableBanner>
      <AvailableTables></AvailableTables>
      <TableOptions></TableOptions>
      <Contact></Contact>
    </div>
  );
};

export default BookATable;
