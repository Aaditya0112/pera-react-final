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
            <Link to="pera-react-final/" className="nav-link activeTab" onClick={
                () => {
                    document.querySelectorAll('.nav-link').forEach((link) => {
                        link.classList.remove('activeTab');
                    })
                    document.querySelectorAll('.nav-link')[0].classList.add('activeTab');
                }
            }>Home</Link>
            <Link to="pera-react-final/about" className="nav-link" onClick={
                () => {
                    document.querySelectorAll('.nav-link').forEach((link) => {
                        link.classList.remove('activeTab');
                    })
                    document.querySelectorAll('.nav-link')[1].classList.add('activeTab');
                    
                }
            }>About us</Link>
            <Link to="pera-react-final/committee" className="nav-link" onClick={
                () => {
                    document.querySelectorAll('.nav-link').forEach((link) => {
                        link.classList.remove('activeTab');
                    })
                    document.querySelectorAll('.nav-link')[2].classList.add('activeTab');
                    
                }
            }>Committee</Link>
            <Link to="pera-react-final/speakers" className="nav-link" onClick={
                () => {
                    document.querySelectorAll('.nav-link').forEach((link) => {
                        link.classList.remove('activeTab');
                    })
                    document.querySelectorAll('.nav-link')[3].classList.add('activeTab');
                }
            }>Speakers</Link>
            <Link to="pera-react-final/eventDetails" className="nav-link" onClick={
                () => {
                    document.querySelectorAll('.nav-link').forEach((link) => {
                        link.classList.remove('activeTab');
                    })
                    document.querySelectorAll('.nav-link')[4].classList.add('activeTab');
                }
            }>Event Details</Link>
            <Link to="pera-react-final/registration" className="nav-link" onClick={
                () => {
                    document.querySelectorAll('.nav-link').forEach((link) => {
                        link.classList.remove('activeTab');
                    })
                    document.querySelectorAll('.nav-link')[5].classList.add('activeTab');
                }
            }>Registration</Link>
            <Link to="pera-react-final/studentSupport" className="nav-link" onClick={
                () => {
                    document.querySelectorAll('.nav-link').forEach((link) => {
                        link.classList.remove('activeTab');
                    })
                    document.querySelectorAll('.nav-link')[6].classList.add('activeTab');
                }
            }>Student Travel Support</Link>
            <Link to="pera-react-final/accomodation" className="nav-link" onClick={
                () => {
                    document.querySelectorAll('.nav-link').forEach((link) => {
                        link.classList.remove('activeTab');
                    })
                    document.querySelectorAll('.nav-link')[7].classList.add('activeTab');
                }
            }>Accommodation</Link>
            <Link to="pera-react-final/contact" className="nav-link" onClick={
                () => {
                    document.querySelectorAll('.nav-link').forEach((link) => {
                        link.classList.remove('activeTab');
                    })
                    document.querySelectorAll('.nav-link')[8].classList.add('activeTab');
                }
            }>Contact</Link>
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
