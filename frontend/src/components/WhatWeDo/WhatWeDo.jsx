import React from 'react';
import './WhatWeDo.css';

const WhatWeDo = () => {
    return (
        <div className="what-we-do">
            <div className="title">
                <div className="rectangle"></div>
                <h2>What We Do</h2>
            </div>
            <div className="description">
                <h3>We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces</h3>
            </div>
            <div className="cards">
                <div className="card">
                    <div className="icon">
                        <img src={process.env.PUBLIC_URL + '/Blockchain/Web-Dev-Icon.svg'} alt="Web Dev Icon" className="image" />
                    </div>
                    <h4>Web development</h4>
                    <p>We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.</p>
                </div>
                <div className="card">
                    <div className="icon">
                        <img src={process.env.PUBLIC_URL + '/Blockchain/ux-Icon.svg'} alt="UX Icon" className="image" />
                    </div>                    <h4>User experience  & design</h4>
                    <p>Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.</p>
                </div>
                <div className="card">
                    <div className="icon">
                        <img src={process.env.PUBLIC_URL + '/Blockchain/app-dev-Icon.svg'} alt="App Dev icon" className="image" />
                    </div>                    <h4>Mobile app development</h4>
                    <p>Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.</p>
                </div>
                <div className="card">
                    <div className="icon">
                        <img src={process.env.PUBLIC_URL + '/Blockchain/icon.svg'} alt="Icon" className="image" />
                    </div>                    <h4>Blockchain solutions</h4>
                    <p>We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.</p>
                </div>
            </div>
        </div>
    );
}

export default WhatWeDo;
