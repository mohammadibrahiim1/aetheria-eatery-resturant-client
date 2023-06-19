import React from "react";
// import { ApiContext } from "../../Context/DataContext";
import { Table } from "@mantine/core";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/users`
      );
      const data = await res.json();
      // console.log(data);
      return data;
    },
  });
  //   const { users } = useContext(ApiContext);
  const handleMakeAdmin = (_id) => {
    fetch(`http://localhost:5000/users/admin/${_id}`, {
      method: "PUT",
      //   headers: {
      //     authorization: `bearer ${localStorage.getItem("accessToken")}`,
      //   },
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
        <img
          src={user.image}
          alt=""
          srcset=""
          className="h-12 w-12 rounded-full"
        />
      </td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        {user?.role !== "admin" && (
          <button
            onClick={() => handleMakeAdmin(user._id)}
            className="btn btn-xs btn-light"
          >
            Make Admin
          </button>
        )}
      </td>
    </tr>
  ));

  return (
    <div>
      <p className="text-center"> See All Users</p>
      <p className="text-center">
        Total <span className="text-error"> {users.length}</span> users
      </p>
      <Table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Image</th>
            <th>user name</th>
            <th>email</th>
            <th>user role</th>

            {/* <th>image</th> */}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
};

export default AllUsers;
