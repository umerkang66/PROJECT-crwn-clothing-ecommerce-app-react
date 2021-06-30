import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51J7vdmBKciYD0hkmdlvaqDcc0sPargggKaz7WQukxhO7T4N3NZFYq7AGtXmtPyPpPlaXjuIA1n44GjW8KuiRruc500iHaP8wot';

  const onToken = token => console.log(token);

  return (
    <StripeCheckout
      label="Pay now"
      name="Crwn Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/en/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      stripeKey={publishableKey}
      panelLabel="Pay now"
      token={onToken}
    />
  );
};

export default StripeCheckoutButton;
