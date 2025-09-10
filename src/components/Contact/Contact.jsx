import React from 'react';
import './Contact.css';
import contactImg from '../../assets/msg-icon.png';
import emailIcon from '../../assets/mail-icon.png';
import phoneIcon from '../../assets/phone-icon.png';
import locationIcon from '../../assets/location-icon.png';
import whiteArrorw from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "32cf2361-62ad-4e8b-a3ce-253b6daf1f2d");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    }

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
                <form onSubmit={onSubmit}>
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
                <span>{result}</span>
            </div>
        </div>
    );
}

export default Contact;
