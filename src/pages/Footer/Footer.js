import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer container">
            <footer className="py-3">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"> <Link className='nav-link px-2 text-muted' to="/">Home</Link></li>
                    <li className="nav-item"> <Link className='nav-link px-2 text-muted' to="/features">Features</Link></li>
                    <li className="nav-item"> <Link className='nav-link px-2 text-muted' to="/blog">Blog</Link></li>
                    <li className="nav-item"> <Link className='nav-link px-2 text-muted' to="/contact">Contact</Link></li>
                    <li className="nav-item"> <Link className='nav-link px-2 text-muted' to="/about">About</Link></li>
                </ul>
                <p className="text-center text-muted">&copy; 2022 CarValy, Inc</p>
            </footer>
        </div>

    );
};

export default Footer;