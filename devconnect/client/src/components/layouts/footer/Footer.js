import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default () => (
    <div className="footer-container">
        <p>Copyright <Link to="/login">&copy;</Link> {new Date().getFullYear()} Tee Mak</p>
    </div>
);
