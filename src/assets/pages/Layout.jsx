import { Link, Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { footerText, NavBarTabs, Logos } from "../../Constants.js";


const Layout = () => {

    return (
        <>
        {/* Header */}
        <div className="logos">
            <div className="self">
                {
                    Logos[0].map((e) => {
                        return(
                            <div className={e.title}>
                                <img src={e.image} alt = {e.title}/>
                            </div>
                            
                        )
                    })
                }
            </div>
            <div className="ref">

            {
                Logos[1].map((e) => {
                    return(
                        <div className={e.title}>
                            <a href={e.link} target="_blank">
                                <img src={e.image} alt = {e.title}/>
                            </a>
                        </div>
                        
                    )
                })
            }
            </div>
        </div>

        {/* Navbar */}

        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                {NavBarTabs.map((element, index) => {
                return (
                    <Link
                    to={element.path}
                    className="nav-link"
                    onClick={() => {
                        if (window.outerWidth < 768) {
                        document.querySelector(".navbar-toggler").click();
                        }

                        document.querySelectorAll(".nav-link").forEach((link) => {
                        link.classList.remove("activeTab");
                        });
                        document
                        .querySelectorAll(".nav-link")
                        [index].classList.add("activeTab");
                    }}
                    >
                    {element.title}
                    </Link>
                );
                })}
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>

        <Outlet />

        <footer dangerouslySetInnerHTML =  {{__html : footerText}}className="footer text-center text-lg absolute bottom-0 w-full py-3 bg-gradient-to-b from-white to-gray-400  text-yellow-600">
        </footer>
        
        </>
    );

    };

export default Layout;
