import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import SunsetSpritz from '../images/best sellers/sunset spritz.jpg'
import EnchantedDusk from '../images/best sellers/enchanted dusk.jpg'
import GhostlyGrace from '../images/best sellers/ghostly grace.jpg'
import FloralExtravaganza from '../images/best sellers/floral extravaganza.jpg'
import BlushandBlue from '../images/best sellers/blush and blue.jpg'
import FreshBloom from '../images/best sellers/fresh bloom.jpg'
import SunnyMajesty from '../images/best sellers/sunny majesty.jpg'
import SpringtimeSplendor from '../images/best sellers/springtime splendor.jpg'
import GardenParty from '../images/best sellers/graden party.jpg'

const BestSellers = () => {
  return (
    <>
    <div className='bs-image'></div>
    <div className='bs-back'>
        <FontAwesomeIcon icon={faArrowLeft} size='2x'/>
        <h2>Go back to Categories</h2>
    </div>
    <header className='bs-text-header'>Best sellers</header>
    <main className='best-sellers'>
        <div className='bs-grid'>
            <article className='bs-card'>
                <img src={SunsetSpritz} alt=''/>
                <div className='bs-card-text'>
                   <h4>Sunset Spritz</h4>
                   <h5>$ 57.99</h5>
                </div> 
                <button className='bs-card-button' aria-label='On Click'>Add to Cart</button>
            </article>
             <article className='bs-card'>
                <img src={EnchantedDusk} alt=''/>
                <div className='bs-card-text'>
                   <h4>Enchanted Dusk</h4>
                   <h5>$ 67.99</h5>
                </div> 
                <button className='bs-card-button' aria-label='On Click'>Add to Cart</button>
            </article>
             <article className='bs-card'>
                <img src={GhostlyGrace} alt=''/>
                <div className='bs-card-text'>
                   <h4>Ghostly Grace</h4>
                   <h5>$ 96.99</h5>
                </div> 
                <button className='bs-card-button' aria-label='On Click'>Add to Cart</button>
            </article>
             <article className='bs-card'>
                <img src={FloralExtravaganza} alt=''/>
                <div className='bs-card-text'>
                   <h4>Floral Extravaganza</h4>
                   <h5>$ 119.99</h5>
                </div> 
                <button className='bs-card-button' aria-label='On Click'>Add to Cart</button>
            </article>
             <article className='bs-card'>
                <img src={BlushandBlue} alt=''/>
                <div className='bs-card-text'>
                   <h4>Blush and Blue</h4>
                   <h5>$ 64.99</h5>
                </div> 
                <button className='bs-card-button' aria-label='On Click'>Add to Cart</button>
            </article>
             <article className='bs-card'>
                <img src={FreshBloom} alt=''/>
                <div className='bs-card-text'>
                   <h4>Fresh Bloom</h4>
                   <h5>$ 52.99</h5>
                </div> 
                <button className='bs-card-button' aria-label='On Click'>Add to Cart</button>
            </article>
             <article className='bs-card'>
                <img src={SunnyMajesty} alt=''/>
                <div className='bs-card-text'>
                   <h4>Sunny Majesty</h4>
                   <h5>$ 67.99</h5>
                </div> 
                <button className='bs-card-button' aria-label='On Click'>Add to Cart</button>
            </article>
             <article className='bs-card'>
                <img src={SpringtimeSplendor} alt=''/>
                <div className='bs-card-text'>
                   <h4>SpringtimeSplendor</h4>
                   <h5>$ 83.99</h5>
                </div> 
                <button className='bs-card-button' aria-label='On Click'>Add to Cart</button>
            </article>
             <article className='bs-card'>
                <img src={GardenParty} alt=''/>
                <div className='bs-card-text'>
                   <h4>Garden Party</h4>
                   <h5>$ 69.99</h5>
                </div> 
                <button className='bs-card-button' aria-label='On Click'>Add to Cart</button>
            </article>
        </div>
    </main>
    </>
  )
}

export default BestSellers