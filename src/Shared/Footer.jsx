import { ActionIcon, Group, createStyles, rem } from "@mantine/core";
import React from "react";
import {
  IconBrandTwitter,
  IconBrandFacebook,
  IconBrandInstagram,
} from "@tabler/icons-react";
// import { MantineLogo } from "@mantine/ds";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: theme.spacing.md,
    // paddingBottom: theme.spacing.xl,

    // [theme.fn.smallerThan("xs")]: {
    //   flexDirection: "column",
    // },
  },

  links: {
    // backgroundColor: "#1F2937",
    // justifyContent: "space-evenly",
    // [theme.fn.smallerThan("xs")]: {
    //   marginTop: theme.spacing.md,
    // },
  },
}));

const Footer = () => {
  const { classes } = useStyles();
  return (
    <div>
      <div
        id="footer"
        className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 self-center"
      >
        <div className="footer-left-side py-12">
          <h1 className="text-xl py-5 ">Contact Us</h1>
          <p>
            <span>
              123 ABS Street, Uni 21, Bangladesh <br /> +88 123456789 <br />
              Mon - Fri: 08:00 - 22:00
              <br />
              Sat - Sun: 10:00 - 23:00
            </span>
          </p>
        </div>

        <div className="footer-right-side py-12">
          <div>
            <h1 className=" text-xl py-5">Follow Us</h1>
            <p>join us on social media</p>{" "}
          </div>
          <div className={classes.inner}>
            <Group>
              <ActionIcon size="lg">
                <IconBrandTwitter size="2.05rem" stroke={1.5} />
              </ActionIcon>
              <ActionIcon size="lg">
                <IconBrandFacebook size="2.05rem" stroke={1.5} />
              </ActionIcon>
              <ActionIcon size="lg">
                <IconBrandInstagram size="2.05rem" stroke={1.5} />
              </ActionIcon>
            </Group>
          </div>
        </div>
      </div>
      <div className="bg-[#151515]">
        <p className="text-white text-sm py-4 text-center">
          Copyright © CulinaryCloud. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
