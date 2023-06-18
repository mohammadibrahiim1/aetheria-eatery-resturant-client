import { Grid } from "@mantine/core";
// import { DatePicker } from "antd";
import React from "react";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { useContext } from "react";
import { ApiContext } from "../../Context/DataContext";
// import { useState } from "react";

const AvailableTables = () => {
  //   const [value, setValue] = (useState < Date) | (null > null);
  const { selectDate, setSelectDate } = useContext(ApiContext);

  const date = format(selectDate, "PP");
  return (
    <div>
      <div className="text-center py-8">Available table on {date}</div>
      <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
        <Grid.Col span={6}>
          <ReactDatePicker selected={selectDate} onChange={setSelectDate} />
        </Grid.Col>
        <Grid.Col span={6}>2</Grid.Col>
        {/* <Grid.Col span={4}>3</Grid.Col> */}
      </Grid>
    </div>
  );
};

export default AvailableTables;
