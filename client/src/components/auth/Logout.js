import { Component, Fragment } from 'react';
import { logout } from '../../actions/authActions';
import { connect } from 'react-redux';
import {NavLink, Button} from 'reactstrap';
import PropTypes from 'prop-types';

export class Logout extends Component {
    static propTypes = {
        logout: PropTypes.func.isRequired
    }

    render() {
        return (
            <div>
                <Fragment>
                <Button color="danger" className="btn btn-sm"><NavLink onClick={this.toggle} href="#"><span className="text-light"><b>Logout</b></span></NavLink></Button>
                </Fragment>
            </div>
        )
    }
}

export default connect(null,{logout})(Logout);
