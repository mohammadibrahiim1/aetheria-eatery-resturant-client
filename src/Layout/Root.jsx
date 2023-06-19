import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
// import { Toaster } from "react-hot-toast";
// import { NewNavbar } from "../Shared/NewNavbar/NewNavbar";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <NewNavbar></NewNavbar> */}
      <Outlet></Outlet>
      <Footer></Footer>
      {/* <Toaster></Toaster> */}
    </div>
  );
};

export default Root;
