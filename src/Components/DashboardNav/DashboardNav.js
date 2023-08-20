import { useContext, useState } from "react";
import { createStyles, Header, Group, Burger, Paper, Transition, rem, Avatar } from "@mantine/core";
import { Link } from "react-router-dom";

import { AuthContext } from "../../Context/UserContext";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  root: {
    position: "fixed",
    // zIndex: 1,
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
    fontWeight: " bold",
    height: "100%",
    paddingRight: "10px",
    paddingLeft: "10px",
    // width: "60%",
    // margin: "auto",
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
    color: "#2B2B43",
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      color: "#4E60FF",
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      // backgroundColor: theme.fn.variant({
      //   variant: "light",
      //   color: theme.primaryColor,
      // }).background,
      color: "#4E60FF",
    },
  },
}));

export const DashboardNav = () => {
  const { signInWithGoogle, logOut, user } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      const user = result.user;
      if (user) {
        fetch("http://localhost:5000/users", {
          method: "POST",
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
            if (data.acknowledged) {
              toast.success(data.message);
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
    {
      label: user?.email ? (
        <div onClick={handleLogOut}>
          <Avatar src={user.photoURL} alt="it's me" radius="xl" />
        </div>
      ) : (
        <div onClick={handleGoogleSignIn}>
          <FcGoogle className="h-6 w-6" />{" "}
        </div>
      ),
    },
  ];

  const [active, setActive] = useState(links.link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <section className={classes.header}>
        <Link to="/" className="flex justify-between align-center gap-2">
          <span>
            <img src="https://i.ibb.co/HtH5rWq/fast-food-1.png" alt="" srcset="" className="h-6 w-6" />
          </span>
          <span>Aetheria Eatery</span>
        </Link>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Burger className={classes.burger} size="sm" />
        <Transition transition="pop-top-right" duration={200}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </section>
    </Header>
  );
};
