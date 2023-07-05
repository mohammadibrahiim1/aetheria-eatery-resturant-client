import { Table, createStyles } from "@mantine/core";
import { useContext } from "react";
import { ApiContext } from "../../Context/DataContext";

const useStyles = createStyles({
  table: {
    width: "60%",
    margin: "auto",
    marginTop: "50px",
    marginBottom: "50px",
    // border: "1px solid gray",
    // borderRadius: "20px",
  },
});

const MyOrder = () => {
  const { classes } = useStyles();
  const { orders } = useContext(ApiContext);
  //   const orders = [
  //     { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
  //     { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  //     { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  //     { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  //     { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
  //   ];
  const ths = (
    <tr className="bg-[#F7F7F9]">
      <th>Order ID</th>
      <th>Customer Name</th>
      <th>Customer Email</th>
      <th>Total Amount</th>
    </tr>
  );

  const rows = orders.map((order) => (
    <tr key={order.name}>
      <td>{order.orderId ? order.orderId : "no order id"}</td>
      <td>{order.name}</td>
      <td>{order.email}</td>
      <td>${order.price}</td>
    </tr>
  ));

  return (
    <Table
      captionSide="bottom"
      highlightOnHover
      withBorder
      verticalSpacing="sm"
      fontSize="md"
      radius="lg"
      className={classes.table}
    >
      {/* <caption>Some orders from periodic table</caption> */}
      <thead>{ths}</thead>
      <tbody>{rows}</tbody>
      {/* <tfoot>{ths}</tfoot> */}
    </Table>
  );
};

export default MyOrder;
