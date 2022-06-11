import React from 'react';
import {FooterOverlay, Newsletter} from '../../components'
import {images} from '../../constants'
import {FiTwitter, FiFacebook, FiInstagram} from 'react-icons/fi'
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay/>
    <Newsletter/>

    <div className="app__footer-links">
      <div className="app__footer-links-contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className='p__opensans'> 1097 Brooklyn, 23th Street Ave. NewYork City</p>
          <p className='p__opensans'>+1 780-2988-9076</p>
          <p className='p__opensans'>+1 780-2321-3376</p>

      </div>
      <div className="app__footer-links-logo">
            <img src={images.gericht} alt="Gericht" />
            <p className="p__opensans">The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others.</p>
            <img src={images.spoon} alt="Spoon"  style={{marginTop:'15'}}/>
            <div className="app__footer-links-icons">
              <FiFacebook/>
              <FiTwitter/>
              <FiInstagram/>
            </div>
      </div>
      <div className="app__footer-links-work">
      <h1 className="app__footer-headtext">Working Hours</h1>
          <p className='p__opensans'> Monday - Friday</p>
          <p className='p__opensans'>10:00 am to 02:00 am</p>
          <p className='p__opensans'>Saturday - Sunday</p>
          <p className='p__opensans'>12:00 pm to 03:00 am</p>
      </div>
    </div>

    <div className="app__footer-copyright">
        <p className="p__opensans">2021 Gericht. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
