import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/logo.png"
import "./Header.css"

const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (


        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="me-5">
                        <img src={logo} width="170" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="blog">
                                Blog
                            </Nav.Link>
                            {user && (
                                <>
                                    <Nav.Link as={Link} to="addcar">
                                        Add Car
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/mycar">
                                        My Cars
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="manage">
                                        Manage Cars
                                    </Nav.Link>
                                </>
                            )}
                            <Nav.Link as={Link} to="contact">
                                Contact
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            {user ? (
                                <>
                                    <button onClick={logout} className="btn signoutbtn">
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="register">
                                        Register
                                    </Nav.Link>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
