import { Component, Fragment } from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown} from 'react-bootstrap';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class AppNavbar extends Component {

    render() {
      const authLinks = (
        <Fragment>
          <NavDropdown title="" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Cart</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">My orders</NavDropdown.Item>
          </NavDropdown>
          <Nav.Item>
            <Nav.Link>Logout</Nav.Link>
          </Nav.Item>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
          <Nav.Item>
            <Nav.Link>Register</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Login</Nav.Link>
          </Nav.Item>
        </Fragment>
    );

      return(
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                {authLinks}
                {guestLinks}
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar.Collapse>
        </Navbar>
      );
    }
}

export default AppNavbar;