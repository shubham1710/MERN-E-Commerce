import { Component } from 'react';
import AppNavbar from './AppNavbar';
import {ListGroup, ListGroupItem, Button, Input, Alert} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCart, addToCart, deleteFromCart } from '../actions/cartActions';

class Cart extends Component {

    componentDidMount(){
        this.props.getCart();
    }

    static propTypes = {
        getCart: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
        addToCart: PropTypes.func.isRequired,
        deleteFromCart: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired,
        cart: PropTypes.object.isRequired
    }

    onUpdateCart = (id, productId, quantity) => {
        this.props.addToCart(id, productId, quantity);
    }

    onDeleteFromCart = (id, productId) => {
        this.props.deleteFromCart(id, productId);
    } 
    
    render(){
        const {items, bill} = this.props.cart;
        return(
            <div>
            <AppNavbar/>
            {this.props.isAuthenticated ?
                <ListGroup>
                {items.map((item) =>(
                    <ListGroupItem>{item.title}</ListGroupItem>
                ))}
                </ListGroup> 
                :<Alert color="danger" className="text-center">Login to View!</Alert>}
                
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