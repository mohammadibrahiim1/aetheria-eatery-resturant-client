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
    textTransform: "uppercase",
    textAlign: "center",
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
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
  },

  title: {
    fontWeight: 800,
    fontSize: rem(40),

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
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "12px",
    lineHeight: "24px",
    textAlign: "center",

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

const Salads = () => {
  const { salads } = useContext(ApiContext);
  console.log(salads);
  const { classes } = useStyles();
  return (
    <div className="pt-24">
      <div className={classes.wrapper}>
        <Overlay color="#000" opacity={0.65} zIndex={1} />

        <div className={classes.inner}>
          <Title className={classes.title}>
            Sal
            <Text component="span" inherit className={classes.highlight}>
              ads
            </Text>
          </Title>

          <Container size={640}>
            <Text size="lg" className={classes.description}>
              Are you looking for somewhere special to go this weekend? Do you
              want to try something new? Check out one of these hot new
              restaurants.
            </Text>
          </Container>
        </div>
      </div>
      <Container>
        <div className="pt-8">
          <p className={classes.order}>ORDER YOUR FAVOURITE FOOD</p>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2 py-8">
          {salads.map((item) => (
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

export default Salads;
