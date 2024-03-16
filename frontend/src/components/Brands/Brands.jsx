import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Brands.css'; // Import the CSS file for styling

const Brands = () => {
    const [images, setImages] = useState([]);
    const [filteredImages, setFilteredImages] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/images');
            setImages(response.data);
            setFilteredImages(response.data); // Set initial filtered images
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSortChange = (event) => {
        const newSortOrder = event.target.value;
        setSortOrder(newSortOrder);

        const sorted = [...filteredImages].sort((a, b) => {
            return newSortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        });
        setFilteredImages(sorted);
    };

    const handleFilter = () => {
        const filtered = images.filter(image => image.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredImages(filtered);
    };

    return (
        <div className="brands-container">
            <div className="title">
                <div className="rectangle"></div>
                <h2>You'll be in good company</h2>
            </div>
            <div className="description">
                <h3>Trusted by our leading brands</h3>
            </div>
            <div className="filters">
                <div className="filter">
                    <input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <button onClick={handleFilter}>Apply Filter</button>
                </div>
                <div className="sort-dropdown">
                    <label htmlFor="sort">Sort by name:</label>
                    <select id="sort" value={sortOrder} onChange={handleSortChange}>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
            </div>
            <div className="brands-row">
                {filteredImages.map((image, index) => (
                    <div key={index} className="brand-wrapper">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            dangerouslySetInnerHTML={{ __html: atob(image.data) }}
                            className="brand-image"
                        ></svg>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Brands;
