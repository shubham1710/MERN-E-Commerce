import { Component, Fragment } from 'react';
import AppNavbar from './AppNavbar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getOrders } from '../actions/orderActions';
import {Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Alert, Container} from 'reactstrap';

class Orders extends Component {

    state = {
        loaded: false,
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        user: PropTypes.object.isRequired,
        order: PropTypes.object.isRequired,
        getOrders: PropTypes.func.isRequired
    }

    ongetOrders = async (id) => {
        await this.props.getOrders(id);
        this.state.loaded = true;
    }

    render(){
        const user = this.props.user;
        if(this.props.isAuthenticated && !this.props.orders.loading && !this.state.loaded){
            this.ongetOrders(user._id);
        }
        return(
            <div>
                <AppNavbar/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    order: state.order,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
})

export default connect(mapStateToProps, {getOrders})(Orders);