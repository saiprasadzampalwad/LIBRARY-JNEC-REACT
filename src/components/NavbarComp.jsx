import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavbarComp = () => {
  return (
    <Navbar 
      expand="lg" 
      variant="dark"
      style={{
        background: 'linear-gradient(135deg, #592e12 0%, #703c19 50%, #4a270f 100%)',
        boxShadow: '0 4px 15px rgba(0,0,0,0.12)',
        padding: '6px 0',
        marginBottom: '20px',
        borderBottom: '3px solid #007794'
      }}
    >
      <Container fluid="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: 'rgba(255,255,255,0.4)', padding: '6px 10px' }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 justify-content-center flex-wrap" style={{ gap: '2px' }}>
            <NavLink to="/" className="nav-link px-3 py-2">HOME</NavLink>
            <NavLink to="/about" className="nav-link px-3 py-2">ABOUT US</NavLink>
            <NavLink to="/services" className="nav-link px-3 py-2">SERVICES & FACILITIES</NavLink>
            <NavLink to="/print" className="nav-link px-3 py-2">PRINT RESOURCES</NavLink>
            <NavLink to="/e-resources" className="nav-link px-3 py-2">E-RESOURCES</NavLink>
            <Nav.Link href="https://erp.mgmu.ac.in" target="_blank" rel="noopener noreferrer" className="nav-link px-3 py-2">OPAC</Nav.Link>
            <NavLink to="/faq" className="nav-link px-3 py-2">FAQ</NavLink>
            <NavLink to="/lib-rules" className="nav-link px-3 py-2">LIB. RULES</NavLink>
            <NavLink to="/contact" className="nav-link px-3 py-2">CONTACT US</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
