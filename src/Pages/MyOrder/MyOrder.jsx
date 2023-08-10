import { Table, Text, createStyles } from "@mantine/core";
import { useContext } from "react";
import { ApiContext } from "../../Context/DataContext";

const useStyles = createStyles({
  table: {
    width: "80%",
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
  console.log(orders);
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
      <th> Name</th>
      <th>items</th>
      <th>Phone</th>
      <th>Amount</th>
      <th>payment</th>
    </tr>
  );

  const rows = orders.map((order) => (
    <tr key={order.name}>
      <td>{order._id ? order._id : "no order id"}</td>
      <td>{order.name}</td>
      <td className="flex items-center gap-2">
        {order?.cart?.map((item) => (
          <div className="flex items-center gap-2">
            <Text>{item.name}</Text>
            <Text>{item.quantity}</Text>
          </div>
        ))}
      </td>
      <td>{order.phone}</td>
      <td>${order.totalPrice}</td>
      <td className="btn btn-accent "> payment</td>
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
