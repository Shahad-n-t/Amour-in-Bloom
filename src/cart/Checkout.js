import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2';
import { useCart } from "../cart/CartContext";





const Checkout = () => {

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [emailAddress, setEmailAddress] = useState("");
const [phone, setPhone] = useState("");

const [country, setCountry] = useState("");
const [city, setCity] = useState("");
const [address, setAddress] = useState("");
const [zipCode, setZipCode] = useState("");

const [paymentMethod, setPaymentMethod] = useState("");

const [cardName, setCardName] = useState("");
const [cardNumber, setCardNumber] = useState("");
const [expiryDate, setExpiryDate] = useState("");
const [cvv, setCvv] = useState("");

const cardFieldsVaild = paymentMethod !== "Credit Card" || (
    cardName.trim() &&
    cardNumber.trim() &&
    expiryDate.trim() &&
    cvv.trim()
)

const formIsValid =
firstName.trim() &&
  lastName.trim() &&
  emailAddress.trim() &&
  phone.trim() &&
  country.trim() &&
  city.trim() &&
  address.trim() &&
  zipCode.trim() &&
  paymentMethod &&
  cardFieldsVaild;

const { clearCart } = useCart();


  return (
    <>
    <div className='checkout-header'>
        <h2>Checkout</h2>
    </div>
    <form className='checkout-form'>
        <div className='form-heading'>
            <h3>Contact Information</h3>
        </div>
        <div className='checkout-form-grid'>
        <div className='checkout-formField'>
            <input id='firstname' type='text' value={firstName} onChange={(e) => {setFirstName(e.target.value)}} placeholder='First Name *' required />
        </div>
         <div className='checkout-formField'>
            <input id='lastname' type='text' value={lastName} onChange={(e) => {setLastName(e.target.value)}} placeholder='Last Name *' required />
        </div>
         <div className='checkout-formField'>
            <input id='email' type='email' value={emailAddress} onChange={(e) => {setEmailAddress(e.target.value)}} placeholder='Email Address *' required />
        </div>
         <div className='checkout-formField'>
            <input id='phone' type='tel' value={phone} onChange={(e) => {setPhone(e.target.value)}} placeholder='Phone Number *' required />
        </div>
        </div>

        <div className='form-heading'>
            <h3>Shipping Information</h3>
        </div>
        <div className='checkout-form-grid'>
        <div className='checkout-formField'>
            <input id='country' type='text' value={country} onChange={(e) => {setCountry(e.target.value)}} placeholder='Country/ Region *' required />
        </div>
        <div className='checkout-formField'>
            <input id='city' type='text' value={city} onChange={(e) => {setCity(e.target.value)}} placeholder='City *' required />
        </div>
        <div className='checkout-formField'>
            <input id='text' type='text' value={address} onChange={(e) => {setAddress(e.target.value)}} placeholder='Address *' required />
        </div>
        <div className='checkout-formField'>
            <input id='zip-code' type='text' value={zipCode} onChange={(e) => {setZipCode(e.target.value)}} placeholder='Zip/ Postal code *' required />
        </div>
        </div>

        <div className='form-heading'>
        <h3>Payment</h3>
        </div>
        <hr className='separator' />

        <div className='payment-options'>
        <label className='payment-option'>
        <input type='radio' name='paymentMethod' value='Credit Card' checked={paymentMethod === "Credit Card"}
         onChange={(e) => setPaymentMethod(e.target.value)} required/>
         Credit / Debit Card
        </label>
        {paymentMethod === "Credit Card" && (
    <div className="card-details">
      <div className='checkout-form-grid'>
        <div className='credit-formField'>
         <input type='text' placeholder='Cardholder Name *' value={cardName}
         onChange={(e) => setCardName(e.target.value)} required />
        </div>
        <div className='credit-formField'>
         <input type='text' placeholder='Card Number *' value={cardName}
         onChange={(e) => setCardNumber(e.target.value)} required />
        </div>
        <div className='credit-formField'>
         <input type='text' placeholder='Expiry Date (MM/YY) *' value={expiryDate}
         onChange={(e) => setExpiryDate(e.target.value)} required />
        </div>
        <div className='credit-formField'>
         <input type='text' placeholder='CVV *' value={cvv}
         onChange={(e) => setCvv(e.target.value)} required />
        </div>
       </div>
   </div>
   )}

        <label className='payment-option'>
        <input type='radio' name='paymentMethod' value='Apple Pay' checked={paymentMethod === "Apple Pay"}
         onChange={(e) => setPaymentMethod(e.target.value)} />
         Apple Pay
        </label>

        <label className='payment-option'>
        <input type='radio' name='paymentMethod' value='Google Pay' checked={paymentMethod === "Google Pay"}
         onChange={(e) => setPaymentMethod(e.target.value)}/>
         Google Pay
        </label>

        <label className='payment-option'>
        <input type='radio' name='paymentMethod' value='PayPal'checked={paymentMethod === "PayPal"}
         onChange={(e) => setPaymentMethod(e.target.value)}/>
         PayPal
        </label>

        <label className='payment-option'>
        <input type='radio' name='paymentMethod' value='Cash on Delivery' checked={paymentMethod === "Cash on Delivery"}
         onChange={(e) => setPaymentMethod(e.target.value)}/>
         Cash on Delivery
        </label>
    </div>
    </form>

    <div className='checkout-elements'>
    <div className='terms'>
        <h4>By clicking the <span className='place-order'>‘Place Order’</span> button, you agree to the <span className='span'>Privacy policy</span> and <span className='span'>User agreement</span></h4>
    </div>
    <div>
        <button className='place-order-btn' aria-label='place order' disabled={!formIsValid}
            onClick={(e) => {
            e.preventDefault();

            clearCart();

            Swal.fire({
                html: `
                <h2 class="swal-title">Thank you! Your order is complete!</h2>
                <img src="/email_1990251.png" alt="Confirmation" width="180" height="180" style="margin: 1rem auto; display: block;" />
                <p class="swal-text">You will be receiving a confirmation email with the order details once your order is confirmed!</p>
                `,
                confirmButtonText: 'Yay!',
                customClass: {
                popup: 'custom-popup2',
                content: 'custom-content2',
                confirmButton: 'custom-confirm-button2',
                 }
            });
            }} >
        Place Order</button>
    </div>
    </div>
    </>
  )
}

export default Checkout