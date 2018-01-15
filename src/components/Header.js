import React from 'react';
import { Link } from 'react-router-dom';
const FontAwesome = require('react-fontawesome');
// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
    <div className="site-header">
        <div className="header-title">
            <span>React Boilerplate</span>
        </div>
        <div className="centeredmenu">
            <ul className="site-navbar primary-nav">
                <li><Link to="/">
                    <FontAwesome
                        className="fas fa-home fa-fw"
                        name="home"
                        size="lg"
                        style={{color: '#a9c8ff'}}>
                    </FontAwesome>
                     Start</Link>
                </li>
                <li><Link to="/om">
                    <FontAwesome
                        name="info"
                        className="fas fa-info fa-fw"
                        size="lg"
                        style={{color: '#ffbf70'}}>
                    </FontAwesome>
                    Info</Link>
                </li>
            </ul>
        </div>
    </div>
);

export default Header;
