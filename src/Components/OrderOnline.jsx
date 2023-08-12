import { Carousel } from "@mantine/carousel";
import React, { useContext } from "react";
import { ApiContext } from "../Context/DataContext";
import { createStyles, Text, rem, Container, Card, Group, getStylesRef } from "@mantine/core";
import { LetStartOrdering } from "./LetStartOrdering";

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(380),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },

  title: {
    fontFamily: `Inter, sans-serif ${theme.fontFamily}`,
    fontWeight: 500,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(17),
    marginTop: theme.spacing.xs,
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

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },

  image: {
    ...theme.fn.cover(),
    ref: getStylesRef("image"),
    transition: "transform 500ms ease",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },

  overlay: {
    position: "absolute",
    top: "20%",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)",
  },

  content: {
    height: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    zIndex: 1,
  },

  bodyText: {
    color: theme.colors.dark[2],
    marginLeft: rem(7),
  },

  author: {
    color: theme.colors.dark[1],
    textTransform: "capitalize",
  },
}));

const OrderOnline = () => {
  const { classes } = useStyles();
  const { foodItems } = useContext(ApiContext);

  return (
    <div>
      <Container size={"lg"}>
        <LetStartOrdering></LetStartOrdering>
      </Container>
      <Container size={"lg"} className="py-28">
        <div className={classes.heading} color="#151515">
          <h1>Order Online</h1>
        </div>
        <div className={classes.subTitle}>
          <p>---From 11:00am to 10:00pm---</p>
        </div>

        <Carousel
          withIndicators
          height={400}
          slideSize="33.333333%"
          slideGap="md"
          loop
          align="start"
          breakpoints={[
            { maxWidth: "md", slideSize: "50%" },
            { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
          ]}
        >
          {foodItems &&
            foodItems?.map((item) => (
              <>
                <Carousel.Slide>
                  <Card p="lg" shadow="lg" className={classes.card} radius="md">
                    <div className={classes.image} style={{ backgroundImage: `url(${item.image})` }} />
                    <div className={classes.overlay} />

                    <div className={classes.content}>
                      <div>
                        <Text size="lg" className={classes.title} weight={500}>
                          {item.name}
                        </Text>

                        <Group position="apart" spacing="xs">
                          <Text size="sm" className={classes.author}>
                            {item.category}
                          </Text>
                        </Group>
                      </div>
                    </div>
                  </Card>
                </Carousel.Slide>
              </>
            ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default OrderOnline;
