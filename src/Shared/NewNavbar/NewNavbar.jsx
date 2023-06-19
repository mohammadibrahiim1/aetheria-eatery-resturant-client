import { useState } from "react";
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

// const navList = (
//     <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
//       <Link to="/tableReservation">
//         <Text
//           as="li"
//           variant="small"
//           color="blue-gray"
//           className="p-1 font-normal"
//         >
//           <div className="flex items-center text-primary text-md hover:text-accent font-semibold">
//             Book A Table
//           </div>
//         </Text>
//       </Link>
//       <Link to="/mainMenu">
//         <Text
//           as="li"
//           variant="small"
//           color="blue-gray"
//           className="p-1 font-normal"
//         >
//           <div className="flex items-center text-primary text-md hover:text-accent font-semibold">
//             Our Menu
//           </div>
//         </Text>
//       </Link>
//       <Link to="/shop">
//         <Text
//           as="li"
//           variant="small"
//           color="blue-gray"
//           className="p-1 font-normal"
//         >
//           <div className="flex items-center text-primary text-md hover:text-accent font-semibold">
//             Shop
//           </div>
//         </Text>
//       </Link>
//       <Link to="/cart">
//         {" "}
//         <Text
//           as="li"
//           variant="small"
//           color="blue-gray"
//           className="p-1 font-normal"
//         >
//           <Indicator
//             position="top-end"
//             label={cart.length}
//             color="red"
//             size={14}
//           />
//           <div className="flex items-center text-md text-primary hover:text-accent font-semibold">
//             Cart
//           </div>
//         </Text>
//       </Link>
//       <Link to="/aboutUs">
//         {" "}
//         <Text
//           as="li"
//           variant="small"
//           color="blue-gray"
//           className="p-1 font-normal"
//         >
//           <div className="flex items-center text-md text-primary hover:text-accent font-semibold">
//             About
//           </div>
//         </Text>
//       </Link>
//       {user?.email && isAdmin ? (
//         <>
//           {" "}
//           <Link to="/dashboard/allBookings">
//             {" "}
//             <Text
//               as="li"
//               variant="small"
//               color="blue-gray"
//               className="p-1 font-normal"
//             >
//               <div className="flex items-center text-md text-primary hover:text-accent font-semibold">
//                 <IconLayoutDashboard className="h-6 w-6" />
//               </div>
//             </Text>
//           </Link>
//         </>
//       ) : (
//         ""
//       )}

//       {user?.email ? (
//         <>
//           <Text
//             as="li"
//             variant="small"
//             color="blue-gray"
//             className="p-1 font-normal"
//           >
//             <Menu placement="bottom-start">
//               <MenuHandler>
//                 <Button
//                   variant="default"
//                   className="cursor-pointer font-semibold text-md text-primary hover:text-accent"
//                 >
//                   <FaUserAlt onClick={handleLogOut} className="h-6 w-6" />
//                   {/* <img src={user.photoURL} alt="" srcset="" className="h-6 w-6" /> */}
//                 </Button>
//               </MenuHandler>
//             </Menu>
//           </Text>
//         </>
//       ) : (
//         <Text
//           as="li"
//           variant="small"
//           color="blue-gray"
//           className="p-1 font-normal"
//         >
//           <Menu placement="bottom-start">
//             <MenuHandler>
//               <Button
//                 variant="default"
//                 className="cursor-pointer font-semibold text-md text-primary hover:text-accent"
//               >
//                 <FcGoogle onClick={handleGoogleSignIn} className="h-6 w-6" />{" "}
//               </Button>
//             </MenuHandler>
//           </Menu>
//         </Text>
//       )}
//       {/* {user.displayName} */}
//     </ul>
//   );

export const NewNavbar = () => {
  
  const links = [{ to: "/shop", label: "Home" }];
  
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].Link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.to}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.Link,
      })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.Link);
        close();
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
      <Container className={classes.header}>
        <MantineLogo size={28} />
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
