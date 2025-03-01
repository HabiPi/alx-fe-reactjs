import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{ backgroundColor: '#f0f0f0', padding: '10px' }}>
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', gap: '20px', justifyContent: 'space-around' }}> {/* Add a gap of 20px between the list items */}

                <li style={{ margin: 0 }}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'black', padding: '8px 12px', borderRadius: '5px', backgroundColor: '#e0e0e0' }}>Home</Link>
                </li>
                <li style={{ margin: 0 }}>
                    <Link to="/about" style={{ textDecoration: 'none', color: 'black', padding: '8px 12px', borderRadius: '5px', backgroundColor: '#e0e0e0' }}>About</Link>
                </li>
                <li style={{ margin: 0 }}>
                    <Link to="/services" style={{ textDecoration: 'none', color: 'black', padding: '8px 12px', borderRadius: '5px', backgroundColor: '#e0e0e0' }}>Services</Link>
                </li>
                <li style={{ margin: 0 }}>
                    <Link to="/contact" style={{ textDecoration: 'none', color: 'black', padding: '8px 12px', borderRadius: '5px', backgroundColor: '#e0e0e0' }}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;