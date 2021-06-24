import React, { useEffect } from 'react';
import './contact.css';
const Contact = () => {
    useEffect(() => {
        document.title = 'Contact Information';
    });
    return (
        <div className="layout">
            <h1 className="ptitle">Contact Information</h1>
            <h2>To Book an Appointment Please Contact Us!</h2>
            <p>Phone Number: (631)600-3510</p>
            <p>Email: PawPrintsMDG@gmail.com</p>
            
            <p><a href="www.instagram.com/pawprintsmdg" class="fa fa-instagram"></a>: @PawPrintsMDG</p>



            
            <footer className="footer">
                Built by DR Design
            </footer>

        </div>
    );
};
export default Contact;
