import StripeCheckout from 'react-stripe-checkout';
import { checkout } from '../actions/orderActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const STRIPE_PUBLISHABLE = 'pk_test_0eKSi4tnuGE57U2ITlBiVU3v00pG2nTPAR';

const onToken = (user,checkout) => token => 
    checkout(user, token.id);

const Checkout = ({ amount, user, checkout }) => 
    <StripeCheckout
      amount={amount*100}
      token={onToken(user,checkout)}
      currency='INR'
      stripeKey={STRIPE_PUBLISHABLE}
/>

export default Checkout;