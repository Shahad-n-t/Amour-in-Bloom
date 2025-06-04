import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope, faSpa } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2';

const ContactUs = (props) => {

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [moreInfo, setMoreInfo] =useState("");
  const [isDisabled, setIsDiabled] =useState(true);

  const toggleDisabled = () => {
    setIsDiabled(!isDisabled);
  }

  const AlertMessage = () => {
    Swal.fire({
    title: "Thank you for your patience!",
    text: "We will get to you as soon as possible!",
    icon: "success"
  });
  }

  

  return (
    <section className='contact-page'>
       <div className='contact-img'>
        <div className='contact-headerText'>
            <h2>Contact Us</h2>
        </div>
       </div>

        <div className='contact-boxes'>
            <div className='phone-box'>
                <FontAwesomeIcon icon={faPhone} size='4x' />
                <h5>Phone Number</h5>
                <p>305-8768-453</p>
            </div>
            <div className='whatsapp-box'>
                <FontAwesomeIcon icon={faWhatsapp} size='4x' />
                <h5>Whatsapp</h5>
                <p>082-123-548-976</p>
            </div>
            <div className='email-box'>
                <FontAwesomeIcon icon={faEnvelope} size='4x' />
                <h5>Email</h5>
                <p>amour_in_bl00m@email.com</p>
            </div>
            <div className='ourShop-box'>
                <FontAwesomeIcon icon={faSpa} size='4x' />
                <h5>Our Shop</h5>
                <p>NY, 1234 Broadway</p>
            </div>
        </div>
         
         <form>
        <div className='contact-form'>
            <div className='form-header'>
                <h2>Get in Touch with us</h2>
            </div>
            <div className='form-name'>
                <label>Name</label>
                <input type='text' value={userName} onChange={(e) => {setUserName(e.target.value)}} placeholder='Enter your name' required/>
            </div>
            <div className='form-email'>
                <label>Email</label>
                <input type='text' value={userEmail} onChange={(e) => {setUserEmail(e.target.value)}} placeholder='Enter your email' required/>
            </div>
            <div className='form-message'>
                <label>Message</label>
                <input type='text' value={moreInfo} onChange={(e) => {setMoreInfo(e.target.value)}} placeholder='Type youjr question /message' required/>
            </div>
            <div className='formBtn'>
                <input aria-label='On Click' type={"submit"} value={"Send now"} onClick={AlertMessage} disabled={toggleDisabled}/>
            </div>
        </div>
        </form>
    </section>
  )
}

export default ContactUs