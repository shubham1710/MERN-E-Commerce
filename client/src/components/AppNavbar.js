import { Component, Fragment } from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown} from 'react-bootstrap';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class AppNavbar extends Component {

    render() {
      const authLinks = (
        <Fragment>
          <Nav.Item>
            <Button variant="danger" className="mr-3">Logout</Button>
          </Nav.Item>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
          <Nav.Item>
            <Button variant="primary" className="mr-3">Register</Button>
          </Nav.Item>
          <Nav.Item>
            <Button variant="success" className="mr-3">Login</Button>
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