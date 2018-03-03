import React from 'react';
import shapes from '../../img/shapes.png'
import './Logo.css';

const Logo = () => (
    <div className="Logo">
        <img 
            src={shapes} 
            alt="shapes-icon" 
            height="30" 
            width="36" 
        />
    </div>
);

export default Logo;