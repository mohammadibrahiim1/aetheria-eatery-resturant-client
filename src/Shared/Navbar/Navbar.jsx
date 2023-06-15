// import { useState } from "react";
// import React from "react";
// import {
//   createStyles,
//   Header,
//   Container,
//   Group,
//   Burger,
//   Paper,
//   Transition,
//   rem,
// } from "@mantine/core";
// import { useDisclosure } from "@mantine/hooks";
// // import { Activity } from "@tabler/icons-react";
// import { Link } from "react-router-dom";
// import { IconActivity } from "@tabler/icons-react";

// const HEADER_HEIGHT = rem(60);

// const useStyles = createStyles((theme) => ({
//   root: {
//     position: "relative",
//     zIndex: 1,
//   },

//   dropdown: {
//     position: "absolute",
//     top: HEADER_HEIGHT,
//     left: 0,
//     right: 0,
//     zIndex: 0,
//     borderTopRightRadius: 0,
//     borderTopLeftRadius: 0,
//     borderTopWidth: 0,
//     // overflow: "hidden",

//     [theme.fn.largerThan("sm")]: {
//       display: "none",
//     },
//   },

//   header: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     height: "100%",
//   },

//   links: {
//     [theme.fn.smallerThan("sm")]: {
//       display: "none",
//     },
//   },

//   burger: {
//     [theme.fn.largerThan("sm")]: {
//       display: "none",
//     },
//   },

//   link: {
//     display: "block",
//     lineHeight: 1,
//     padding: `${rem(8)} ${rem(12)}`,
//     borderRadius: theme.radius.sm,
//     textDecoration: "none",
//     color:
//       theme.colorScheme === "dark"
//         ? theme.colors.dark[0]
//         : theme.colors.gray[7],
//     fontSize: theme.fontSizes.sm,
//     fontWeight: 500,

//     "&:hover": {
//       backgroundColor:
//         theme.colorScheme === "dark"
//           ? theme.colors.dark[6]
//           : theme.colors.gray[0],
//     },

//     [theme.fn.smallerThan("sm")]: {
//       borderRadius: 0,
//       padding: theme.spacing.md,
//     },
//   },

//   linkActive: {
//     "&, &:hover": {
//       backgroundColor: theme.fn.variant({
//         variant: "light",
//         color: theme.primaryColor,
//       }).background,
//       color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
//         .color,
//     },
//   },
// }));

// const links = [
//   { label: "Menu", link: "/#Home" },
//   { label: "Contact Us", link: "/" },
//   { label: "your order", link: "/" },
//   { label: "Cart", link: "/" },
//   { label: "Sign Up", link: "/" },
// ];

// const Navbar = () => {
//   const [opened, { toggle, close }] = useDisclosure(false);
//   const [active, setActive] = useState(links[0].link);
//   const { classes, cx } = useStyles();

//   const items = links.map((link) => (
//     <a
//       key={link.label}
//       href={link.link}
//       className={cx(classes.link, {
//         [classes.linkActive]: active === link.link,
//       })}
//       onClick={(event) => {
//         event.preventDefault();
//         setActive(link.link);
//         close();
//       }}
//     >
//       {link.label}
//     </a>
//   ));
//   return (
//     <div>
//       <Header height={HEADER_HEIGHT} className={classes.root}>
//         <Container className={classes.header}>
//           <Link to="/">
//             <IconActivity size={48} color="red" />
//           </Link>

//           <Group className={classes.links} color="dark.4">{items}</Group>

//           <Burger
//             opened={opened}
//             onClick={toggle}
//             className={classes.burger}
//             size="sm"
//           />

//           <Transition
//             transition="pop-top-right"
//             duration={200}
//             mounted={opened}
//           >
//             {(styles) => (
//               <Paper className={classes.dropdown} withBorder style={styles}>
//                 {items}
//               </Paper>
//             )}
//           </Transition>
//         </Container>
//       </Header>
//     </div>
//   );
// };

// export default Navbar;

import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaUserAlt } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {
  Button,
  IconButton,
  Menu,
  MenuHandler,
  // MenuItem,
  // MenuList,
  MobileNav,
  // Typography,
} from "@material-tailwind/react";
import { Container, Indicator, Text, createStyles, rem } from "@mantine/core";
import { AuthContext } from "../../Context/UserContext";
import { toast } from "react-hot-toast";
import { ApiContext } from "../../Context/DataContext";

