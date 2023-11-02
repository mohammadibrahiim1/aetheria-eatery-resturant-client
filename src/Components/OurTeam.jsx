import { Carousel } from "@mantine/carousel";
import { Avatar, Button, Paper, Text, Title, createStyles, rem } from "@mantine/core";
import { useEffect, useState } from "react";
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
    color: "#c33",
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

export const OurTeam = () => {
  const [teams, setTeams] = useState([]);
  const { classes } = useStyles();

  useEffect(() => {
    fetch("https://resturant-website-server.vercel.app/team")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTeams(data);
      });
  }, []);
  return (
    <div className="py-28">
      <div>
        <Title fz={"32px"} fw={700} c={"#2A435D"} tt={"uppercase"} align="center">
          Order Online
        </Title>
      </div>
      <div className={classes.subTitle}>
        <p>---From 11:00am to 10:00pm---</p>
      </div>

      <Carousel
        className=""
        withIndicators
        //   height={200}
        slideSize="33.333333%"
        slideGap="md"
        loop
        align="start"
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
      >
        {teams.map((member) => (
          <>
            <Carousel.Slide>
              {" "}
              <Paper
                h={350}
                radius="md"
                withBorder
                p="lg"
                sx={(theme) => ({
                  backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
                })}
              >
                <Avatar src={member.image} size={120} radius={120} mx="auto" />
                <Text ta="center" fz="lg" weight={500} mt="md">
                  {member.name}
                </Text>
                <Text ta="center" c="dimmed" fz="sm">
                  {member.role}
                </Text>
                <Text ta="center" c="dimmed" fz="sm">
                  {member.description}
                </Text>

                <Button variant="default" fullWidth mt="md">
                  Send message
                </Button>
              </Paper>
            </Carousel.Slide>
          </>
        ))}
      </Carousel>
    </div>
  );
};
