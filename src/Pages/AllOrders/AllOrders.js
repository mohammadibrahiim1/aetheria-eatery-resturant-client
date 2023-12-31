// https://resturant-website-server.vercel.app/v1/orders

import { Button, Indicator, Table, Text, createStyles } from "@mantine/core";

import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Loading from "../../Components/Loading";
import { AuthContext } from "../../Context/UserContext";

const useStyles = createStyles({
  //   table: {
  //     width: "80%",
  //     margin: "auto",
  //     marginTop: "25px",
  //     marginBottom: "50px",

  //   },
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

const AllOrders = () => {
  const { classes } = useStyles();
  const { user, loading } = useContext(AuthContext);
  //   const [displayText, setDisplayText] = useState("Waiting for payment");
  //   const [isMinutePassed, setIsMinutePassed] = useState(false);
  const [showInitialButton, setShowInitialButton] = useState(true);
  //   const [allOrders, setAllOrders] = useState([]);

  const [counter, setCounter] = useState(0);
  console.log(counter);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowInitialButton(false);
      setCounter((prevCounter) => prevCounter + 1);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  // fetch my orders
  const { data: allOrders = [], refetch } = useQuery({
    queryKey: ["allOrders"],
    queryFn: async () => {
      const res = await fetch(`https://resturant-website-server.vercel.app/v1/orders`);
      const data = await res.json();

      return data;
    },
  });
  //   useEffect(() => {
  //     fetch(`https://resturant-website-server.vercel.app/v1/orders`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setAllOrders(data);
  //         return data;
  //       });
  //   }, [user]);

  if (loading) {
    return <Loading></Loading>;
  }

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
    fetch(`https://resturant-website-server.vercel.app/v1/order/${order._id}`, {
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
  };

  const rows =
    allOrders &&
    allOrders?.map((order, i) => (
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
        {/* {order.totalPrice && !order.paid && (
          <td>
            <Link>
              <Button className={classes.payment_button} size="xs">
                Unpaid
              </Button>
            </Link>
          </td>
        )} */}
        {order.totalPrice && order.paid && (
          <td>
            <Button disabled color="indigo" size="xs">
              paid
            </Button>
          </td>
        )}

        {showInitialButton && !order.paid ? (
          <td>
            <td>
              <Button className="btn btn-sm btn-active">Unpaid</Button>
            </td>

            <td>
              <Button className="btn btn-sm btn-warning">waiting for payment</Button>
            </td>
          </td>
        ) : (
          <td>
            {order.paid ? (
              <Button className="btn btn-sm btn-success">Order details</Button>
            ) : (
              <Button onClick={() => handleDeleteProduct(order._id)} className="btn btn-sm btn-error">
                cancel order
              </Button>
            )}
          </td>
        )}

        {/* <td>
          {order.paid && <Button className="btn-sm btn-success">Order Details</Button>}
          {order.totalPrice && showInitialButton && !order.paid ? (
            <Button className="btn btn-error">Waiting for payment</Button>
          ) : (
            <Button className="btn btn-error">cancel order</Button>
          )}

          {order.paid && !showInitialButton ? (
            <Button className="btn-sm btn-success">Order Details</Button>
          ) : (
            <Button onClick={() => handleDeleteProduct(order)} className="btn-sm btn-error">
              cancel order
            </Button>
          )}
        </td> */}
      </tr>
    ));

  return (
    <>
      <section>
        <Text c={"indigo"} fz={18} py={5} fw={700} tt={"capitalize"}>
          users orders information
        </Text>
      </section>
      <Table
        mb={194}
        verticalSpacing="md"
        horizontalSpacing={"xl"}
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

export default AllOrders;
