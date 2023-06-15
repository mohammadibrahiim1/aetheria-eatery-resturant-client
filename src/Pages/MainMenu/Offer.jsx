import {
  createStyles,
  Card,
  Image,
  Avatar,
  Text,
  Group,
  Container,
} from "@mantine/core";
import { useContext } from "react";
import { ApiContext } from "../../Context/DataContext";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },

  body: {
    // padding: theme.spacing.md,
    display: "flex",
    justifyContent: "space-between",
    // alignItems: "center",
  },
}));

export const Offer = () => {
  const { offer } = useContext(ApiContext);
  const { classes } = useStyles();
  return (
    <Container className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2">
      {offer.map((item) => (
        <div>
          <Card withBorder radius="md" p={0} className={classes.card}>
            <Group noWrap spacing={0}>
              {/* <Image src={item.image} height={140} width={140} /> */}
              <div className="flex align-center gap-32 lg:gap-48">
                <Text
                  transform="uppercase"
                  color="dimmed"
                  weight={700}
                  size="xs"
                >
                  {item.name}
                </Text>
                <Text className={classes.title}  mb="md">
                  {item.price}
                </Text>
                {/* <Group noWrap spacing="xs">
                  <Group spacing="xs" noWrap>
                    <Avatar size={20} src={author.avatar} />
                    <Text size="xs">{author.name}</Text>
                  </Group>
                  <Text size="xs" color="dimmed">
                    •
                  </Text>
                  <Text size="xs" color="dimmed">
                    {date}
                  </Text>
                </Group> */}
              </div>
              {/* <div>
              <Text
                  transform="uppercase"
                  color="dimmed"
                  weight={700}
                  size="xs"
                >
                  {item.name}
                </Text>
              </div> */}
            </Group>
          </Card>
        </div>
      ))}
    </Container>
  );
};
