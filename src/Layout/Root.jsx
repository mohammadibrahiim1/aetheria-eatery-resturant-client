import React from "react";
// import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import { NewNavbar } from "../Shared/NewNavbar/NewNavbar";

const Root = () => {
  return (
    <div>
      <NewNavbar></NewNavbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
