import React from 'react';

const Footer = () => {
    return (
        <div className="card" style={{marginTop:'50px'}}>
            <div className="card-body">
                <blockquote className="blockquote mb-0" style={{textAlign:'center'}}>
                <p>&copy; {new Date().getFullYear()} News Portal. All rights reserved.</p>
                </blockquote>
            </div>
        </div>
    );
};

export default Footer;
