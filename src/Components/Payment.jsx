// import { Elements } from "@stripe/react-stripe-js";
// // import { loadStripe } from "@stripe/stripe-js";
// import React, { useContext } from "react";
// import CheckoutForm from "./CheckoutForm";
// import { ApiContext } from "../Context/DataContext";
// import { loadStripe } from "@stripe/stripe-js";
// import { useLoaderData } from "react-router-dom";

// const stripePromise = loadStripe(
//   "pk_test_51MlpzGLrYWLOOZ8UljA5X1ANJMi0EXPD3KZWZmLIjyuv5DQgLe3I2dZvA4TPFfa4n0opSlz0POZ3wbxzcy27Necr005pDnWQh8"
// );
// console.log(stripePromise);

// const Payment = () => {
//   const orders = useLoaderData();
//   console.log(orders);
//   return (
//     <div>
//       <section className="mt-3 p-2">
//         <div>
//           <p className="text-sm text-indigo-500 mb-2">Payment Card Info</p>
//           <Elements stripe={stripePromise}>
//             <CheckoutForm orders={orders} />
//           </Elements>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Payment;

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
// import Loading from "../../Loading/Loading";
import CheckoutForm from "./CheckoutForm";
import { Container, Text } from "@mantine/core";

const stripePromise = loadStripe(
  "pk_test_51MlpzGLrYWLOOZ8UljA5X1ANJMi0EXPD3KZWZmLIjyuv5DQgLe3I2dZvA4TPFfa4n0opSlz0POZ3wbxzcy27Necr005pDnWQh8"
);

const Payment = () => {
  const orders = useLoaderData();

  // const navigation = useNavigation();

  // console.log(orders);
  const { totalPrice } = orders;
  // if (navigation.state === 'loading') {
  //     return <Loading></Loading>
  // }

  return (
    <Container m={"auto"} size={"lg"}>
      <Text c={"indigo"} fw={700} className="text-3xl mt-6 ml-20">
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
