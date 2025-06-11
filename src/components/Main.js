import React from 'react'
import BestSellers from '../images/shop aesthetic/best sellers.jpg';
import Bouquet from '../images/shop aesthetic/purple bouquet.jpg';
import Baskets from '../images/shop aesthetic/baskets.jpg'
import WhiteFlowers from '../images/petal colors/white flower.jpg'
import PinkFlowers from '../images/petal colors/pink flowers.jpg'
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <section>
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

        <div className='main-categories'>
         <article className='card'>
         <img className='card-img' src={BestSellers} alt='best sellers'/>
         <div className='button-style'>
          <Link to='/categories/BestSellers'>
            <button className='card-button' aria-label='On-Click'>Best sellers</button>
          </Link>
          </div>
         </article>

         <article className='card'>
          <img className='card-img' src={Bouquet} alt='best sellers'/>
          <div className='button-style'>
            <Link to='/categories/FlowerBouquets'>
             <button className='card-button' aria-label='On-Click'>Flower bouquets</button>
            </Link>
          </div>
          </article>

         <article className='card'>
          <img className='card-img' src={Baskets} alt='best sellers'/>
          <div className='button-style'>
            <Link to='/categories/FlowerBaskets'>
              <button className='card-button' aria-label='On-Click'>Flower baskets</button>
            </Link>
         </div>
         </article>
        </div>
        <div className='category-link'>
          <Link to='/Categories' className='seeMore'><u>See More</u></Link>
         </div>



        
        <div className='petal-header'>
        <Link to='/PetalColors' className='flowertype-title'><u>Get to know flowers and what they have to say!</u></Link>
        </div>


         <div className='petal-colors'>
         <article className='flower-meanings'>
          <img className='flowertype-img' src={WhiteFlowers} alt='White Carnations'/>
          <div className='flowertype-text'>
            <h5 className='flowertype-heading'>White Flowers</h5>
            <p className='flowertype-p'>Primary Meaning: <span>Purity, Innocence, Reverence, and Peace.</span><br/>
                Commonly associated with weddings, they symbolize new beginnings and pure love....</p>
          </div>
          <div className='flowertype-button'>
            <Link to='/PetalColors'>
            <button className='petalcolor-button' aria-label='On-Click'>Click to read more!</button>
            </Link>
          </div>
         </article>

         <article className='flower-meanings'>
          <img className='flowertype-img' src={PinkFlowers} alt='Coral Sunset Peonies '/>
          <div className='flowertype-text'>
            <h5 className='flowertype-heading'>Pink Flowers</h5>
            <p className='flowertype-p'>Primary Meaning: <span>Grace, Gentleness, Happiness, and Admiration.</span> <br/>
                 Light pinks suggest innocence, youth, and tenderness....</p>
          </div>
          <div className='flowertype-button'>
            <Link to='/PetalColors'>
            <button className='petalcolor-button' aria-label='On-Click'>Click to read more!</button>
            </Link>
          </div>
         </article>
        </div>

     </main>
     </section>
)
}

export default Main;