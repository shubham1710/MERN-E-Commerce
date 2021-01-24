import StripeCheckout from 'react-stripe-checkout';
import { checkout } from '../actions/orderActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const STRIPE_PUBLISHABLE = 'pk_test_0eKSi4tnuGE57U2ITlBiVU3v00pG2nTPAR';

const onToken = (amount) => token => 
    this.props.checkout(token.id, amount);

const Checkout = ({ amount }) => 
    <StripeCheckout
      amount={amount*100}
      token={onToken(amount)}
      currency='INR'
      stripeKey={STRIPE_PUBLISHABLE}
/>

export default Checkout;