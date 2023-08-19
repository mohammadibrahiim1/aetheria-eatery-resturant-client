import React from "react";
// import Navbar from "../Shared/Navbar/Navbar";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
// import { useContext } from "react";
// import { AuthContext } from "../Context/UserContext";
import { Button, Container, Group } from "@mantine/core";
import { NewNavbar } from "../Shared/NewNavbar/NewNavbar";

const DashboardLayout = () => {
  //   const { user } = useContext(AuthContext);
  //   const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <NewNavbar></NewNavbar>
      <Container size={"lg"} className="py-32">
        {" "}
        <div>
          {/* <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> */}
          <ul className=" p-4 w-80 flex justify-between align-center ">
            {/* <li>
            <Link to="/dashboard">Dashboard</Link>
          </li> */}
            {/* {isAdmin && ( */}
            {/* //   <> */}
            <li>
              <Link to="/dashboard/allUsers">
                {" "}
                <Group>
                  {" "}
                  <Button className="text-dark" variant="light">
                    User
                  </Button>
                </Group>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/allBookings">
                {" "}
                <Group>
                  {" "}
                  <Button className="text-dark" variant="light">
                    Bookings
                  </Button>
                </Group>
              </Link>
            </li>
          </ul>
        </div>
        <Outlet></Outlet>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
