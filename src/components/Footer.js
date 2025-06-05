import React from 'react'
import {Link} from 'react-router-dom';
import FooterLogo from '../images/headers/footer logo.PNG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <footer>
        <section>
            <div className='company-info'>
              <img src={FooterLogo} alt='footer logo'/>
            </div>

            <div>
                <h3>Important Links</h3>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/About'>About</Link></li>
                    <li><Link to='/Categories'>Categories</Link></li>
                    <li><Link to='/ContactUs'>Contact us</Link></li>
                </ul>
            </div>

            


            <div>
                <h3>Find us on</h3>
                <div className='footer-icons'>
                <FontAwesomeIcon icon={faTwitter} size='2x' className='footer-icon'/>
                <FontAwesomeIcon icon={faInstagram} size='2x' className='footer-icon' />
                <FontAwesomeIcon icon={faWhatsapp} size='2x' className='footer-icon' />
                <br/>
                <br/>
                </div>
             
                 <hr className='footer-separator'/>
                 <p>Copyright copyright 2025        | All rights reserved </p>
           </div>

        </section>
    </footer>
  )
}

export default Footer;