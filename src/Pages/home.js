import React from 'react';
import './home.css';
import Van from './pictures/PawPrintsVan.JPG';
const Home = () => {
    return (
            <div className="layout">
                <h1 className="ptitle">Full Service Mobile Dog Grooming</h1>
            
                <div className="Van">
                <img src={Van} height="60%" width="60%" />
                </div>
                
                
                
                <footer className="footer">
                Built by DR Design
                </footer>
            </div>
    );
};

export default Home;