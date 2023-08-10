import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
// import { ApiContext } from "../Context/DataContext";



const CheckoutForm = ({ orderInfo }) => {
  const [cardError, setCardError] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  console.log(clientSecret);
  const stripe = useStripe();
  const elements = useElements();
  // const { orderInfo } = useContext(ApiContext);
  // const { user } = useContext(AuthContext);

  const { name, email, phone, city, state, totalPrice, zip, _id } = orderInfo;

  // const shippingCost = 10.0;
  // const totalPrice = total + shippingCost;

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ totalPrice }),
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
      // console.log("payment method", paymentMethod);
      setCardError("");
    }

    setProcessing(true);
    setPaymentSuccess("");

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      // '{PAYMENT_INTENT_CLIENT_SECRET}',
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
            // phone: phone,
            // city: city,
            // state: state,
            // zip: zip,
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
        placeOrderId: _id,
        name: name,
        email: email,
        phone: phone,
        city: city,
        state: state,
        zip: zip,
      };
      fetch("http://localhost:5000/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            setPaymentSuccess("Congrats! your payment completed");
            setTransactionId(paymentIntent.id);
            Navigate("/myOrder");
          }
        });
    }
    setProcessing(false);
    console.log("paymentIntent", paymentIntent);
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
        <button
          class="mt-8 border  w-full rounded-md bg-[#697BFF] hover:bg-[#4E60FF]  py-2  font-medium text-white cursor-pointer"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          {" "}
          confirm order
        </button>
        <p className="text-red-900 text-xs pt-4">{cardError}</p>
        {paymentSuccess && (
          <div>
            <p className="text-green-500 text-sm pt-4">{paymentSuccess}</p>{" "}
            <p className="text-green-500 text-sm"> your transactionId : {transactionId}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
