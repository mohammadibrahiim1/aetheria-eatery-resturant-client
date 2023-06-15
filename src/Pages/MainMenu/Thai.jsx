import {
  Card,
  Container,
  Group,
  Overlay,
  Text,
  Title,
  createStyles,
  rem,
} from "@mantine/core";
import React, { useContext } from "react";
import { ApiContext } from "../../Context/DataContext";
// import MainMenuHeader from './MainMenuHeader';
const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: rem(140),
    paddingBottom: rem(140),
    backgroundImage: "url(https://i.ibb.co/FwHvK47/menu-img-3.png)",
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

  cardTitle: {
    fontWeight: 700,
    fontFamily: `"Inter", sans-serif`,
    lineHeight: 1.2,
  },
  heading: {
    fontFamily: `Inter, sans-serif ${theme.fontFamily}`,
    fontWeight: 700,
    color: "#151515",
    lineHeight: 1.2,
    fontSize: rem(32),
    // marginTop: theme.spacing.xs,
    textTransform: "uppercase",
    textAlign: "center",
    // paddingBottom: theme.spacing.sm,
  },
  subTitle: {
    fontFamily: `Inter, sans-serif ${theme.fontFamily}`,
    fontWeight: 500,
    color: "#D99904",
    lineHeight: 1.2,
    fontSize: rem(12),
    marginTop: theme.spacing.xs,
    textTransform: "uppercase",
    textAlign: "center",
    paddingBottom: theme.spacing.xs,
  },
  price: {
    fontWeight: 700,
    fontFamily: `"Inter", sans-serif`,
    lineHeight: 1.2,
    color: "rebeccapurple",
  },

  body: {
    // padding: theme.spacing.md,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
    // gap: "240px",
  },

  title: {
    fontWeight: 800,
    fontSize: rem(40),
    // letterSpacing: rem(-1),
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
  order: {
    // width: "306px",
    // height: "24px",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "12px",
    lineHeight: "24px",
    textAlign: "center",
    // margin: "auto",
    textTransform: "uppercase",
    textDecoration: "underline",
    color: "#1F2937",
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

// https://i.ibb.co/Lv7XbhW/menu-img-4.png
// https://i.ibb.co/sWVffGH/menu-img-2.png
// https://i.ibb.co/TTtNG9F/menu-img-1.png
// https://i.ibb.co/FwHvK47/menu-img-3.png

const Thai = () => {
  const { thai } = useContext(ApiContext);
  console.log(thai);
  const { classes } = useStyles();
  return (
    <div className="pt-24">
      {/* <Container> */}
      <div className={classes.wrapper}>
        <Overlay color="#000" opacity={0.65} zIndex={1} />

        <div className={classes.inner}>
          <Title className={classes.title}>
            THAI
            <Text component="span" inherit className={classes.highlight}>
              FOODS
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

          {/* <div className={classes.controls}>
                    <Button className={classes.control} variant="white" size="lg">
                      Get started
                    </Button>
                    <Link to="/mainMenu">
                      <Button
                        className={cx(classes.control, classes.secondaryControl)}
                        size="lg"
                      >
                        Our Menu
                      </Button>
                    </Link>
                  </div> */}
        </div>
      </div>
      <Container>
        {/* <div className="py-12">
                  <div className={classes.subTitle}>
                    <p>---check it out---</p>
                  </div>
                  <div className={classes.heading} color="#151515">
                    <h1> Today's Offer</h1>
                  </div>
                </div> */}

        <div className="pt-8">
          <p className={classes.order}>ORDER YOUR FAVOURITE FOOD</p>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2 py-8">
          {thai.map((item) => (
            <div>
              <Card withBorder radius="md" p={5} className={classes.card}>
                <Group noWrap spacing={0}>
                  <div className={classes.body}>
                    <Text
                      transform="uppercase"
                      color="default"
                      weight={700}
                      size="sm"
                    >
                      {item.name}--------------------
                    </Text>

                    <Text className={classes.price} size="sm" mb="md">
                      ${item.price}
                    </Text>
                  </div>
                </Group>

                <div>
                  <Text
                    // transform="uppercase"
                    color="dimmed"
                    weight={700}
                    size="xs"
                    className={classes.cardTitle}
                    // mb="md"
                  >
                    {item.description}
                  </Text>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Container>
      {/* </Container> */}
    </div>
  );
};

export default Thai;
