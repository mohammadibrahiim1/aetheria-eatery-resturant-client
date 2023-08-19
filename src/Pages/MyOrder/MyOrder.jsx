import { Button, Container, Indicator, Table, Text, createStyles } from "@mantine/core";

import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

import { useQuery } from "@tanstack/react-query";
import Loading from "../../Components/Loading";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";

const useStyles = createStyles({
  table: {
    width: "80%",
    margin: "auto",
    marginTop: "25px",
    marginBottom: "50px",
    // border: "1px solid gray",
    // borderRadius: "20px",
  },
  payment_button: {
    backgroundColor: "#4C6EF5 !important",

    ":hover": {
      backgroundColor: "#4f71ea !important",
    },
  },
  cancel_button: {
    backgroundColor: "red !important",
    ":hover": {
      backgroundColor: "#FA5252 !important",
    },
  },
});

const MyOrder = () => {
  const { classes } = useStyles();
  const { user } = useContext(AuthContext);

  // fetch my orders
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/orders?email=${user?.email}`);
      const data = await res.json();
      return data;
    },
  });

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
      <th>
        <Text size={"md"} c={"indigo"} fw={600}>
          Orders role
        </Text>
      </th>
    </tr>
  );

  // cancel your order
  const handleDeleteProduct = (order) => {
    fetch(`http://localhost:5000/v1/order/${order._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          console.log(data);
          refetch();
          toast.success(`${order.cart.map((item) => item.name)} deleted successfully`);
        }
      });

    if (isLoading) {
      return <Loading></Loading>;
    }
  };

  const rows =
    orders &&
    orders?.map((order, i) => (
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
                  {item.name},
                </Text>
              </Indicator>
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
        {order.totalPrice && !order.paid && (
          <td>
            <Link to={`/payment/${order._id}`}>
              <Button className={classes.payment_button} size="xs">
                payment
              </Button>
            </Link>
          </td>
        )}
        {order.totalPrice && order.paid && (
          <td>
            <Button disabled color="indigo" size="xs">
              paid
            </Button>
          </td>
        )}

        <td>
          {order.paid ? (
            <Button className="btn-sm btn-success">Order Details</Button>
          ) : (
            <Button onClick={() => handleDeleteProduct(order)} className="btn-sm btn-error">
              Cancel Order
            </Button>
          )}
        </td>
      </tr>
    ));

  return (
    <>
      <Container size="81%" className="mt-24" >
        <Text fz={18} mt={32} fw={700}>
          My orders
        </Text>
      </Container>
      <Table
        mb={194}
        verticalSpacing="lg"
        captionSide="bottom"
        withBorder
        fontSize="xs"
        radius="md"
        className={classes.table}
      >
        <thead>{ths}</thead>
        <tbody>{rows}</tbody>
      </Table>
    </>
  );
};

export default MyOrder;
