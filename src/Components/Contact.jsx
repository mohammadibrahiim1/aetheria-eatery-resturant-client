import React from "react";
import { createStyles, Text, rem, Container } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    display: "flex",
    backgroundImage: theme.fn.gradient({ from: "#6677f4", to: "#4E60FF", deg: -60 }),
    color: theme.white,
    // backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
    //   theme.colors[theme.primaryColor][7]
    // } 100%)`,
    padding: `calc(${theme.spacing.xl} * 1.7)`,
    borderRadius: theme.radius.md,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  title: {
    color: theme.white,
    textTransform: "uppercase",
    fontWeight: 700,
    fontSize: theme.fontSizes.sm,
  },

  count: {
    color: theme.white,
    fontSize: rem(28),
    lineHeight: 1,
    fontWeight: 700,
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
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
  description: {
    color: theme.colors[theme.primaryColor][0],
    fontSize: theme.fontSizes.sm,
    marginTop: rem(5),
    // width: "91%",
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

  stat: {
    flex: 1,

    "& + &": {
      paddingLeft: theme.spacing.xl,
      marginLeft: theme.spacing.xl,
      borderLeft: `${rem(1)} solid ${theme.colors[theme.primaryColor][3]}`,

      [theme.fn.smallerThan("sm")]: {
        paddingLeft: 0,
        marginLeft: 0,
        borderLeft: 0,
        paddingTop: theme.spacing.xl,
        marginTop: theme.spacing.xl,
        borderTop: `${rem(1)} solid ${theme.colors[theme.primaryColor][3]}`,
      },
    },
  },
}));

const data = [
  {
    // title: "one",
    stats: "Phone",
    description: "+38 (012) 34 56 789",
  },
  {
    //  title: "one",
    stats: "Contact Us",
    description: "123 ABS Street, Uni 21, Bangladesh ,+88 123456789",
  },
  {
    // title: "one",
    stats: "working Hours",
    description: "Mon - Fri: 08:00 - 22:00 , Sat - Sun: 10:00 - 23:00",
  },
];

const Contact = () => {
  const { classes } = useStyles();
  const stats = data.map((stat) => (
    <div key={stat.title} className={classes.stat}>
      <Text className={classes.count}>{stat.stats}</Text>
      {/* <Text className={classes.title}>{stat.title}</Text> */}
      <Text className={classes.description}> {stat.description}</Text>
    </div>
  ));
  return (
    <div className="py-28">
      <div className="py-5">
        <Text c={"#748FFC"} fs={"italic"} align="center" uppercase fz={"sm"} fw={600}>
          Contact us
        </Text>
        <Text fz={25} fs={"italic"} c={"orange"} align="center" fw={700}>
          Contact with us
        </Text>
      </div>
      <Container size={"lg"} className={classes.root}>
        {stats}
      </Container>
    </div>
  );
};

export default Contact;
