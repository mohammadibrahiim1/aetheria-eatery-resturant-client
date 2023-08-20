import { Navbar, Group, Code, ScrollArea, createStyles, rem, Button, Text } from "@mantine/core";
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
  IconShoppingBagExclamation,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import UseAdmin from "../../Hooks/UseAdmin";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";
import { IconUsers } from "@tabler/icons-react";
// import { UserButton } from "../UserButton/UserButton";
// import { LinksGroup } from "../NavbarLinksGroup/NavbarLinksGroup";
// import { Logo } from "./Logo";

const mockdata = [
  { label: "Dashboard", icon: IconGauge },
  {
    label: "Market news",
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: "Overview", link: "/" },
      { label: "Forecasts", link: "/" },
      { label: "Outlook", link: "/" },
      { label: "Real time", link: "/" },
    ],
  },
  {
    label: "Releases",
    icon: IconCalendarStats,
    links: [
      { label: "Upcoming releases", link: "/" },
      { label: "Previous releases", link: "/" },
      { label: "Releases schedule", link: "/" },
    ],
  },
  { label: "Analytics", icon: IconPresentationAnalytics },
  { label: "Contracts", icon: IconFileAnalytics },
  { label: "Settings", icon: IconAdjustments },
  {
    label: "Security",
    icon: IconLock,
    links: [
      { label: "Enable 2FA", link: "/" },
      { label: "Change password", link: "/" },
      { label: "Recovery codes", link: "/" },
    ],
  },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    borderBottom: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,
  },

  links: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    borderTop: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,
  },
}));

export const DashboardNav = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = UseAdmin(user?.email);
  const { classes } = useStyles();

  return (
    <Navbar height={800} width={{ sm: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section className={classes.header}>
        <Group position="apart">Admin Dashboard</Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>
          <div>
            <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
            <ul className=" p-4 w-80 flex justify-between align-center ">
              <div>
                {isAdmin && (
                  <div>
                    <li>
                      <Link to="/dashboard/allUsers">
                        <Text className="text-indigo-500 font-semibold flex items-center gap-1  ">
                          <IconUsers size={"1.2rem"} /> <span className="pt-1">Users</span>
                        </Text>
                      </Link>
                    </li>
                    <li>
                      <Link to="/dashboard/tableBookings">
                        <Text className="text-indigo-500 font-semibold flex items-center gap-1 mt-2 ">
                          <IconShoppingBagExclamation size={"1.2rem"} /> <span className="pt-1">Orders</span>
                        </Text>
                      </Link>
                    </li>
                  </div>
                )}
              </div>
            </ul>
          </div>
        </div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        {/* <UserButton
          image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          name="Ann Nullpointer"
          email="anullpointer@yahoo.com"
        /> */}
      </Navbar.Section>
    </Navbar>
  );
};
