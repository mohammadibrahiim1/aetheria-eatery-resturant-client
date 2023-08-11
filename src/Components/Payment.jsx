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

const stripePromise = loadStripe(
  "pk_test_51MlpzGLrYWLOOZ8UljA5X1ANJMi0EXPD3KZWZmLIjyuv5DQgLe3I2dZvA4TPFfa4n0opSlz0POZ3wbxzcy27Necr005pDnWQh8"
);

const Payment = () => {
  const orders = useLoaderData();

  // const navigation = useNavigation();

  // console.log(orders);
  const { ProductName, totalPrice } = orders;
  // if (navigation.state === 'loading') {
  //     return <Loading></Loading>
  // }

  return (
    <div>
      <h1 className="text-3xl mt-6 ml-20">Payment for {ProductName}</h1>
      <p className="text-xl ml-20 mt-4">
        Please pay <strong>${totalPrice}</strong> for your orders{" "}
      </p>
      <div className="w-96 my-6">
        <Elements stripe={stripePromise}>
          <CheckoutForm orders={orders}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
