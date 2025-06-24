import React, { useState } from 'react';

const TrackOrder = () => {
  const [email, setEmail] = useState('');
  const [orderNumber, setOrderNumber] = useState('');
  const [status, setStatus] = useState(null);

  const handleTrackOrder = (e) => {
    e.preventDefault();

    if (email && orderNumber === '123456') {
      setStatus('Your bouquet is on its way and should arrive soon! 💐');
    } else {
      setStatus('Hmm... we couldn’t find your order. Double check your info.');
    }
  };

  return (
    <div className='track-page-wrapper'>
    <div className="track-order-wrapper">
      <h2>Track Your Order</h2>
      <form onSubmit={handleTrackOrder} className="track-order-form">
        <input
          type="email"
          placeholder="Your Email Address *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Order Number *"
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
          required
        />
        <button type="submit">Track Order</button>
      </form>
      {status && <p className="order-status-message">{status}</p>}
    </div>
    </div>
  );
};

export default TrackOrder;
