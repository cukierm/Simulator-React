import React, { Component  } from 'react';
import { Navbar, Nav, NavItem, } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar dark sticky="top" >
                    <div className="navbar">
                        <Nav navbar className="flex-row">
                            <NavItem>
                                <NavLink className="nav-link p-2" to="/guided-example">
                                    Guided Example
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link p-2" to="/simulator">
                                    Simulator
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Navigation;