import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./NavBar.css";
import { logo } from "../../assets";
import styled from "styled-components";

const NavBar = () => {
    return (
        <>
          
          {['md'].map((expand) => (
        <Navbar key={expand} bg="#000000" expand={expand} className="mb-0 nav__bar">
          <Container fluid>
            <Navbar.Brand href="/"><Logo src={logo} alt="logo" className="logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <Logo src={logo}  alt="logo" className="canvas_logo" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link className='link' href="/">Home</Nav.Link>
                  <Nav.Link className='link' href="#about">About Us</Nav.Link>
                  <Nav.Link className='link' href="#faqs">FAQs</Nav.Link>
                  <Nav.Link className='link' href="#contact">Contact Us</Nav.Link>
                  <Nav.Link className='link' href="login">Log in</Nav.Link>

                <button><Nav.Link style={{color: "black"}} className='link' href="register">Sign up</Nav.Link></button>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
        </>
    )
}

const Logo = styled.img`
  background-color: transparent;
  width: 130px;
  height: 65px;
`
export default NavBar;
