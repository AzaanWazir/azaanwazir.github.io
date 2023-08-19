import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import "./Navbar.css";
import logo from '../../logo.svg'

const Navbar = () => {
    return (
        <div>
            <nav>
                <img src={logo} className='logo' />
                <BrowserRouter>
                    <div className='pages'>
                        <Link to="/">Home</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact Me</Link>
                    </div>
                </BrowserRouter>
            </nav>
        </div>
    );
}

export default Navbar;