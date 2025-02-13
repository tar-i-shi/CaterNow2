import React from 'react';
const ContactForm = () => {
    return (
        <section id="contact" className="contact-section">
            <h2>Contact Us</h2>
            <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
};

export default ContactForm;