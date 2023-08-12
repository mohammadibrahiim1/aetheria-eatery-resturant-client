import React from "react";
import { Title, Text, Container, Button, createStyles, rem, Image } from "@mantine/core";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingTop: "80px",
    [theme.fn.smallerThan("xs")]: {
      paddingTop: rem(80),
      paddingBottom: rem(50),
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  title: {
    fontWeight: 500,
    fontSize: rem(34),
    width: "350px",
    color: "#2A435D",
    marginBottom: theme.spacing.xs,
    textAlign: "left",
    textTransform: "uppercase",
    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
      textAlign: "left",
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: "center",

    [theme.fn.smallerThan("xs")]: {
      fontSize: theme.fontSizes.md,
      textAlign: "left",
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    display: "flex",
    justifyContent: "center",
    // paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  // control: {
  //   // height: rem(42),
  //   // fontSize: theme.fontSizes.md,

  //   "&:not(:first-of-type)": {
  //     marginLeft: theme.spacing.md,
  //   },

  //   [theme.fn.smallerThan("xs")]: {
  //     "&:not(:first-of-type)": {
  //       marginTop: theme.spacing.md,
  //       marginLeft: 0,
  //     },
  //   },
  // },

  secondaryControl: {
    color: theme.white,
    backgroundColor: "rgba(255, 255, 255, .4)",

    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, .45) !important",
    },
  },
}));

const Header = () => {
  const { classes, cx } = useStyles();
  return (
    <div>
      <Container m={"auto"} size={"lg"} className={classes.wrapper}>
        {/* <Overlay color="#000" opacity={0.65} zIndex={1} /> 
              {/* https://i.ibb.co/y5pSJNZ/image-delivery.png
https://i.ibb.co/2tBfGNW/image-our-Resturant-3.png
https://i.ibb.co/D7D3cpZ/image-our-Resturant-2.png
https://i.ibb.co/NY7t2Gk/image-our-Resturant-1.png
https://i.ibb.co/G2pXj4z/Rectangle-40.png
https://i.ibb.co/6tmy32q/image-big-Offer-2.png
https://i.ibb.co/X7JpSTk/image-big-Offer-1.png
https://i.ibb.co/3yD3sBy/image-rich-Healthy-2.png
https://i.ibb.co/Dz73gJm/image-rich-Healthy-1.png
https://i.ibb.co/wrvFd66/image1.png */}

        <div className={classes.inner}>
          <div className="flex justify-evenly items-center gap-3">
            <Title className={classes.title}>
              <Text fw={700} c={"indigo"} fz={"xs"}>
                best in Town
              </Text>
              Enjoy our chicken <span className="text-[#C33]">burger</span> fast food
              <Button className="btn-sm btn text-white bg-indigo-500 hover:bg-indigo-700" variant="white" size="lg">
                Order Online
              </Button>
            </Title>

            <Text size="lg" className={classes.description}>
              <Image maw={240} mx="auto" radius="md" src="https://i.ibb.co/wrvFd66/image1.png" alt="header food item" />
            </Text>
          </div>

          <Link to="/shop" className={classes.controls}>
            <Link to="/mainMenu">
              <Button className={cx(classes.control, classes.secondaryControl)} size="lg">
                Our Menu
              </Button>
            </Link>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Header;
