import React, { Component  } from 'react';
import { Navbar, Nav, NavLink, NavItem, Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Jumbotron className="jumbotron" fluid style={{backgroundColor:"#8C5383", marginBottom:0}}>
                    <div>
                        <div className="flex-row">
                            <div className="col d-flex justify-content-center">
                                <h1>Simulator</h1>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky="top">
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

export default Header;