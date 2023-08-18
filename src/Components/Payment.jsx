import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { Container, Text } from "@mantine/core";

const stripePromise = loadStripe(
  "pk_test_51MlpzGLrYWLOOZ8UljA5X1ANJMi0EXPD3KZWZmLIjyuv5DQgLe3I2dZvA4TPFfa4n0opSlz0POZ3wbxzcy27Necr005pDnWQh8"
);

const Payment = () => {
  const orders = useLoaderData();
  const { totalPrice } = orders;

  return (
    <Container m={"auto"} size={"lg"}>
      <Text c={"indigo"} fw={700} className="text-3xl mt-20 ml-20">
        Complete your payment
      </Text>
      <Text c={"#575757"} fw={500} className="text-sm mt-2 ml-20">
        To start your subscription, input your card details to make payment. You will be redirected to your banks
        authorization page .
      </Text>

      <div className="my-12">
        <Text c={"orange"} fw={700} fz={18} className="text-xl ml-20 pb-2  text-left">
          Please pay <strong className="text-indigo-500 px-3 ">${totalPrice}</strong> for your orders{" "}
        </Text>
        <div className="w-1/2 h-96 ">
          <Elements stripe={stripePromise}>
            <CheckoutForm orders={orders}></CheckoutForm>
          </Elements>
        </div>
      </div>
    </Container>
  );
};

export default Payment;
