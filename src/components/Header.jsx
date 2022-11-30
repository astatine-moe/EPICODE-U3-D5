import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import logo from "../netflix_logo.png";
import { LinkContainer } from "react-router-bootstrap";

class Header extends React.Component {
    render() {
        return (
            <header>
                <Navbar collapseOnSelect expand="lg" variant="dark">
                    <Container fluid>
                        <Navbar.Brand href="#home">
                            <img src={logo} id="logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <LinkContainer to="/">
                                    <Nav.Link href="#">Home</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/tv-shows">
                                    <Nav.Link href="#">TV Shows</Nav.Link>
                                </LinkContainer>
                            </Nav>
                            <Nav>
                                <NavDropdown
                                    title={this.props.profile.name}
                                    id="collasible-nav-dropdown"
                                >
                                    <NavDropdown.Item href="#action/3.1">
                                        Profile
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        href="#action/3.2"
                                        onClick={(e) => {
                                            this.props.func(null, null);
                                        }}
                                    >
                                        Manage Profiles
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">
                                        Account
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}

export default Header;
