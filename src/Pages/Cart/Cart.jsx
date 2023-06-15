import {
  createStyles,
  Card,
  Image,
  Text,
  Group,
  Container,
  Grid,
  Button,
  rem,
  // Rating,
} from "@mantine/core";
import { useContext, useState } from "react";
import { ApiContext } from "../../Context/DataContext";
import { IconTrash } from "@tabler/icons-react";
// import { hover } from "@testing-library/user-event/dist/hover";
// import { color } from "framer-motion";
import { Link } from "react-router-dom";

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
  controls: {
    marginTop: `calc(${theme.spacing.xs}* 1.5)`,

    // display: "flex",
    // justifyContent: "space-between",
    // alignItems: "center",
    // paddingLeft: theme.spacing.xs,
    // marginLeft: theme.spacing.md,

    // [theme.fn.smallerThan("xs")]: {
    //   flexDirection: "column",
    // },
  },
  control: {
    height: rem(32),
    fontSize: theme.fontSizes.sm,
    color: "#B70C1C",
    marginTop: "12px",
    width: "100%",
    border: "1px solid red",
    ":hover": {
      backgroundColor: "red",
      border: "1px solid red",
      transition: "0.5s",
      color: "white",
    },

    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.xs,
    },

    // [theme.fn.smallerThan("xs")]: {
    //   "&:not(:first-of-type)": {
    //     marginTop: theme.spacing.md,
    //     marginLeft: 0,
    //   },
    // },
  },
}));

const Cart = () => {
  const { classes } = useStyles();
  const { cart, removeItemFromCart, setTotalPrice, handleTotalPrice } =
    useContext(ApiContext);
  const [products, setProducts] = useState(cart);

  // const handleRemove = (productId) => {
  //   handleRemoveFoodItem(productId);
  // };

  const handleQuantityChange = (productId, quantity) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product._id === productId ? { ...product, quantity } : product
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
      <Container className="py-24">
        <div className={classes.subTitle}>
          <p>---check it out---</p>
        </div>
        <div className={classes.heading} color="#151515">
          <h1> Confirm Your Order</h1>
        </div>

        <Grid className="py-8">
          <Grid.Col md={6} lg={12}>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4  ">
              {products?.map((product) => (
                <>
                  <Card withBorder radius="md" p={0} className={classes.card}>
                    <Group noWrap spacing={0} key={product.id}>
                      <Image src={product.image} height={140} width={140} />
                      <div className={classes.body}>
                        <Text className={classes.title} mb="md">
                          {product.name}
                        </Text>
                        <Text className={classes.title} mb="md">
                          ${product.price * product.quantity}
                        </Text>
                        <div class="flex gap-32 lg:gap-48">
                          <input
                            onChange={(e) =>
                              handleQuantityChange(product._id, e.target.value)
                            }
                            class="h-8 w-8 border bg-white text-center text-xs outline-none"
                            type="number"
                            value={product.quantity}
                          />
                          <div position="center">
                            <Button
                              // defaultValue={4}
                              className={classes.control}
                              compact
                              variant="default"
                              size="xs"
                            >
                              {" "}
                              <IconTrash
                                onClick={() => removeItemFromCart(product._id)}
                              />
                            </Button>
                          </div>
                        </div>
                        <Group noWrap spacing="xs"></Group>
                      </div>
                    </Group>
                  </Card>
                </>
              ))}
            </div>
            <div className="py-8">
              {/* <Button variant="default" className="w-full">
                Checkout
              </Button> */}
            </div>
          </Grid.Col>
          <Grid.Col md={6} lg={12}>
            <Text
              variant="gradient"
              gradient={{ from: "#B70C1C", to: "#222222", deg: 90 }}
              sx={{ fontFamily: "Inter, sans-serif" }}
              ta="left"
              fz="xl"
              fw={700}
            >
              Bill Details
            </Text>
            <hr />
            <Text
              variant="gradient"
              gradient={{ from: "#B70C1C", to: "#222222", deg: 90 }}
              sx={{ fontFamily: "Inter, sans-serif" }}
              ta="left"
              fz="sm"
              fw={700}
            >
              <div className="py-8 ">
                {" "}
                <p className="pb-5">Subtotal: ${calculateSubTotal()}</p>
                <hr />
                <p className="pt-5">Total : ${calculateTotal()} </p>
              </div>
            </Text>
            <Link to="/checkout" position="center" className={classes.controls}>
              <Button
                // onClick={open,()=>setFoodItem()}
                onClick={() => handleTotalPrice(calculateTotal())}
                // open={open}
                compact
                className={classes.control}
                // variant="default"
                size="xs"
              >
                Checkout
              </Button>
            </Link>
            <Link to="/shop" position="center" className={classes.controls}>
              <Button
                // onClick={() => handleAddToCart(item)}
                compact
                className={classes.control}
                // variant="default"
                size="xs"
              >
                Add more item
              </Button>
            </Link>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};

export default Cart;
