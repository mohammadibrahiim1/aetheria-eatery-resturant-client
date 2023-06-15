import { Card, Image, Text, Badge, Button, Group, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

// function Demo() {
//     const [opened, { open, close }] = useDisclosure(false)}

export const ShopPageCard = ({
  item,
  addItemToCart,
  //   removeItemFromCart,
  //   handleCategoryChange,
}) => {
  const [opened, { open, close }] = useDisclosure(false);

  const { image, name, description, price, category } = item;
  return (
    <div>
      <Modal opened={opened} onClose={close} title="About Dishes" centered>
        <Text size="sm" color="dimmed">
          {name}
        </Text>

        <Text size="sm" color="dimmed">
          {description}
        </Text>
      </Modal>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image src={image} height={160} alt="Norway" />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{name}</Text>

          <Badge color="pink" variant="light">
            $ {price}
          </Badge>
        </Group>
        <Text weight={500}>{category}</Text>

        <Text size="sm" color="dimmed">
          {description.slice(0, 60)}...
        </Text>

        <div className="flex items-center">
          <Button
            onClick={() => addItemToCart(item)}
            variant="light"
            color="blue"
            fullWidth
            mt="md"
            radius="md"
          >
            Add To Cart
          </Button>
          <Button
            onClick={open}
            variant="light"
            color="blue"
            fullWidth
            mt="md"
            radius="md"
          >
            more
          </Button>
        </div>
      </Card>
    </div>
  );
};
