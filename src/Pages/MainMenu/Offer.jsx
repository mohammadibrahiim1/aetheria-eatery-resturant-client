import {
  createStyles,
  Card,
  //   Image,
  //   Avatar,
  Text,
  Group,
  Container,
  rem,
} from "@mantine/core";
import { useContext } from "react";
import { ApiContext } from "../../Context/DataContext";
// import { Grid } from "antd";

const useStyles = createStyles((theme) => ({
  card: {
    border: 0,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  title: {
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

  body: {
    // padding: theme.spacing.md,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
    // gap: "240px",
  },
}));

export const Offer = () => {
  const { offer } = useContext(ApiContext);
  const { classes } = useStyles();
  return (
    <Container>
      <div className="py-12">
        <div className={classes.subTitle}>
          <p>---check it out---</p>
        </div>
        <div className={classes.heading} color="#151515">
          <h1> Today's Offer</h1>
        </div>
      </div>
      <div className="pt-8">
        <p className={classes.order}>ORDER YOUR FAVOURITE FOOD</p>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2 py-8">
        {offer.map((item) => (
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
                  className={classes.title}
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
  );
};
