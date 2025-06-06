import React from 'react'
import { Link } from 'react-router-dom'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import bestSellers from '../images/shop aesthetic/best sellers.jpg'
import bigBouquets from '../images/shop aesthetic/big bouquet.jpg'
import flowerBouquets from '../images/shop aesthetic/purple bouquet.jpg'
import flowerVases from '../images/shop aesthetic/flower vaess.jpg'
import flowerBaskets from '../images/shop aesthetic/baskets.jpg'
import graduation from '../images/shop aesthetic/graduate.jpg'
import getWellSoon from '../images/shop aesthetic/card.jpg'
import vases from '../images/shop aesthetic/vases.jpg'

const Categories = () => {
  return (
    <>
    <div className='category-image'></div>
     <header className='category-header'>
            Shop by category
        </header>
        <main className='categories'>
        <div className='category-grid'>
            <article className='category-card'>
                <img src={bestSellers} alt='our best sellers'/>
                <h5>Shop <span>Best sellers</span></h5>
                <div className='arrow-container'>
                <Link to='/BestSellers'>
                <ArrowCircleUpIcon className='arrow' fontSize='large'/>
                </Link>
                </div>
            </article> 
            <article className='category-card'>
                <img src={bigBouquets} alt='big floral arrangements'/>
                <h5>Shop <span>Big floral arrangements</span></h5>
                <div className='arrow-container'>
                <Link to='/BigBouquets'>
                <ArrowCircleUpIcon className='arrow' fontSize='large'/>
                </Link>
                </div>
            </article>
             <article className='category-card'>
                <img src={flowerVases} alt='flowers in vases'/>
                <h5>Shop <span>Flowers in vases</span></h5>
                <div className='arrow-container'>
                <Link to='/FlowersinVases'>
                <ArrowCircleUpIcon className='arrow' fontSize='large'/>
                </Link>
                </div>
            </article>
             <article className='category-card'>
                <img src={flowerBouquets} alt='flower bouquets'/>
                <h5>Shop <span>Flower bouquets</span></h5>
                <div className='arrow-container'>
                <Link to='/FlowerBouquets'>
                <ArrowCircleUpIcon className='arrow' fontSize='large'/>
                </Link>
                </div>
            </article>
             <article className='category-card'>
                <img src={flowerBaskets} alt='flower baskets'/>
                <h5>Shop <span>Flower baskets</span></h5>
                <div className='arrow-container'>
                <Link to='/FlowerBaskets'>
                <ArrowCircleUpIcon className='arrow' fontSize='large'/>
                </Link>
                </div>
            </article>
             <article className='category-card'>
                <img src={graduation} alt='gifts for graduates'/>
                <h5>Shop <span>Graduation</span></h5>
                <div className='arrow-container'>
                <Link to='/Graduation'>
                <ArrowCircleUpIcon className='arrow' fontSize='large'/>
                </Link>
                </div>
            </article>
             <article className='category-card'>
                <img src={getWellSoon} alt='get well soon flowers'/>
                <h5>Shop <span>Get well soon</span></h5>
                <div className='arrow-container'>
                <Link to='/GetWellSoon'>
                <ArrowCircleUpIcon className='arrow' fontSize='large'/>
                </Link>
                </div>
            </article>
             <article className='category-card'>
                <img src={vases} alt='vases'/>
                <h5>Shop <span>Vases</span></h5>
                <div className='arrow-container'>
                <Link to='/Vases'>
                <ArrowCircleUpIcon className='arrow' fontSize='large'/>
                </Link>
                </div>
            </article>
        </div>
    </main>
    </>
  )
}

export default Categories