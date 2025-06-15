import React from 'react'
import { useState } from 'react'



const Checkout = () => {

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [emailAddress, setEmailAddress] = useState("");
const [phone, setPhone] = useState("");

const [country, setCountry] = useState("");
const [city, setCity] = useState("");
const [address, setAddress] = useState("");
const [zipCode, setZipCode] = useState("");


  return (
    <>
    <div className='checkout-header'>
        <h2>Checkout</h2>
    </div>
    <form className='checkout-form'>
        <div className='form-heading'>
            <h3>Contact Information</h3>
        </div>
        <div className='checkout-formField'>
            <input id='firstname' type='text' value={firstName} onClick={(e) => {setFirstName(e.target.value)}} placeholder='First Name *' required />
        </div>
         <div className='checkout-formField'>
            <input id='lastname' type='text' value={lastName} onClick={(e) => {setLastName(e.target.value)}} placeholder='Last Name *' required />
        </div>
         <div className='checkout-formField'>
            <input id='email' type='email' value={emailAddress} onClick={(e) => {setEmailAddress(e.target.value)}} placeholder='Email Address *' required />
        </div>
         <div className='checkout-formField'>
            <input id='phone' type='tel' value={phone} onClick={(e) => {setPhone(e.target.value)}} placeholder='Phone Number *' required />
        </div>

        <div className='form-heading'>
            <h3>Shipping Information</h3>
        </div>
        <div className='checkout-formField'>
            <input id='country' type='text' value={country} onClick={(e) => {setCountry(e.target.value)}} placeholder='Country/ Region *' required />
        </div>
        <div className='checkout-formField'>
            <input id='city' type='text' value={city} onClick={(e) => {setCity(e.target.value)}} placeholder='City *' required />
        </div>
        <div className='checkout-formField'>
            <input id='text' type='text' value={address} onClick={(e) => {setAddress(e.target.value)}} placeholder='Address *' required />
        </div>
        <div className='checkout-formField'>
            <input id='zip-code' type='text' value={zipCode} onClick={(e) => {setZipCode(e.target.value)}} placeholder='Zip/ Postal code *' required />
        </div>

        <div className='form-heading'>
            <h3>Payment</h3>
        </div>
        <hr className='seperator'/>
        <div className='checkout-formField'>
            <input id='credit-card' type='radio' value='Credit Card' required />
        </div>
        <div className='checkout-formField'>
            <input id='applepay' type='radio' value='Apple Pay' required />
        </div>
        <div className='checkout-formField'>
            <input id='on-delivery' type='radio' value='Cash on Delivery' required />
        </div>
    </form>
    </>
  )
}

export default Checkout