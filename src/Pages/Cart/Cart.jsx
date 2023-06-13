import {
  createStyles,
  Card,
  Image,
  Text,
  Group,
  Container,
  Grid,
} from "@mantine/core";
import { useContext, useState } from "react";
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
    padding: theme.spacing.md,
  },
}));

const Cart = () => {
  const { classes } = useStyles();
  const { cart } = useContext(ApiContext);
  const [products, setProducts] = useState(cart);

  const handleQuantityChange = (productId, quantity) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, quantity } : product
      )
    );
  };

  const calculateTotal = () => {
    return products.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };
  const calculateSubTotal = () => {
    return products.reduce((subTotal, product) => {
      return subTotal + product.price * product.quantity;
    }, 0);
  };

  return (
    <div>
      <Container className="">
        <div className={classes.subTitle}>
          <p>---check it out---</p>
        </div>
        <div className={classes.heading} color="#151515">
          <h1> Confirm Your Order</h1>
        </div>

        <Grid className="py-8">
          <Grid.Col md={6} lg={9}>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4  ">
              {products?.map((product) => (
                <>
                  <Card withBorder radius="md" p={0} className={classes.card}>
                    <Group noWrap spacing={0} key={product.id}>
                      <Image src={product.image} height={140} width={140} />
                      <div className={classes.body}>
                        <Text className={classes.title} mt="xs" mb="md">
                          {product.name}
                        </Text>
                        <Text className={classes.title} mt="xs" mb="md">
                          ${product.price * product.quantity}
                        </Text>
                        <div class="flex justify-between items-center   border-gray-100">
                          <input
                            onChange={(e) =>
                              handleQuantityChange(
                                product.id,
                                parseInt(e.target.value)
                              )
                            }
                            class="h-8 w-8 border bg-white text-center text-xs outline-none"
                            type="number"
                            value={product.quantity}
                          />
                        </div>
                        <Group noWrap spacing="xs"></Group>
                      </div>
                    </Group>
                  </Card>
                </>
              ))}
            </div>
          </Grid.Col>
          <Grid.Col md={6} lg={3}>
            <Text
              variant="gradient"
              gradient={{ from: "#B70C1C", to: "#222222", deg: 90 }}
              sx={{ fontFamily: "Inter, sans-serif" }}
              ta="left"
              fz="xl"
              fw={700}
            >
              {" "}
              Bill Details
            </Text>
            <Text
              variant="gradient"
              gradient={{ from: "#B70C1C", to: "#222222", deg: 90 }}
              sx={{ fontFamily: "Inter, sans-serif" }}
              ta="left"
              fz="sm"
              fw={700}
            >
              {" "}
              <div className="py-8 ">
                {" "}
                <p className="pb-5">Subtotal: ${calculateSubTotal()}</p>
                <hr />
                <p className="pt-5">Total : ${calculateTotal()} </p>
              </div>
            </Text>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};

export default Cart;
