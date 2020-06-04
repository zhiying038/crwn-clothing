import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51Gq8zmKGxkxMAYdCLCkUpcWAQ094FyxzX5kiQ9RFLh0YxZ42KqU0YqqXYNTkk1QWF8Q4Lk9HpvcNJw1jCsYDkJck00NKpDxmb7";

    const onToken = () => {
        alert('Payment Successful');
    };

    return (
        <StripeCheckout 
            label="Pay Now"
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;