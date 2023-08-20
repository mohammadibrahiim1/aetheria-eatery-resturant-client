import React from "react";
// import Navbar from "../Shared/Navbar/Navbar";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
// import { useContext } from "react";
// import { AuthContext } from "../Context/UserContext";
import { Button, Container, Group } from "@mantine/core";
import { DashboardNav } from "../Components/DashboardNav/DashboardNav";
import { NewNavbar } from "../Shared/NewNavbar/NewNavbar";

const DashboardLayout = () => {
  //   const { user } = useContext(AuthContext);
  //   const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <NewNavbar></NewNavbar>

      <Container size={"xl"} className="py-32 flex justify-start gap-12">
        <DashboardNav></DashboardNav> <Outlet></Outlet>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
