import React, { useEffect } from 'react';
const Contact = () => {
    useEffect(() => {
        document.title = 'Contact Information';
    });
    return (
        <div>
            <h1>Contact Page</h1>
            <p>Paragraph</p>
        </div>
    );
};
export default Contact;
