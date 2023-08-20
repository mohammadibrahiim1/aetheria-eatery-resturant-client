import React from "react";

import { Outlet } from "react-router-dom";

import { createStyles } from "@mantine/core";
import { DashboardSideNav } from "../Components/DashboardSideNav/DashboardSideNav";
import { DashboardNav } from "../Components/DashboardNav/DashboardNav";

const useStyles = createStyles(() => ({
  sideNav: {
    position: "fixed",
  },
  dashboardOutlet: {
    position: "relative",
    left: "20%",
  },
}));
const DashboardLayout = () => {
  const { classes } = useStyles();

  return (
    <div>
      <DashboardNav></DashboardNav>
      <section className="py-32 flex justify-start gap-12">
        <div className={classes.sideNav}>
          <DashboardSideNav></DashboardSideNav>
        </div>{" "}
        <div className={classes.dashboardOutlet}>
          <Outlet></Outlet>
        </div>
      </section>
    </div>
  );
};

export default DashboardLayout;
