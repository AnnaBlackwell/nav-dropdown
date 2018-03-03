import React from 'react';
import shapes from '../../img/shapes.png'
import './Logo.css';

const Logo = () => (
    <a 
        className="Logo" 
        href="/"
    >
        <img 
            src={shapes} 
            alt="shapes-icon" 
            height="30" 
            width="36" 
        />
    </a>
);

export default Logo;