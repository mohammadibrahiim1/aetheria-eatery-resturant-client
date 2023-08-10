import { Avatar, Indicator, Table, Text, createStyles } from "@mantine/core";
import { useContext } from "react";
import { ApiContext } from "../../Context/DataContext";
import { Link } from "react-router-dom";

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
      <th>
        <Text size={"md"} c={"indigo"} fw={600}>
          Index
        </Text>
      </th>
      <th>
        <Text size={"md"} c={"indigo"} fw={600}>
          Name
        </Text>
      </th>
      <th>
        <Text size={"md"} c={"indigo"} fw={600}>
          Items
        </Text>
      </th>
      <th>
        <Text size={"md"} c={"indigo"} fw={600}>
          Phone
        </Text>
      </th>
      <th>
        <Text size={"md"} c={"indigo"} fw={600}>
          Amount
        </Text>
      </th>
      <th>
        <Text size={"md"} c={"indigo"} fw={600}>
          Payment
        </Text>
      </th>
    </tr>
  );

  const rows = orders.map((order, i) => (
    <tr key={order.name}>
      <td>
        <Text size={"md"} c={"indigo"} fw={600}>
          {i + 1}
        </Text>
      </td>
      <td>
        <Text size={"md"} c={"indigo"} fw={600}>
          {order.name}
        </Text>
      </td>
      <td className="flex items-center gap-2">
        {order?.cart?.map((item) => (
          <div className="flex items-center gap-5">
            <Indicator inline label={item.quantity} color={"indigo"} size={16}>
              <Text size={"md"} c={"indigo"} fw={600}>
                {item.name}
              </Text>
            </Indicator>

            {/* <Text>{item.quantity}</Text> */}
          </div>
        ))}
      </td>
      <td>
        <Text size={"md"} c={"indigo"} fw={600}>
          {order.phone}
        </Text>
      </td>
      <td>
        <Text size={"md"} c={"indigo"} fw={600}>
          ${order.totalPrice}
        </Text>
      </td>
      <td>
        {/* {order.price && !order.paid && ( */}
        <Link to={`/payment/${order._id}`}>
          <button className="btn bg-lime-600 border-none ">Payment</button>
        </Link>
        {/* )} */}
        {/* {order.price && order.paid && <span className="btn bg-gray-400 border-none disabled text-white">Paid</span>} */}
      </td>
    </tr>
  ));

  return (
    <Table
      verticalSpacing="lg"
      captionSide="bottom"
      highlightOnHover
      withBorder
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
