import { Navbar, ScrollArea, createStyles, rem, Text } from "@mantine/core";

import { Link } from "react-router-dom";
import UseAdmin from "../../Hooks/UseAdmin";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";
import { IconUsers } from "@tabler/icons-react";
import { IconReservedLine } from "@tabler/icons-react";

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

export const DashboardSideNav = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = UseAdmin(user?.email);
  const { classes } = useStyles();

  return (
    <Navbar height={800} width={{ sm: 330 }} pl="md" className={classes.navbar}>
      <Navbar.Section className={classes.header}>
        <Text position="apart" c={"indigo"} fw={700} fz={22}>
          Admin Dashboard
        </Text>
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
                          <IconReservedLine size={"1.2rem"} /> <span className="pt-1">Table reserved</span>
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
    </Navbar>
  );
};
