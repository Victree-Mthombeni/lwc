import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="left">
                <img src={process.env.PUBLIC_URL + '/logo.svg'} alt="Logo" className="logo" />
            </div>
            <div className="center">
                <nav className="menu">
                    <ul>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Industries</a></li>
                        <li><a href="#">Cases</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div className="right">
                <button className="talk-button">Let's Talk</button>
            </div>
        </header>
    );
}

export default Header;
