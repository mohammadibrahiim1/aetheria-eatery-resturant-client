import { createStyles, Image, Container, Group, Text, rem, Card } from "@mantine/core";

import { useContext } from "react";
import { ApiContext } from "../../Context/DataContext";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  content: {
    maxWidth: rem(480),
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,
    width: "320px",
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({ variant: "light", color: theme.primaryColor }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}));

export function CheckOutMenu({ totalItems }) {
  const { allItems, currentPage, setCurrentPage, itemsPerPage, setItemPerPage } = useContext(ApiContext);
  const { classes } = useStyles();

  const totalPage = Math.ceil(totalItems / itemsPerPage);

  let pageNumbers = [...Array(totalPage).keys()];
  let options = [8, 16, 24];

  const handleSelectChange = (e) => {
    setItemPerPage(parseInt(e.target.value));
    setCurrentPage(0);
  };

  return (
    <div>
      <Container size={"lg"}>
        <div className="text-center">
          <Text c={"orange"} fw={"700"} fz={25} fs={"italic"}>
            Check Out Our Menu
          </Text>
          <Text c={"#748FFC"} fw={"500"} fz={13}>
            Demoralized by the charms of pleasure of the moment so blinded except to some advantage.
          </Text>
        </div>

        <div className={classes.inner}>
          <div className={classes.content}>
            {allItems?.slice(0, 8).map((item) => (
              <div>
                <Card shadow="sm" radius="md" p={5} className={classes.card}>
                  <Group noWrap spacing={0}>
                    <div className="flex items-center gap-1">
                      <Text transform="uppercase" color="#CC3333" weight={700} size="sm">
                        {item.name}--------------------
                      </Text>

                      <Text c={"#CC3333"} fw={600} className={classes.price} size="sm">
                        ${item.price}
                      </Text>
                    </div>
                  </Group>

                  <div>
                    <Text color="#000" weight={700} size="xs">
                      {item.description}
                    </Text>
                  </div>
                </Card>
              </div>
            ))}
            <div className="text-center">
              <Text fw={600} c={"#FBBD23"} py={10}>
                Current page : {currentPage} and items per page: {itemsPerPage}
              </Text>
              {pageNumbers.map((number) => (
                <button onClick={() => setCurrentPage(number)} key={number} className="btn-sm btn mx-2 btn-warning">
                  <Text px={10}>{number}</Text>
                </button>
              ))}
              <select
                className="border rounded-lg p-1 bg-[#FBBD23]  "
                value={itemsPerPage}
                onChange={handleSelectChange}
              >
                {options.map((option) => (
                  <option className="bg-[#FBBD23]" key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <Image src="https://i.ibb.co/G2pXj4z/Rectangle-40.png" alt="food img" className={classes.image} />
        </div>
      </Container>
    </div>
  );
}
