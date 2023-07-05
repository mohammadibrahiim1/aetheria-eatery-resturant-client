import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { ApiContext } from "../Context/DataContext";
import { AuthContext } from "../Context/UserContext";

const CheckoutForm = () => {
  const [cardError, setCardError] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState("");
  const [processing, setProccesing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  console.log(clientSecret);
  const stripe = useStripe();
  const elements = useElements();
  const { total } = useContext(ApiContext);
  const { user } = useContext(AuthContext);

  const shippingCost = 10.0;
  const totalPrice = total + shippingCost;

  useEffect(() => {
    const price = {
      totalPrice,
    };
    fetch("https://resturant-website-server.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(price),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      console.log("[payment method]", paymentMethod);
      setCardError("");
    }

    setProccesing(true);
    setPaymentSuccess("");

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(
        // '{PAYMENT_INTENT_CLIENT_SECRET}',
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: user.displayName,
              email: user.email,
            },
          },
        }
      );
    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    console.log("paymentIntent", paymentIntent);
    if (paymentIntent.status === "succeeded") {
      // setPaymentSuccess('Congrats! your payment completed')
      // setTransactionId(paymentIntent.id);
      console.log("card info", card);
      // store payment info in the database
      const payment = {
        price: totalPrice,
        transactionId: paymentIntent.id,
        orderId: paymentIntent.created,
        name: user.displayName,
        email: user.email,
      };
      fetch("https://resturant-website-server.vercel.app/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.insertedId) {
            setPaymentSuccess("Congrats! your payment completed");
            setTransactionId(paymentIntent.id);
            Navigate("/bookingInfo");
            window.location.reload();
          }
        });
    }
    setProccesing(false);
    // console.log("paymentIntent", paymentIntent);
  };

  return (
    <div>
      <form className="payment-card" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "15px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <p className="text-red-900 text-xs pt-4">{cardError}</p>
        {paymentSuccess && (
          <div>
            <p className="text-green-500 text-sm pt-4">{paymentSuccess}</p>{" "}
            <p className="text-green-500 text-sm">
              {" "}
              your transactionId : {transactionId}
            </p>
          </div>
        )}
        {/* <p className="text-red-900 text-xs pt-4">{paymentSuccess && <></>}</p> */}
        <div>
          <div class="flex items-center justify-between mt-4">
            <p class="text-sm font-medium text-gray-900">Subtotal</p>
            <p class="font-semibold text-gray-900">${total}</p>
          </div>
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">Shipping</p>
            <p class="font-semibold text-gray-900">${shippingCost}</p>
          </div>
        </div>
        <div class="mt-6 flex items-center justify-between">
          <p class="text-sm font-medium text-gray-900">Total</p>
          <p class="text-2xl font-semibold text-gray-900">${totalPrice}</p>
        </div>

        <button
          class="mt-8 border  w-full rounded-md bg-[#697BFF] hover:bg-[#4E60FF]  py-2  font-medium text-white"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Submit Order
        </button>

        {/* <p className="text-danger">{cardError}</p> */}
        {/* {paymentSuccess && (
          <div>
            <p className="text-success">{paymentSuccess}</p>
            <p className="text-success">
              {" "}
              your transactionId : {transactionId}
            </p>
          </div>
        )} */}
      </form>
    </div>
  );
};

export default CheckoutForm;
