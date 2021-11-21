import React from "react";
import './_contactPage.scss';
import contact from '../../assets/contact.png'

const ContactPage = () => {

    return (
        <section id="contact">
            <div className="container">
                <div className="contact-content">
                    <h1>Contact Us</h1>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
                    <form>
                        <input className="name" type="text" placeholder="First Name" />
                        <input className="last-name" type="text" placeholder="Last Name" />
                        <input className="subject" type="text" placeholder="Subject" />
                        <textarea className="message" rows="10" placeholder="Message"></textarea>
                        <button className="form-btn">Send</button>
                    </form>
                </div>
                <img src={contact} alt="nft gun" className="hero-img" />
            </div>
        </section>
    )
}

export default ContactPage