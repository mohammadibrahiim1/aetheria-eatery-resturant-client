import { useContext, useState } from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MantineLogo } from "@mantine/ds";
import { Link } from "react-router-dom";
import UseAdmin from "../../Hooks/UseAdmin";
import { ApiContext } from "../../Context/DataContext";
import { AuthContext } from "../../Context/UserContext";
import { toast } from "react-hot-toast";
import { FaUserAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IconLayoutDashboard } from "@tabler/icons-react";

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

// interface HeaderResponsiveProps {
//   links: { link: string, label: string }[];
// }

export const NewNavbar = () => {
  const { signInWithGoogle, logOut, user } = useContext(AuthContext);
  // const [openNav, setOpenNav] = React.useState(false);
  const { cart } = useContext(ApiContext);
  // const { cart } = useContext(ApiContext);
  const [isAdmin] = UseAdmin(user?.email);

  const handleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      const user = result.user;
      if (user) {
        fetch("   http://localhost:5000/users", {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              toast.success("SignIn successfully");
            } else {
              toast.error(data.message);
            }
          });
      }
    });
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
    toast.success("successfully logout");
  };

  const links = [
    { link: "/tableReservation", label: "Book A Table" },
    { link: "/mainMenu", label: " Our Menu" },
    { link: "/shop", label: "Shop" },
    { link: "/cart", label: " Cart" },
    { link: "/aboutUs", label: "About" },
    {
      link: "/dashboard/allBookings",
      label:
        user?.email && isAdmin ? (
          <div>
            {" "}
            <IconLayoutDashboard className="h-6 w-6" />
          </div>
        ) : (
          <></>
        ),
    },
    {
      // link: "/dashboard/allBookings",
      label: user?.email ? (
        <div onClick={handleLogOut}>
          <FaUserAlt className="h-6 w-6" />
        </div>
      ) : (
        <div onClick={handleGoogleSignIn}>
          <FcGoogle className="h-6 w-6" />{" "}
        </div>
      ),
    },
  ];

  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        // event.preventDefault();
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <Link to="/">
          {/* <MantineLogo size={28} /> */}
          Aetheria Eatery
        </Link>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
};
