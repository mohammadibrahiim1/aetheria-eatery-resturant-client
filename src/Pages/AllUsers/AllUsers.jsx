import { Button, Table, Text, createStyles } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";

const useStyles = createStyles(() => ({
  table: {
    width: "100%",
    margin: "auto",
  },
}));

const AllUsers = () => {
  const { classes } = useStyles();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`https://resturant-website-server.vercel.app/users`);
      const data = await res.json();

      return data;
    },
  });

  const handleMakeAdmin = (_id) => {
    fetch(`https://resturant-website-server.vercel.app/users/admin/${_id}`, {
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
      <td>
        <Text c={"violet"} fw={700}>
          {i + 1}
        </Text>
      </td>
      <td>
        <img src={user.image} alt="" srcset="" className="h-12 w-12 rounded-full" />
      </td>
      <td>
        <Text fw={700} tt={"capitalize"} c={"teal"}>
          {user.name}
        </Text>
      </td>
      <td>
        <Text c={"lime"} fw={700} fz={16}>
          {user.email}
        </Text>
      </td>
      <td>
        {user?.role !== "admin" ? (
          <Button onClick={() => handleMakeAdmin(user._id)} className="btn btn-sm btn-warning">
            Make Admin
          </Button>
        ) : (
          <Button disabled className="btn btn-sm ">
            Admin
          </Button>
        )}
      </td>
    </tr>
  ));

  const ths = (
    <tr className="bg-[#F7F7F9] ">
      <th>
        <Text size={"sm"} c={"indigo"} fw={600}>
          Index
        </Text>
      </th>

      <th>
        <Text size={"sm"} c={"indigo"} fw={600}>
          Photo
        </Text>
      </th>
      <th>
        <Text size={"sm"} c={"indigo"} fw={600}>
          Name
        </Text>
      </th>
      <th>
        <Text size={"sm"} c={"indigo"} fw={600}>
          Email
        </Text>
      </th>
      <th>
        <Text size={"sm"} c={"indigo"} fw={600}>
          Role
        </Text>
      </th>
    </tr>
  );

  return (
    <div>
      <Text fz={18} fw={700}>
        Users information
      </Text>

      <Table
        verticalSpacing={"xs"}
        horizontalSpacing={"xl"}
        mb={194}
        captionSide="bottom"
        withBorder
        fontSize="sm"
        fw={600}
        radius="xl"
        className={classes.table}
      >
        <thead>{ths}</thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
};

export default AllUsers;
