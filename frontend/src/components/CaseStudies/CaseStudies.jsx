import React, { useState } from 'react';
import './CaseStudies.css';

const CaseStudies = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
    };

    return (
        <div className="case-studies">
            <div className="title">
                <div className="rectangle"></div>
                <h2>Case Studies</h2>
            </div>
            <div className="case-row">
                <div className={currentSlide === 0 ? 'case-column active' : 'case-column'}>
                    <div className="case-image-container">
                        <img src={process.env.PUBLIC_URL + '/olympian.jpeg'} alt="Case Study 2" className="image" />
                        <div className="text-overlay">
                            <h3>Olympian</h3>
                            <p>Description of Case Study 2</p>
                        </div>
                    </div>
                </div>
                <div className={currentSlide === 1 ? 'case-column active' : 'case-column'}>
                    <div className="case-image-container">
                        <img src={process.env.PUBLIC_URL + '/dragon.jpeg'} alt="Case Study 1" className="image" />
                        <div className="text-overlay">
                            <h3>Dragon</h3>
                            <p>Description of Case Study 1</p>
                        </div>
                    </div>
                </div>
                <div className={currentSlide === 2 ? 'case-column active' : 'case-column'}>
                    <div className="case-image-container">
                        <img src={process.env.PUBLIC_URL + '/skhokho.jpeg'} alt="Case Study 3" className="image" />
                        <div className="text-overlay">
                            <h3>Skhokho</h3>
                            <p>Description of Case Study 3</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="prev" onClick={prevSlide}>&#10094;</button>
            <button className="next" onClick={nextSlide}>&#10095;</button>
        </div>
    );
}

export default CaseStudies;
