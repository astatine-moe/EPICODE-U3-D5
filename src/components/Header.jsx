import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import logo from "../netflix_logo.png";

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
                                <Nav.Link href="#">Home</Nav.Link>
                                <Nav.Link href="#">Series</Nav.Link>
                                <Nav.Link href="#">Films</Nav.Link>
                                <Nav.Link href="#">New & Popular</Nav.Link>
                                <Nav.Link href="#">My List</Nav.Link>
                                <Nav.Link href="#">
                                    Browse by Languages
                                </Nav.Link>
                            </Nav>
                            <Nav>
                                <NavDropdown
                                    title="Profile"
                                    id="collasible-nav-dropdown"
                                >
                                    <NavDropdown.Item href="#action/3.1">
                                        Morgan
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
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
