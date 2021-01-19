import { Component } from 'react';
import AppNavbar from './AppNavbar';
import {ListGroup, ListGroupItem, Button, Input, Alert} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCart, addToCart, deleteFromCart } from '../actions/cartActions';

class Cart extends Component {

    state = {
        loaded: false
    }

    static propTypes = {
        getCart: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
        addToCart: PropTypes.func.isRequired,
        deleteFromCart: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired,
        cart: PropTypes.object.isRequired
    }

    getCartItems = (id) => {
        this.props.getCart(id);
        this.state.loaded = true;
    }

    onUpdateCart = (id, productId, quantity) => {
        this.props.addToCart(id, productId, quantity);
    }

    onDeleteFromCart = (id, productId) => {
        this.props.deleteFromCart(id, productId);
    } 
    
    render(){
        const user = this.props.user;
        return(
            <div>
                <AppNavbar/>
            {this.props.isAuthenticated ? 
                <Button
                    color="success"
                    size="btn btn-block"
                    onClick={this.getCartItems.bind(this, user._id)}
                    >Show Cart Items</Button> 
                    : <Alert color="danger" className="text-center">Login to View!</Alert>}            
            
            {this.props.isAuthenticated && this.state.loaded ?
                <ListGroup>
                    {this.props.cart.items.map((item)=>(
                        <ListGroupItem>{item.title}</ListGroupItem>
                    ))}
                </ListGroup>
                :null}
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
})

export default connect(mapStateToProps, {getCart, addToCart, deleteFromCart})(Cart);