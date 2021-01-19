import { Component } from 'react';
import AppNavbar from './AppNavbar';
import {Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Alert, Container, Input, FormGroup, Form} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCart, deleteFromCart } from '../actions/cartActions';
import { checkout } from '../actions/orderActions';

class Cart extends Component {

    state = {
        loaded: false,
        address: ''
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

    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    getCartItems = async (id) => {
        await this.props.getCart(id);
        this.state.loaded = true;
    }

    onDeleteFromCart = (id, itemId) => {
        this.props.deleteFromCart(id, itemId);
    } 

    onSubmit = (e) => {
        e.preventDefault();
        const {address} = this.state;
        this.props.checkout(this.props.user._id, address);
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
                <div/>
                    : <Alert color="danger" className="text-center">Login to View!</Alert>}            
            
            {this.props.isAuthenticated && !this.props.cart.loading && this.state.loaded?
            <Container>
                <div className="row">
                    {this.props.cart.cart.items.map((item)=>(
                        <div className="col-md-4">
                       <Card>
                           <CardBody>
                               <CardTitle tag="h5">{item.name}</CardTitle>
                               <CardSubtitle tag="h6">Rs. {item.price}</CardSubtitle>
                               <CardText>Quantity - {item.quantity}</CardText>
                               <Button color="danger" onClick={this.onDeleteFromCart.bind(this, user._id, item._id)}>Delete</Button>
                           </CardBody>
                       </Card>
                       <br/>
                       </div>
                    ))}
                    <div class="col-md-12">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Total Cost = {this.props.cart.cart.bill}</CardTitle>
                            <Form onSubmit={this.onSubmit}>
                                <FormGroup>
                                <Input
                                    type="text"
                                    name="address"
                                    id="address"
                                    placeholder="Address"
                                    className="mb-3"
                                    onChange={this.onChange}
                                />
                                <Button
                                    color="success"
                                    style={{marginTop: '2rem'}}
                                    block
                                >Checkout</Button>
                                </FormGroup>
                            </Form>
                            
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