import React, { useState } from 'react'
import becleanBanner from './images/beclean_banner.png';
import './styles/contact.css';

const Contact = ({ className }) => {

    const [preferredContactMethod, setPreferredContactMethod] = useState('');

  return (
    <section id="contactSection" className={`${className}`}>
        <div className="container lg:flex lg:items-center">
            <div id="contactBanner">
                <h2 className="title-sm text-center">Questions?</h2>
                <div id="logoBanner">
                    <img src={becleanBanner} alt='beclean logo banner'/>
                </div>
            </div>
            <form
            action="https://formspree.io/f/myzgpqlg"
            method="POST"
            >
            <input type="text" placeholder="Name" name="Name" className="textbox" required/>
            <select id="contactPreference" name="Preference" className="textbox" required
                defaultValue=''
                onChange={(e) => setPreferredContactMethod(e.target.value)}
            >
                <option value="" disabled>Preferred method of contact</option>
                <option value="Email">Email</option>
                <option value="Phone">Phone</option>
            </select>
            <input type="email" name="Email" placeholder="Enter Email" required
                className={`textbox ${preferredContactMethod === 'Email' ? 'block' : 'hidden'}`} 
                id="textboxEmail"
            />
            <input type="tel" placeholder="Enter Phone" name="Phone" required
                className={`textbox ${preferredContactMethod === 'Phone' ? 'block' : 'hidden'}`} 
                id="textboxPhone"
            />
            <textarea placeholder="How can we help?" name="Message" className="textbox" rows="7"></textarea>
            <button type="submit" className="button">Submit</button>
            </form>
        </div>
      </section>
  )
}

export default Contact