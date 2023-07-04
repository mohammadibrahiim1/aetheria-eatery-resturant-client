import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { ApiContext } from "../Context/DataContext";

const CheckoutForm = () => {
  const [cardError, setCardError] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState("");
  const [processing, setProccesing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { total } = useContext(ApiContext);

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // totalPrice,
      }),
    });
  }, []);

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
      // console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setProccesing(true);
    setPaymentSuccess("");
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(
        clientSecret,
        // '{PAYMENT_INTENT_CLIENT_SECRET}',
        {
          payment_method: {
            card: card,
            billing_details: {
              // name: userName,
              // email: email,
            },
          },
        }
      );
    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      console.log("card info", card);
      // store payment info in the database
      const payment = {
        // totalPrice,

        transactionId: paymentIntent.id,
        // email: email,
        // bookingId: _id,
        // user: userName,
        // email,
        // name: name,
      };
      fetch(
        "https://travel-zone-server-mohammadibrahiim1.vercel.app/payments",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(payment),
        }
      )
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

  const shippingCost = 10.0;
  const totalPrice = total + shippingCost;

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
        <div>
          <div class="flex items-center justify-between mt-12">
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
          disabled={!stripe}
        >
          Place Order
        </button>

        <p className="text-danger">{cardError}</p>
        {paymentSuccess && (
          <div>
            <p className="text-success">{paymentSuccess}</p>
            <p className="text-success">
              {" "}
              your transactionId : {transactionId}
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
