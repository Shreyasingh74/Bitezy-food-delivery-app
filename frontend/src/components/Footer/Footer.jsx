import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} height = {100} alt="" />
                <p>Bitezy is your trusted food delivery partner. We connect you with the best restaurants in your city and deliver fresh, delicious meals right to your doorstep quickly and safely.</p>
                <div className="footer-social-icons">
                  <img src={assets.facebook_icon} alt="" />
                  <img src={assets.twitter_icon} alt="" />
                  <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                  <li>Home</li>
                  <li>About us</li>
                  <li>Delivery</li>
                  <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                  <li>9673082795</li>
                  <li>contact@Bitezy.com</li>
                </ul>
            </div>
            
        </div>
      <hr />
      <p className="footer-copyright">Copyright 2026 © Bitezy.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
