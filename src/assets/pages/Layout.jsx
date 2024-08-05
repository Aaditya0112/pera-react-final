import { Link, Outlet} from "react-router-dom";
import iitk_logo from "../images/iitk_logo.png";
import ieee_logo from "../images/ieee.svg";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Layout = () => {
    return (

        <>
            {/* Header */}
            <div className="logos">
                <div className="self">
                    <div className="pes">
                        <img src="https://site.ieee.org/sb-iitk-pes/files/2021/08/PES-SBC-768x601.png" alt = "PES-Logo" />
                    </div>

                    <div className="pera">
                        <img src="https://site.ieee.org/sb-iitk-pes/files/2021/06/PERA-Logo.png" alt= "PERA-Logo" />
                    </div>

                </div>
                <div className="ref">
                    <div className="inst-logo">
                        <a href = "https://iitk.ac.in" target="_blank"><img src={iitk_logo} alt="IITK Logo" /></a>
                    </div>
                    <div className="ieee-logo">
                    <a href = "https://www.ieee.org/" target="_blank"><img src={ieee_logo} alt="IEEE Logo" /></a>
                    </div>


                </div>

            </div>

            {/* Navbar */}

            <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About us</Link>
            <Link to="/committee" className="nav-link">Committee</Link>
            <Link to="/speakers" className="nav-link">Speakers</Link>
            <Link to="/eventDetails" className="nav-link">Event Details</Link>
            <Link to="/registration" className="nav-link">Registration</Link>
            <Link to="/studentSupport" className="nav-link">Student Travel Support</Link>
            <Link to="/accomodation" className="nav-link">Accommodation</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About us</Nav.Link>
            <Nav.Link href="/committee">Committee</Nav.Link>
            <Nav.Link href="/speakers">Speakers</Nav.Link>
            <Nav.Link href="/eventDetails">Event Details</Nav.Link>
            <Nav.Link href="/registration">Registration</Nav.Link>
            <Nav.Link href="/studentSupport">Student Travel Support</Nav.Link>
            <Nav.Link href="/accomodation">Accommodation</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link> */}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

            <Outlet/>


        </>
    )
};

export default Layout;
