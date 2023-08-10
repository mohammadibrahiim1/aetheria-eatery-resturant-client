import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { ApiContext } from "../Context/DataContext";
// import { ApiContext } from "../Context/DataContext";

const CheckoutForm = ({ orders }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [cardError, setCardError] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  console.log(clientSecret);

  // const { orderInfo } = useContext(ApiContext);
  // const { user } = useContext(AuthContext);

  const { name, email, phone, city, state, totalPrice, zip, _id } = orders;

  // const shippingCost = 10.0;
  // const totalPrice = total + shippingCost;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
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
    console.log(event);
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
      console.log("payment method", paymentMethod);
      setCardError("");
    }

    setProcessing(true);
    setPaymentSuccess("");

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: name,
          email: email,
        },
      },
    });

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
        totalPrice,
        transactionId: paymentIntent.id,
        orderId: paymentIntent.created,
        bookingId: _id,
        name,
        email,
        phone,
        city,
        state,
        zip,
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
            // Navigate("/myOrder");
          }
        });
    }
    setProcessing(false);
    console.log("paymentIntent", paymentIntent);
  };

  return (
    <div>
      <form className="shadow-2xl rounded-2xl ml-20 p-8" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
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
          className="btn btn-sm mt-6 border-none bg-lime-600 ml-20"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {/* <form className="payment-card" onSubmit={handleSubmit}>
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
          pay
        </button>
        <p className="text-red-900 text-xs pt-4">{cardError}</p>
        {paymentSuccess && (
          <div>
            <p className="text-green-500 text-sm pt-4">{paymentSuccess}</p>{" "}
            <p className="text-green-500 text-sm"> your transactionId : {transactionId}</p>
          </div>
        )}
      </form> */}
    </div>
  );
};

export default CheckoutForm;