const useStyles = createStyles((theme) => ({
  // root: {
  //   position: "relative",
  //   zIndex: 1,
  // },

  dropdown: {
    position: "absolute",
    top: "HEADER_HEIGHT",
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    // overflow: "hidden",

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

const Navbar = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const { cart } = useContext(ApiContext);

  const { classes, cx } = useStyles();

  // user

  const { signInWithGoogle, loading, logOut, user } = useContext(AuthContext);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  // google sign in
  const handleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      const user = result.user;
      if (user) {
        fetch("http://localhost:5000/users", {
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
              alert("successfully signin");
            } else {
              toast.error(data.message);
            }
          });
      }
    });
  };

  // logout
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
    toast.success("successfully logout");
  };

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link to="/">
        <Text
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <div className="flex items-center text-primary text-md hover:text-accent font-semibold">
            Home
          </div>
        </Text>
      </Link>
      <Link to="/mainMenu">
        <Text
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <div className="flex items-center text-primary text-md hover:text-accent font-semibold">
            Our Menu
          </div>
        </Text>
      </Link>
      <Link to="/shop">
        <Text
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <div className="flex items-center text-primary text-md hover:text-accent font-semibold">
            Shop
          </div>
        </Text>
      </Link>
      <Link to="/cart">
        {" "}
        <Text
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          {/* "bottom-end" | "bottom-start" | "top-end" | "top-start" | "bottom-center" | "top-center" | "middle-center" | "middle-end" | "middle-start" */}
          <Indicator
            position="top-end"
            label={cart.length}
            color="red"
            size={14}
          />
          <div className="flex items-center text-md text-primary hover:text-accent font-semibold">
            Cart
          </div>
        </Text>
      </Link>
      <Link to="/aboutUs">
        {" "}
        <Text
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <div className="flex items-center text-md text-primary hover:text-accent font-semibold">
            About
          </div>
        </Text>
      </Link>

      {user?.email ? (
        <Text
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <Menu placement="bottom-start">
            <MenuHandler>
              <Button
                variant="default"
                className="cursor-pointer font-semibold text-md text-primary hover:text-accent"
              >
                <FaUserAlt onClick={handleLogOut} className="h-6 w-6" />
                {/* <img src={user.photoURL} alt="" srcset="" className="h-6 w-6" /> */}
              </Button>
            </MenuHandler>
            {/* <MenuList>
     <Link to="/signUp">
       {" "}
       <MenuItem className="mb-3 font-semibold text-base text-primary hover:text-accent ">
         <div>Sign Up</div>
       </MenuItem>
     </Link>
     <Link to="/logIn">
       {" "}
       <MenuItem className="mb-3 font-semibold text-base text-primary hover:text-accent">
         <div>Login</div>
       </MenuItem>
     </Link>
   </MenuList> */}
          </Menu>
        </Text>
      ) : (
        <Text
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <Menu placement="bottom-start">
            <MenuHandler>
              <Button
                variant="default"
                className="cursor-pointer font-semibold text-md text-primary hover:text-accent"
              >
                <FcGoogle onClick={handleGoogleSignIn} className="h-6 w-6" />{" "}
              </Button>
            </MenuHandler>
          </Menu>
        </Text>
      )}
      {/* {user.displayName} */}
    </ul>
  );
  return (
    <Container>
      {/* <Link  to="https://ibb.co/7pjP0Rm"><img src="https://i.ibb.co/5jGmJnH/seo-search-symbol.png" alt="seo-search-symbol" border="0"></Link > */}
      <section>
        <div className=" inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
          <div className=" navbar sticky-top flex align-center justify-between text-blue-gray-900">
            <Link to="/">
              {" "}
              <Text as="a" className="mr-4 cursor-pointer py-1.5  font-medium">
                Aetheria Eatery
              </Text>
            </Link>
            <div className="flex align-center justify-between gap-4">
              <div className=" hidden lg:block">{navList}</div>
              {/* <Link to="/">
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block btn-sm btn-error"
                >
                  Shop Now
                </Button>
              </Link> */}
              <IconButton
                variant="text"
                className="ml-auto  h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
          <MobileNav open={openNav}>
            {navList}
            {/* <Link to="/">
              {" "}
              <Button
                variant="gradient"
                size="sm"
                fullWidth
                className="mb-2 btn btn-error sticky"
              >
                <p>Shop Now</p>
              </Button>
            </Link> */}
          </MobileNav>
        </div>
      </section>
    </Container>
  );
};

export default Navbar;
