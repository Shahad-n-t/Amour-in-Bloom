import React from 'react'
import BestSellers from '../images/shop aesthetic/best sellers.jpg';
import Bouquet from '../images/shop aesthetic/purple bouquet.jpg';
import Baskets from '../images/shop aesthetic/baskets.jpg'

const Main = () => {
  return (
    <body>
     <header className='welcome-message'>
        <div className='welcome-text'>
            <h3>
            Welcome to <i>Amour in Bloom</i>, where blooms meet beauty! Whether you're celebrating a special occasion or simply brightening someone’s day,
             our fresh, handcrafted floral arrangements are designed to inspire joy and connection. 
             We take pride in sourcing the finest flowers and creating unique designs that speak from the heart.
              Step into our garden of creativity — we're so glad you're here!
            </h3>
        </div>
        </header>

        <main>
        <div className='content-header'>
        <header className='title'>Categories</header>
        </div>

        <div className='categories'>
         <article className='card'>
         <img className='card-img' src={BestSellers} alt='best sellers'/>
         <div className='button-style'>
          <button className='card-button' aria-label='On-Click'>Best sellers</button>
          </div>
         </article>

         <article className='card'>
          <img className='card-img' src={Bouquet} alt='best sellers'/>
          <div className='button-style'>
          <button className='card-button' aria-label='On-Click'>Flower bouquets</button>
          </div>
          </article>

         <article className='card'>
          <img className='card-img' src={Baskets} alt='best sellers'/>
          <div className='button-style'>
         <button className='card-button' aria-label='On-Click'>Flower baskets</button>
         </div>
         </article>
        </div>
     </main>
    </body>
   

)
}

export default Main