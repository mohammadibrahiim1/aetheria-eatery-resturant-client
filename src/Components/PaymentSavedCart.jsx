import { Card, Progress, Text } from "@mantine/core";
import React from "react";

const PaymentSavedCart = () => {
  return (
    <div>
      <Card className="w-80"
        withBorder
        radius="md"
        padding="xl"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        })}
      >
        <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
          Card Number
        </Text>
        <Text fz="lg" fw={500}>
          Your Name
        </Text>
        {/* <Progress value={54.31} mt="md" size="lg" radius="xl" /> */}
      </Card>
    </div>
  );
};

export default PaymentSavedCart;
