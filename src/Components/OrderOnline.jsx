import { Carousel } from "@mantine/carousel";
import React, { useContext } from "react";
import { ApiContext } from "../Context/DataContext";
import {
  createStyles,
  Paper,
  Text,
  Title,
  //   Button,
  rem,
  Container,
} from "@mantine/core";

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

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

const OrderOnline = () => {
  const { classes } = useStyles();
  const { foodItems } = useContext(ApiContext);
  // console.log(foodItems);
  return (
    <div>
      <Container className="py-28">
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
                  {" "}
                  <Paper
                    shadow="md"
                    p="xl"
                    radius="md"
                    sx={{ backgroundImage: `url(${item.image})` }}
                    className={classes.card}
                  >
                    <div>
                      <Text className={classes.category} size="xs">
                        {item.category}
                      </Text>
                      <Title order={3} className={classes.title}>
                        {item.name}
                      </Title>
                    </div>
                    <Title className={classes.title}>${item.price}</Title>
                  </Paper>
                </Carousel.Slide>
              </>
            ))}

          {/* <Carousel.Slide>2</Carousel.Slide>
        <Carousel.Slide>3</Carousel.Slide> */}
          {/* ...other slides */}
        </Carousel>
      </Container>
    </div>
  );
};

export default OrderOnline;
