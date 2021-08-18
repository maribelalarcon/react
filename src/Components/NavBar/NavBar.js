import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Sportswear</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Remeras</Nav.Link>
                            <Nav.Link href="#pricing">Calzas</Nav.Link>
                            <NavDropdown title="Accesorios" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Medias</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Gorras</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
