import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope, faSpa } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2';

const ContactUs = (props) => {

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [moreInfo, setMoreInfo] =useState("");

 const isFormValid = userName.trim() && userEmail.trim() && moreInfo.trim();

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (!isFormValid) return;

    Swal.fire({
      title: "Thank you for your patience!",
      text: "We will get to you as soon as possible!",
      icon: "success",
      customClass: {
                 popup: 'custom-popUp',
                 title: 'custom-Title',
                 content: 'custom-Content',
                 confirmButton: 'custom-confirmBtn',
                 }
    });

    setUserName("");
    setUserEmail("");
    setMoreInfo("");
  };


  return (

    <>
     <div className='contact-img'>
        <div className='contact-headerText'>
            <h2>Contact Us</h2>
        </div>
       </div>
    <section className='contact-page'>
        <div className='contact-boxes'>
            <div className='phone-box'>
                <div className='fa-icon'><FontAwesomeIcon icon={faPhone} size='4x'/></div>
                <h5 className='box-header'>Phone Number</h5>
                <p className='box-text'>305-8768-453</p>
            </div>
            <div className='whatsapp-box'>
                <div className='fa-icon'><FontAwesomeIcon icon={faWhatsapp} size='4x' /></div>
                <h5 className='box-header'>Whatsapp</h5>
                <p className='box-text'>082-123-548-976</p>
            </div>
            <div className='email-box'>
                <div className='fa-icon'><FontAwesomeIcon icon={faEnvelope} size='4x' /></div>
                <h5 className='box-header'>Email</h5>
                <p className='box-text'>amour_in_bl00m@email.com</p>
            </div>
            <div className='ourShop-box'>
                <div className='fa-icon'><FontAwesomeIcon icon={faSpa} size='4x' /></div>
                <h5 className='box-header'>Our Shop</h5>
                <p className='box-text'>NY, 1234 Broadway</p>
            </div>
        </div>
         
         <form onSubmit={handleSubmit}>

        <div className='contact-form'>
             <div className='form-header'>
                <h2>Get in Touch with us</h2>
            </div>
            <div className='form-field'>
                <label htmlFor='name'>Name</label>
                <input id='name' type='text' value={userName} onChange={(e) => {setUserName(e.target.value)}} placeholder='Enter your name' required/>
            </div>
            <div className='form-field'>
                <label htmlFor='email'>Email</label>
                <input id='email' type='text' value={userEmail} onChange={(e) => {setUserEmail(e.target.value)}} placeholder='Enter your email' required/>
            </div>
            <div className='form-field'>
                <label htmlFor='message'>Message</label>
                <input id='message' type='text' value={moreInfo} onChange={(e) => {setMoreInfo(e.target.value)}} placeholder='Type your question/message' required/>
            </div>
            <div className='formBtn'>
                <input aria-label='On Click' type={"submit"} value={"Send now"} disabled={!isFormValid}/>
            </div>
        </div>
        </form>
    </section>
    </>   
  )
}

export default ContactUs