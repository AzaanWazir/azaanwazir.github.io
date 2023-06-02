import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import "./Navbar.css";
import logo from '../../logo.svg'

function Navbar() {
    return (
        <div>
            <nav>
                <img src={logo} className='logo' />
                <BrowserRouter>
                    <div className='pages'>
                        <Link to="/">Home</Link>
                        <Link to="/projects">Projects</Link>
                        {/* Should lead to scrolling down to projects section on page */}
                        <Link to="/contact">Contact</Link>
                    </div>
                </BrowserRouter>
            </nav>
            <div className='navSpace'>
                
            </div>
        </div>
        
    );
}

export default Navbar;