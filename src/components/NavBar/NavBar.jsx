import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import "./NavBar.css";
import { logo } from "../../assets";
import styled from "styled-components";

const NavBar = () => {
    return (
        <>
          
          {['md'].map((expand) => (
        <Wrapper key={expand} bg="#000000" expand={expand} className="mb-0 nav__bar">
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
                  <Nav.Link className='link' href="/#about">About Us</Nav.Link>
                  <Nav.Link className='link' href="/#faqs">FAQs</Nav.Link>
                  <Nav.Link className='link' href="/#contact">Contact Us</Nav.Link>
                  <Nav.Link className='link' href="signin">Log in</Nav.Link>

                <Button><Nav.Link style={{color: "black"}} className='link' href="register">Sign up</Nav.Link></Button>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Wrapper>
      ))}
        </>
    )
}

const Logo = styled.img`
  background-color: transparent;
  width: 130px;
  height: 65px;
`

const Button = styled.button`
  // background: linear-gradient(139.52deg,#6251C3 -73.08%,#A800AB 150.16%);
  border-radius: 5px;
  border: none;
  margin: 2em 3em;
  padding: 0 2em;
  font-weight: 700;
`;

const Wrapper = styled(Navbar)`
/* background: linear-gradient(139.52deg,#6251C3 -73.08%,#A800AB 150.16%); */
  background-color: transparent;
  height: 80px;
  padding: 0;

  .link {
    margin: 0 0.5em;
  }

  .link, a#offcanvasNavbarDropdown-expand-md, .link:hover, .link:focus, .link:active {
    color: red;
    font-size: 1.3em;
    font-weight: 700;
    transition: color 0.5s linear, text-decoration 0.5s linear;
  }

  .offcanvas-body button {
    background: var(--white);
    border-radius: 5px;
    color: white !important;
    border: none;
    margin: 0em 2em;
  
  }

  .navbar > .container-fluid {
    height: 80px !important;

    @media (max-width: 760px) {
        margin-top: -1em;
    }
  }

  .offcanvas {
    background-color: var(--background);
  }

  .offcanvas-header {
    padding-left: 0;
  }
  .offcanvas-body {
    padding-left: 2em;
  }
  .offcanvas-header .btn-close {
    background-color: #fff;
  }
  .navbar-toggler-icon {
    background-color: #fff;
    border-radius: 5px;
  }

  .logo{
    text-align: center;
    display: inline-flex;
    margin-left: 0;
  }
  
  .canvas_logo{
    text-align: center;
    display: inline-flex;
    /* height: 8rem;
    width: 8rem; */
    margin: 0;
  }
  
  
  button.navbar-toggler.collapsed {
    padding: 3px 0;
    width: 2.5em;
    margin: 0em !important;
    position: absolute;
    right: 10px;
    top: 30px;
    background-color: #fff;
  }

.offcanvas-body a {
    color: var(--white);
    font-weight: 600;
    margin-bottom: 1em;
    font-size: 1.3em;
}
  

`;

export default NavBar;
