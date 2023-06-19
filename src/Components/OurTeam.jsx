import { Carousel } from "@mantine/carousel";
import { Avatar, Button, Paper, Text } from "@mantine/core";
import { useEffect } from "react";
import { useState } from "react";

export const OurTeam = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/team")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTeams(data);
      });
  }, []);
  return (
    <Carousel
      className="py-16"
      withIndicators
      height={200}
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
              radius="md"
              withBorder
              p="lg"
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[8]
                    : theme.white,
              })}
            >
              <Avatar src={member.image} size={120} radius={120} mx="auto" />
              <Text ta="center" fz="lg" weight={500} mt="md">
                {member.name}
              </Text>
              <Text ta="center" c="dimmed" fz="sm">
                {member.role}
              </Text>

              <Button variant="default" fullWidth mt="md">
                Send message
              </Button>
            </Paper>
          </Carousel.Slide>
        </>
      ))}

      {/* <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide> */}
      {/* ...other slides */}
    </Carousel>
  );
};
