import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_6UWTvnnNpQtmF4PyblTR6p9k";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return(
    <StripeCheckout
      label="Pay Now"
      name="JL Creative"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total price is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
