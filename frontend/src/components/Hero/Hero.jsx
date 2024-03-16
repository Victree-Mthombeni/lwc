import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero">
            <div className="image-container">
                <img src={process.env.PUBLIC_URL + '/confidence.jpeg'} alt="Background" className="cropped-image" />
                <div className="overlay-text">
                    <h1>Live with Confidence</h1>
                    <p>José Mourinho brings confidence to pan-African Sanlam <br/> campaign.</p>
                    <button className="view-project-button">View Project</button>
                </div>
            </div>
        </div>
    );
}
export default Hero;
