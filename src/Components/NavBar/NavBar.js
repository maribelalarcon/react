import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
//import { CartContext } from '../../Context/CartContext';


function NavBar() {
    // const {iconoCart} = CartContext()
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <Link to="/">Sportsware</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>
                                <Link to="/category/remeras">Remeras</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/category/calzas">Calzas</Link>
                            </Nav.Link>
                            <NavDropdown title="Accesorios" id="collasible-nav-dropdown">
                                <NavDropdown.Item>
                                    <Link to="/category/medias">Medias</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/category/gorras">Gorras</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/category/accesorios">Accesorios</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        
                        <Nav>
                           <CartWidget/>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
