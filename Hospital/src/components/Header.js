// src/components/Header/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header">
           <div className='title'>
              <h1>Phoenix Healthcare Services </h1>
              </div>
            <nav>
              
                <Link to="/">Home</Link>
                <Link to="/guiding">Guiding Principles</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
};

export default Header;
