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
import { Container, Indicator, Text } from "@mantine/core";
import { AuthContext } from "../../Context/UserContext";
import { toast } from "react-hot-toast";
import { ApiContext } from "../../Context/DataContext";
import { IconLayoutDashboard } from "@tabler/icons-react";
import UseAdmin from "../../Hooks/UseAdmin";

// const useStyles = createStyles((theme) => ({
//   // root: {
//   //   position: "relative",
//   //   zIndex: 1,
//   // },

//   dropdown: {
//     position: "absolute",
//     top: "HEADER_HEIGHT",
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

const Navbar = () => {
  const { signInWithGoogle, logOut, user } = useContext(AuthContext);
  const [openNav, setOpenNav] = React.useState(false);
  const { cart } = useContext(ApiContext);
  // const { cart } = useContext(ApiContext);
  const [isAdmin] = UseAdmin(user?.email);

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

  // logout
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
    toast.success("successfully logout");
  };

  // toast
  // const notify = () => toast("Here is your toast.");

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link to="/tableReservation">
        <Text
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <div className="flex items-center text-primary text-md hover:text-accent font-semibold">
            Book A Table
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
      {user?.email && isAdmin ? (
        <>
          {" "}
          <Link to="/dashboard/allBookings">
            {" "}
            <Text
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-normal"
            >
              <div className="flex items-center text-md text-primary hover:text-accent font-semibold">
                <IconLayoutDashboard className="h-6 w-6" />
              </div>
            </Text>
          </Link>
        </>
      ) : (
        ""
      )}

      {user?.email ? (
        <>
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
            </Menu>
          </Text>
        </>
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
          <MobileNav open={openNav}>{navList}</MobileNav>
        </div>
      </section>
    </Container>
  );
};

export default Navbar;
