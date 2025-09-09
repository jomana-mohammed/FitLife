import React from 'react';
import './Contact.css';
import contactImg from '../../assets/msg-icon.png';
import emailIcon from '../../assets/mail-icon.png';
import phoneIcon from '../../assets/phone-icon.png';
import locationIcon from '../../assets/location-icon.png';
import whiteArrorw from '../../assets/white-arrow.png'

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact-col'>
                <h3>Send us a message <img src={contactImg} alt=""/></h3>
                <p>
                    Feel free to reach out through contact form or find our contact information below. 
                    Your feedback, questions, and suggestions are important to us as 
                    we strive to provide exceptional service to our university community.
                </p>
                <ul>
                    <li><img src={emailIcon}/>Contact@GreatStack.dev</li>
                    <li> <img src={phoneIcon}/> +123-456-7890</li>
                    <li> <img src={locationIcon}/> 77 Massachusetts Ave, Cambridge
                        MA 02139, United States</li>
                </ul>
            </div>
            <div className='contact-col'>
                <form>
                    <label>Your Name</label>
                    <input type="text" placeholder='Enter Your Name' required/>
                    <label>Your Email</label>
                    <input type="email" placeholder='Your Email' required/>
                    <label>Phone number</label>
                    <input type="text" placeholder='phone number' required/>
                    <label>Your Message</label>
                    <textarea name='message' rows="6" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn'>Send Message <img src={whiteArrorw} /></button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
