import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

export const ShopPageCard = ({ item }) => {
  const { image, name, description, price, category } = item;
  return (
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
        {description}
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Add To Cart
      </Button>
    </Card>
  );
};
