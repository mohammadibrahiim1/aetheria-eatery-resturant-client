import React from "react";
import { Title, Text, Container, Button, Overlay, createStyles, rem, SimpleGrid } from "@mantine/core";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    marginTop: "60px",
    paddingTop: rem(180),
    paddingBottom: rem(130),
    backgroundImage: "url(https://i.ibb.co/bzvJrdx/img.webp)",
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

const BookATableBanner = () => {
  const { classes, cx } = useStyles();
  return (
    <div>
      <div className={classes.wrapper}>
        <Overlay color="#000" opacity={0.65} zIndex={1} />

        <div className={classes.inner}>
          <Title className={classes.title}>
            Book A
            <Text component="span" inherit className={classes.highlight}>
              Table
            </Text>
          </Title>

          <Container size={640}>
            <Text size="lg" className={classes.description}>
              {/* Build more reliable software with AI companion. AI is also trained
              to detect lazy developers who do nothing and just complain on
              Twitter. */}
              Are you looking for somewhere special to go this weekend? Do you want to try something new? Check out one
              of these hot new restaurants.
            </Text>

            <SimpleGrid
              className="flex items-center justify-center"
              mt={12}
              cols={2}
              breakpoints={[
                { maxWidth: "sm", cols: 1 },
                { maxWidth: "md", cols: 1 },
              ]}
            >
              <Link to="/shop">
                <Button className="btn btn-md btn-primary">Order Online</Button>
              </Link>
              <Link to="/shop">
                <Button className="btn btn-md btn-secondary">Our Menu</Button>
              </Link>
            </SimpleGrid>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default BookATableBanner;
