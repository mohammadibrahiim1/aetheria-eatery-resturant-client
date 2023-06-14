import { Container, createStyles, rem } from "@mantine/core";
import React from "react";
import Header from "./Header";
const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    width: "100%",
  },

  title: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
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

  body: {
    padding: theme.spacing.md,
  },

  controls: {
    marginTop: `calc(${theme.spacing.xs}* 1.5)`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingLeft: theme.spacing.xs,
    // marginRight: theme.spacing.md,

    // [theme.fn.smallerThan("xs")]: {
    //   flexDirection: "column",
    // },
  },
  control: {
    height: rem(28),
    fontSize: theme.fontSizes.sm,
    color: "#B70C1C",

    // "&:not(:first-of-type)": {
    // marginLeft: theme.spacing.xs,
    // },

    // [theme.fn.smallerThan("xs")]: {
    //   "&:not(:first-of-type)": {
    //     marginTop: theme.spacing.md,
    //     marginLeft: 0,
    //   },
    // },
  },
}));

const AboutUs = () => {
  const { classes } = useStyles();
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <Container>
        {/* <!-- component --> */}
        <div class="py-16 bg-white">
          <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div class="md:5/12 lg:w-5/12">
                <img
                  src="https://i.ibb.co/Zd1b1Ww/header-img.png"
                  alt=""
                  loading="lazy"
                  width="full"
                  height="full"
                />
              </div>
              <div class="md:7/12 lg:w-6/12">
                <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">
                  Our Story | Where it all began
                </h2>
                <p class="mt-6 text-gray-600">
                  We've been on quite a journey over the last six decades which
                  started in the rolling hills of Emilia-Romagna - the region of
                  northern Italy which produces so many of the amazing foods
                  which are key to the Italian kitchen. Prosciutto di Parma,
                  Balsamico di Modena and Parmigiana all come from this part of
                  Italy - and its where the inspiration for Ponti's Italian
                  Kitchen was born.
                </p>
                {/* <p class="mt-4 text-gray-600">
                  {" "}
                  Nobis minus voluptatibus pariatur dignissimos libero quaerat
                  iure expedita at? Asperiores nemo possimus nesciunt dicta
                  veniam aspernatur quam mollitia.
                </p> */}
              </div>
            </div>
          </div>
        </div>
        <div class="py-16 bg-white">
          <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div class="">
                {/* <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">
                  Nuxt development is carried out by passionate developers
                </h2> */}
                <p class="mt-6 text-gray-600">
                  <p className="text-center font-semibold py-4 text-lg">
                    About Us
                  </p>
                  There are only two ingredients involved in the production of
                  Prosciutto di Parma, a leg of pork with nothing but sea salt.
                  This increases the tenderness of the meat, and gives it a
                  characteristic sweet flavour. The similarity between
                  present-day Parma Ham and its “ancestor” is evident and
                  nowadays the tradition of Parma Ham is as strong as ever.
                </p>
                <p class="mt-4 text-gray-600">
                  {" "}
                  Our Sheffield restaurant is in prime position at the
                  beautifully designed and award-winning Fox Valley. We were
                  proud to be part of the original line up when the centre
                  opened in 2016 and we've been bringing our unique take on
                  family friendly Italian dining to our fabulous Yorkshire
                  foodies ever since. Our warm and welcoming restaurant with a
                  stunning private dining room has built up a great reputation
                  and we’re proud to be part of this beautiful part of
                  Yorkshire.
                </p>
              </div>
              {/* <div class="md:5/12 lg:w-5/12">
                <img
                  src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                  alt=""
                  loading="lazy"
                  width="auto"
                  height="auto"
                />
              </div> */}
            </div>
          </div>
        </div>
      </Container>
      <Container className="py-28">
        <div className={classes.subTitle}>
          <p>---check it out---</p>
        </div>
        <div className={classes.heading} color="#151515">
          <h1 className="pb-5"> See Our Gallery</h1>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* <div class="grid gap-4"> */}
          <div>
            <img
              class="h-full max-w-full rounded-lg"
              src="https://i.ibb.co/TrqW21P/11-Best-Thai-Food-Dishes-Green-Curry.webp"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-full max-w-full rounded-lg"
              src="https://i.ibb.co/yN5rFD4/Shrimp-Korma.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-full max-w-full rounded-lg"
              src="https://i.ibb.co/vdGs7vJ/lime-refreshment.jpg"
              alt=""
            />
          </div>
          {/* </div> */}
          {/* <div class="grid gap-4"> */}
          <div>
            <img
              class="h-full max-w-full rounded-lg"
              src="https://i.ibb.co/M8H6Ss9/m-monster.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-full max-w-full rounded-lg"
              src="https://i.ibb.co/8DzxP5K/french-vanilla-latte.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-full max-w-full rounded-lg"
              src="https://i.ibb.co/VHJ3G7m/curry.png"
              alt=""
            />
          </div>
          {/* </div> */}
          {/* <div class="grid gap-4"> */}
          <div>
            <img
              class="h-full max-w-full rounded-lg"
              src="https://i.ibb.co/2Ww9LGS/onion-rings.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-full max-w-full rounded-lg"
              src="https://i.ibb.co/XFtpG0B/paneer-sticks.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-full max-w-full rounded-lg"
              src="https://i.ibb.co/g4SqC88/spicy-basil-chicken.png"
              alt=""
            />
          </div>
          {/* </div> */}
          {/* <div class="grid gap-4"> */}
          <div>
            <img
              class="h-full max-w-full rounded-lg"
              src="https://i.ibb.co/SPf3NGT/11-Best-Thai-Food-Dishes-Mango-Sticky-Rice.webp"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-full max-w-full rounded-lg"
              src="https://i.ibb.co/Zd1b1Ww/header-img.png"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-full max-w-full rounded-lg"
              src="https://i.ibb.co/QpQ3Jgz/11-Best-Thai-Food-Dishes-Yellow-Curry.webp"
              alt=""
            />
          </div>
          {/* </div> */}
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
