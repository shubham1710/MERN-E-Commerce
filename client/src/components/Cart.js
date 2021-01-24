import { Component, Fragment } from 'react';
import AppNavbar from './AppNavbar';
import {Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Alert, Container} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCart, deleteFromCart } from '../actions/cartActions';
import Checkout from './Checkout';
import { checkout } from '../actions/orderActions'
;
class Cart extends Component {

    state = {
        loaded: false,
    }

    static propTypes = {
        getCart: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
        addToCart: PropTypes.func.isRequired,
        deleteFromCart: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired,
        cart: PropTypes.object.isRequired,
        checkout: PropTypes.func.isRequired
    }

    getCartItems = async (id) => {
        await this.props.getCart(id);
        this.state.loaded = true;
    }

    onDeleteFromCart = (id, itemId) => {
        this.props.deleteFromCart(id, itemId);
    } 
    
    render(){
        const user = this.props.user;
        if(this.props.isAuthenticated && !this.props.cart.loading && !this.state.loaded){
            this.getCartItems(user._id);
        }
        return(
            <div>
                <AppNavbar/>
                {this.props.isAuthenticated ?
                    <Fragment>
                        {this.props.cart.cart ? null :
                            <Alert color="info" className="text-center">Your cart is empty!</Alert>
                        }
                    </Fragment>
                    : <Alert color="danger" className="text-center">Login to View!</Alert>
                }  
        
            
                {this.props.isAuthenticated && !this.props.cart.loading && this.state.loaded && this.props.cart.cart?
                <Container>
                    <div className="row">
                        {this.props.cart.cart.items.map((item)=>(
                            <div className="col-md-4">
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">{item.name}</CardTitle>
                                <CardSubtitle tag="h6">Rs. {item.price}</CardSubtitle>
                                <CardText>Quantity - {item.quantity}</CardText>
                                <Button color="danger" onClick={this.onDeleteFromCart.bind(this, user._id, item.productId)}>Delete</Button>
                            </CardBody>
                        </Card>
                        <br/>
                        </div>
                        ))}
                        <div class="col-md-12">
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">Total Cost = Rs. {this.props.cart.cart.bill}</CardTitle>
                                <Checkout
                                    user={user._id}
                                    amount={this.props.cart.cart.bill}
                                    checkout={this.props.checkout}
                                />                      
                            </CardBody>
                        </Card>
                        </div>
                    </div>
                </Container>
                    :null}
            </div>
            
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
})

export default connect(mapStateToProps, {getCart, deleteFromCart, checkout})(Cart);