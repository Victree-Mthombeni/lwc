import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-heading">
                <div className="rectangle"></div>
                <h2>Contact us</h2>
            </div>
            <div className="footer-content">
                <div className="footer-column ">
                    <p style={{ fontSize: '3em', margin: 0, fontWeight: 'bold' }}>Have a project in mind?</p>
                    <p style={{ fontSize: '3em', margin: 0, fontWeight: 'bold' }}>Let's make it happen</p>

                </div>
                <div className="footer-column">
                    <p>22 Street Name, Suburb, 8000,</p>
                    <p>Cape Town, South Africa</p>
                    <p>+27 21 431 0001</p>
                    <p style={{ textDecoration: 'underline' }}>enquirie@website.co.za</p>
                </div>
            </div>
            <div className="footer-row">
                <div className="footer-column">
                    <p>Terms of service</p>
                    <p>Privacy policy</p>
                    <p>Impressum</p>
                </div>
                <div className="footer-column">
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                </div>
                <div className="footer-column">
                    <p>Github</p>
                    <p>Linkedin</p>
                    <p>Teams</p>
                </div>
                <div className="footer-column">
                    <p>Youtube</p>
                    <p>Behance</p>
                    <p>Dribbble</p>
                </div>
                <div className="footer-column">
                    <p>Explore open jobs</p>
                    <p> <br/> </p>
                    <p>©2000—2023 Company Name</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
