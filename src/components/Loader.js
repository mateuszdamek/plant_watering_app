import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
        <div className="loader">
            <img src="/loader.svg" alt="Loading..." />
            <p>Loading...</p>
        </div>
    );
};

export default Loader;
