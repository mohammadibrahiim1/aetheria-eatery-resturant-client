import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  rem,
  Center,
} from "@mantine/core";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: `calc(${theme.spacing.xl} * 6)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    fontSize: rem(35),
    lineHeight: 1.2,
    fontWeight: 700,
    fontStyle: "italic",

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
      textAlign: "center",
    },
  },

  control: {
    color: "white",
    backgroundColor: "orange !important",
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,
    width: "347px",
    height: "313px",
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}));

export function Delivery() {
  const { classes } = useStyles();
  return (
    <div>
      <Container size={"lg"}>
        <div className="lg:flex  grid md:grid-cols-2  lg:grid-cols-2 sm:grid-cols-1 justify-between items-center gap-5 py-48">
          <div className={classes.content}>
            <Title className={classes.title}>
              {" "}
              <span className="text-orange-500">A Moments Of</span> Delivered On
              Right Time & Place
            </Title>
            <Text color="dimmed" ta={"justify"} mt="md" fz={"sm"}>
              Food Khan is a restaurant, bar and coffee roastery located on a
              busy corner site in Farringdon's Exmouth Market. With glazed
              frontage on two sides of the building, overlooking the market and
              a bustling London inteon.
            </Text>

            <Group mt={30} className="flex justify-between items-center">
              <div>
                <Text fz={"xs"} fw={700} align="center" c={"orange"}>
                  Delivery Order
                </Text>
                <Text fz={"xs"} fw={700}>
                  +880 1630 225 015
                </Text>
              </div>
              <Link to="/shop">
                <Button radius="md" size="md" className={classes.control}>
                  Order Now
                </Button>
              </Link>
            </Group>
          </div>
          <div>
            <Image className="mt-5" src="https://i.ibb.co/y5pSJNZ/image-delivery.png" />
          </div>
        </div>
      </Container>
    </div>
  );
}
