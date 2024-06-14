import React, { useState } from 'react';
import '../styles/stack/nav.css'
import { Link } from 'react-router-dom';


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg fixed-top top">
            <div className="container p-2 p-md-3 mt-3 px-5 rounded-lg-pill rounded-5 nav-bar-conainer shadow-sm">
                <a className="navbar-brand" href="#">
                    <img src="https://roadx.site/logo.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                    oadX
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleNavbar}
                    aria-controls="navbarNav"
                    aria-expanded={isOpen ? 'true' : 'false'}
                    aria-label="Toggle navigation"
                    >
                    {isOpen ? (
                        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 18L17.5 15L21 18" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11 14L3 14" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M11 18H3" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M3 6L13.5 6M20 6L17.75 6" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20 10L9.5 10M3 10H5.25" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg> 
                    ) : (
                        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 16H3" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M14 15L17.5 18L21 15" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M20 11L3 11" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M3 6L13.5 6M20 6L17.75 6" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>   
                    )}
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item text-center mt-3 mt-lg-0">
                    <Link className="nav-link me-3 shadow-sm px-3 activ3 rounded-pill" to="/" onClick={toggleNavbar}>Home</Link>
                    </li>
                    <li className="nav-item text-center mt-3 mt-lg-0">
                    <Link className="nav-link me-3 shadow-sm px-3 rounded-pill" to="/#stackSection" onClick={toggleNavbar}>Stacks</Link>
                    </li>
                    <li className="nav-item text-center mt-3 mt-lg-0">
                    <Link className="nav-link me-3 shadow-sm px-3 rounded-pill" to="/#buddySection" onClick={toggleNavbar}>Buddy</Link>
                    </li>
                    <li className="nav-item text-center mt-3 mt-lg-0">
                    <Link className="nav-link me-3 shadow-sm px-3 rounded-pill" to="/#contactSection" onClick={toggleNavbar}>Contact</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
