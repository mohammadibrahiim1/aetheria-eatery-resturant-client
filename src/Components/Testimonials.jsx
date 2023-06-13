import { Carousel } from "@mantine/carousel";
import { Container, Rating, Text, createStyles, rem } from "@mantine/core";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";
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
    color: "#CD9003",
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
    textAlign: "center",
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
    fontSize: rem(13),
    width: "80%",
    marginTop: theme.spacing.xs,
    // textTransform: "uppercase",
    margin: "auto",
    textAlign: "center",
    // paddingBottom: theme.spacing.xs,
  },

  rating: {
    width: rem(100),
    height: rem(50),
    opacity: 0.7,
    fontWeight: 700,
    margin: "auto",
    textTransform: "uppercase",
    marginTop: "120px",
  },
}));
export const Testimonials = () => {
  const { classes } = useStyles();
  return (
    <Container className="py-28" id="#Home">
      {" "}
      <div className={classes.heading} color="#151515">
        <h1>Testimonials</h1>
      </div>
      <div className={classes.subTitle}>
        <p>---What Our Client Says!---</p>
      </div>
      <Carousel
        maw={920}
        mx="auto"
        height={380}
        nextControlIcon={<IconArrowRight size={16} />}
        previousControlIcon={<IconArrowLeft size={16} />}
      >
        <Carousel.Slide>
          <Rating defaultValue={4} className={classes.rating} />
          <Text className={classes.subTitle} size="xs">
            {/* {item.category} */}
            <p>
              Various version have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like). It
              is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.
            </p>
          </Text>
          <Text className={classes.title} size="xs">
            {/* {item.category} */}
            <p>John Doe</p>
          </Text>
        </Carousel.Slide>
        <Carousel.Slide>2</Carousel.Slide>
        <Carousel.Slide>3</Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
    </Container>
  );
};
