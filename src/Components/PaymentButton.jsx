// import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../Context/UserContext";
import axios from "axios";
// import { toast } from "react-hot-toast";

const PaymentButton = ({ cart }) => {
  const { user } = useContext(AuthContext);
  // const url = "http://localhost:5000";
  // console.log(user);
  const handleCheckout = () => {
    console.log(cart);
    axios
      .post(`http://localhost:5000/stripe/create-checkout-session`, {
        cart,
        userId: user._id,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div>
      {/* <!-- Use action="/create-checkout-session.php" if your server is PHP based. --> */}
      {/* <form action="/create-checkout-session" method="POST">
      <button  type="submit">Checkout</button>
    </form> */}

      <button onClick={() => handleCheckout()}>Checkout</button>
    </div>
  );
};

export default PaymentButton;
