import React from "react";
import { Button, Container, Table, Text, createStyles } from "@mantine/core";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

const useStyles = createStyles(() => ({
  table: {
    // width: "80%",
    // margin: "auto",
    marginTop: "25px",
    marginBottom: "50px",
    // border: "1px solid gray",
    // borderRadius: "20px",
  },
}));

const AllUsers = () => {
  const { classes } = useStyles();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users`);
      const data = await res.json();

      return data;
    },
  });

  const handleMakeAdmin = (_id) => {
    fetch(`http://localhost:5000/users/admin/${_id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make admin successfully.");
          refetch();
        }
      });
  };
  const rows = users.map((user, i) => (
    <tr key={user._id}>
      <td>{i + 1}</td>
      <td>
        <img src={user.image} alt="" srcset="" className="h-12 w-12 rounded-full" />
      </td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        {user?.role !== "admin" ? (
          <Button onClick={() => handleMakeAdmin(user._id)} className="btn btn-sm btn-light">
            Make Admin
          </Button>
        ) : (
          <Button disabled className="btn btn-sm">
            Admin
          </Button>
        )}
      </td>
    </tr>
  ));

  const ths = (
    <tr className="bg-[#F7F7F9]">
      <th>
        <Text size={"md"} c={"indigo"} fw={600}>
          Index
        </Text>
      </th>

      <th>
        <Text size={"md"} c={"indigo"} fw={600}>
          Photo
        </Text>
      </th>
      <th>
        <Text size={"md"} c={"indigo"} fw={600}>
          Name
        </Text>
      </th>
      <th>
        <Text size={"md"} c={"indigo"} fw={600}>
          Email
        </Text>
      </th>
      <th>
        <Text size={"md"} c={"indigo"} fw={600}>
          Role
        </Text>
      </th>
    </tr>
  );

  return (
    <div>
      <Text fz={18} mt={32} fw={700}>
        users dashboard
      </Text>

      <Table mb={194} captionSide="bottom" withBorder fontSize="xs" radius="md" className={classes.table}>
        <thead>{ths}</thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
};

export default AllUsers;
