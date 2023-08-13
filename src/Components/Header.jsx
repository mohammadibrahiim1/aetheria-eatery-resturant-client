import React from "react";
import { Title, Text, Container, Button, createStyles, rem, Image, Card } from "@mantine/core";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
    // paddingTop: "80px",
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
      <Container m={"auto"} size={"lg"} py={30} className={classes.wrapper}>
        <div className={classes.inner}>
          <div className="flex  items-center gap-5">
            <Card
              w={540}
              h={188}
              radius={"md"}
              bg={"#FFF3ED"}
              className="grid grid-cols-2 justify-between items-center"
            >
              <Image
                maw={224}
                mx="auto"
                radius="md"
                pt={26}
                src="https://i.ibb.co/GFPzFJx/img-1.png "
                alt="header food item"
              />
              <div className="pt-5">
                <Text fw={600} c={"#2B2B43"} fz={18}>
                  Big Burgers
                </Text>
                <Text c={"#FD6D22"} fz={40} fw={800}>
                  50% OFF
                </Text>

                <div>
                  <Text c={"#83859C"} fz={14}>
                    Fodders
                  </Text>
                </div>
              </div>
            </Card>

            <Card
              w={540}
              h={188}
              radius={"md"}
              bg={"#F3F4FF"}
              className="grid grid-cols-2 justify-between items-center"
            >
              <Image
                maw={224}
                mx="auto"
                radius="md"
                pt={26}
                src="https://i.ibb.co/nLZ93nN/img.png"
                alt="header food item"
              />
              <div className="pt-5">
                <Text fw={600} c={"#2B2B43"} fz={18}>
                  Big burgers
                </Text>
                <Text c={"#4E60FF"} fz={40} fw={800}>
                  20% OFF
                </Text>

                <div>
                  <Text c={"#83859C"} fz={14}>
                    Deserty
                  </Text>
                </div>
              </div>
            </Card>

            {/* <div>
              <Image maw={240} mx="auto" radius="md" src="https://i.ibb.co/nLZ93nN/img.png" alt="header food item" />
            </div> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
