import React from "react";
import {
  Title,
  Text,
  Container,
  Button,
  Overlay,
  createStyles,
  rem,
} from "@mantine/core";
import { Link } from "react-router-dom";

// https://i.ibb.co/Lv7XbhW/menu-img-4.png
// https://i.ibb.co/sWVffGH/menu-img-2.png
// https://i.ibb.co/TTtNG9F/menu-img-1.png
// https://i.ibb.co/FwHvK47/menu-img-3.png

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: rem(180),
    paddingBottom: rem(130),
    backgroundImage: "url(https://i.ibb.co/TTtNG9F/menu-img-1.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",

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
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: rem(-1),
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: "center",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

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
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  control: {
    height: rem(42),
    fontSize: theme.fontSizes.md,

    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan("xs")]: {
      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: "rgba(255, 255, 255, .4)",

    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, .45) !important",
    },
  },
}));

const MainMenuHeader = () => {
  const { classes, cx } = useStyles();
  return (
    <div>
      <div className={classes.wrapper}>
        <Overlay color="#000" opacity={0.65} zIndex={1} />

        <div className={classes.inner}>
          <Title className={classes.title}>
            SEE OUR{" "}
            <Text component="span" inherit className={classes.highlight}>
              MENU
            </Text>
          </Title>

          <Container size={640}>
            <Text size="lg" className={classes.description}>
              {/* Build more reliable software with AI companion. AI is also trained
              to detect lazy developers who do nothing and just complain on
              Twitter. */}
              Are you looking for somewhere special to go this weekend? Do you
              want to try something new? Check out one of these hot new
              restaurants.
            </Text>
          </Container>

          <Link to="/" className={classes.controls}>
            <Button className={classes.control} variant="white" size="lg">
              Home
            </Button>
            <Link to="/shop">
              <Button
                className={cx(classes.control, classes.secondaryControl)}
                size="lg"
              >
                Order Online
              </Button>
            </Link>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainMenuHeader;
