import { Button, Container, Overlay, Text, Title, createStyles, rem } from "@mantine/core";
import React from "react";
import { OurTeam } from "./OurTeam";
import GoogleMap from "./GoogleMap";
import { Link } from "react-router-dom";
// import { GoogleMap } from "./GoogleMap";
const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    width: "100%",
  },

  title: {
    color: "#FFF8EE",

    fontSize: "35px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
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

  body: {
    padding: theme.spacing.md,
  },

  controls: {
    marginTop: `calc(${theme.spacing.xs}* 1.5)`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  control: {
    height: rem(28),
    fontSize: theme.fontSizes.sm,
    color: "#B70C1C",
  },

  wrapper: {
    position: "relative",
    marginTop: "60px",
    paddingTop: rem(200),
    paddingBottom: rem(160),
    backgroundImage: "url(https://i.ibb.co/FWs2YYD/image-about-bg.png)",
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

  secondaryControl: {
    color: theme.white,
    backgroundColor: "rgba(255, 255, 255, .4)",

    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, .45) !important",
    },
  },

  text_primary: {
    color: "#2A435D",
    textAlign: "justify",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },

  text_secondary: {
    color: "#2A435D",
    textAlign: "justify",
    marginTop: "21px",

    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },

  title_secondary: {
    color: "#C33",
    textAlign: "center",
    fontSize: "35px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },

  story_paragraph: {
    paddingTop: "10px",
    color: "#2A435D",
    textAlign: "justify",
    width: "511px",
    height: "177px",
    flexShrink: 0,
    
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },

  chef_title: {
    color: "#C33",
    textAlign: "justify",
    fontSize: "25px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
  },
  chef_subTitle: {
    color: "#2A435D",
    textAlign: "justify",

    
    fontSize: "35px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
  chef_text: {
    color: "#2A435D",
    textAlign: "justify",
    width: "609px",
    paddingTop: "18px",
    
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
}));

const specialService = [
  {
    id: 1,
    name: "BirthDay Party",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 2,
    name: "Wedding Party",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 3,
    name: "Anniversary Party",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

const AboutUs = () => {
  const { classes } = useStyles();
  return (
    <div>
      <section mt={45}>
        <div>
          <div className={classes.wrapper}>
            <Overlay color="#000" opacity={0.65} zIndex={1} />

            <div className={classes.inner}>
              <Title className={classes.title} align="center">
                About us
              </Title>

              <div>
                <Text size="lg" className={classes.description}>
                  Read our Story, How we started and about the Team
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Container size={"lg"}>
          {" "}
          <div class="py-16 bg-white">
            <div class="container m-auto border-2 rounded-lg border-indigo-500 ">
              <div class="space-y-6 md:space-y-0 md:flex justify-between  lg:items-center ">
                <div class="md:5/12 lg:w-5/12 py-8 ps-12">
                  <img
                    src="https://i.ibb.co/L8LK1fc/image-about-1.png"
                    alt=""
                    loading="lazy"
                    width="full"
                    height="full"
                  />
                </div>
                <div class="md:7/12 lg:w-6/12 pe-12">
                  <Text class={classes.text_primary}>
                    Opaleye yellowtail snapper, velvet catfish, graveldiver banded killifish, Old World rivuline
                    catalufa eagle ray Moorish idol. Herring smelt barbeled dragonfish, tommy ruff.
                  </Text>
                  <Text class={classes.text_secondary}>
                    Queen danio velvet catfish Sacramento blackfish, bullhead shark, Colorado squawfish Russian sturgeon
                    clown triggerfish swamp-eel paradise fish. Hake cookie-cutter shark silver carp hawkfish snipe eel
                    armorhead catfish, moray eel silverside! Bluegill toadfish, orangespine unicorn fish. Manta Ray
                    Moorish idol
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div class="py-8 bg-white">
            <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <Title className={classes.title_secondary}>Our story</Title>
              <div class="flex justify-between mt-12 gap-12">
                <div class={classes.story_paragraph}>
                  <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passage
                  </Text>
                </div>
                <div>
                  <img src="https://i.ibb.co/Vx0h6DX/image-our-Story-1.png" alt="our-story-img" srcSet="" />
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div className="h-[300px] bg-[#FFDFDF] mt-5">
          <Container className="flex justify-between items-center gap-5" size={"lg"}>
            <div>
              <Title className={classes.chef_title}>Tasty and crunchy</Title>
              <Title className={classes.chef_subTitle}>Our chef</Title>
              <Text className={classes.chef_text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidition ullamco
                laboris nisi ut aliquip ex ea commodo condor consectetur adipiscing elit, sed do eiusmod tempor
                incidition ullam.
              </Text>
              <Link to={"/shop"} className="flex justify-end">
                <div>
                  <Button
                    className="border-indigo-500"
                    pl={55}
                    pr={55}
                    size="md"
                    radius={"sm"}
                    pos={"relative"}
                    top={"25px"}
                    left={"100px"}
                    variant="outline"
                    m={"auto"}
                    c={"indigo"}
                  >
                    View Our All Menu
                  </Button>
                </div>
              </Link>
            </div>
            <div>
              <img
                src="https://i.ibb.co/cJ4SVRh/image-our-Chef.png"
                style={{ width: "332px", height: "300px" }}
                alt=""
                srcset=""
              />
            </div>
          </Container>
        </div>
      </section>

      <Container size={"lg"}>
        <div className="mt-16 mb-10">
          <Title fz={"32px"} fw={700} c={"#2A435D"} tt={"uppercase"} align="center">
            Special Service
          </Title>
          <Text c={"#C33"} fz={"15px"} align="center">
            What Special services we are offering now
          </Text>
        </div>

        <div className="flex justify-evenly items-center gap-3 ">
          {specialService.map((service) => (
            <>
              <div className="border border-indigo-300 rounded-md py-12 px-3 ">
                <Title fz={"28px"} align="center" c={"#c33"}>
                  {service.name}
                </Title>
                <Text c={"#2A435D"} fz={"12px"} align="center" w={325}>
                  {service.details}
                </Text>
              </div>
            </>
          ))}
        </div>
      </Container>

      <Container size={"lg"} className="py-18">
        <div>
          <OurTeam></OurTeam>
        </div>
      </Container>
      <div>
        <GoogleMap></GoogleMap>
      </div>
    </div>
  );
};

export default AboutUs;
