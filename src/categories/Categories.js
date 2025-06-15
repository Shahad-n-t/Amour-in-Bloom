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
            <Link to='/categories/BestSellers' className='category-link2'>
            <article className='category-card'>
                <img src={bestSellers} alt='our best sellers'/>
                <h5>Shop <span>Best sellers</span></h5>
                <div className='arrow-container'>
                <ArrowCircleUpIcon className='arrow' fontSize='large'/>
                </div>
            </article> 
            </Link>
            <Link to='/categories/BigBouquets' className='category-link2'>
            <article className='category-card'>
                <img src={bigBouquets} alt='big floral arrangements'/>
                <h5>Shop <span>Big floral arrangements</span></h5>
                <div className='arrow-container'>
                <ArrowCircleUpIcon className='arrow' fontSize='large'/>
                </div>
            </article>
            </Link>
            <Link to='/categories/FlowersinVases' className='category-link2'>
             <article className='category-card'>
                <img src={flowerVases} alt='flowers in vases'/>
                <h5>Shop <span>Flowers in vases</span></h5>
                <div className='arrow-container'>
                <ArrowCircleUpIcon className='arrow' fontSize='large'/>
                </div>
            </article>
            </Link>
            <Link to='/categories/FlowerBouquets' className='category-link2'>
             <article className='category-card'>
                <img src={flowerBouquets} alt='flower bouquets'/>
                <h5>Shop <span>Flower bouquets</span></h5>
                <div className='arrow-container'>
                <ArrowCircleUpIcon className='arrow' fontSize='large'/>
                </div>
            </article>
            </Link>
            <Link to='/categories/FlowerBaskets' className='category-link2'>
             <article className='category-card'>
                <img src={flowerBaskets} alt='flower baskets'/>
                <h5>Shop <span>Flower baskets</span></h5>
                <div className='arrow-container'>
                <ArrowCircleUpIcon className='arrow' fontSize='large'/>
                </div>
            </article>
            </Link>
            <Link to='/categories/Graduation' className='category-link2'>
             <article className='category-card'>
                <img src={graduation} alt='gifts for graduates'/>
                <h5>Shop <span>Graduation</span></h5>
                <div className='arrow-container'>
                <ArrowCircleUpIcon className='arrow' fontSize='large'/>
                </div>
            </article>
            </Link>
            <Link to='/categories/GetWellSoon' className='category-link2'>
             <article className='category-card'>
                <img src={getWellSoon} alt='get well soon flowers'/>
                <h5>Shop <span>Get well soon</span></h5>
                <div className='arrow-container'>
                <ArrowCircleUpIcon className='arrow' fontSize='large'/>
                </div>
            </article>
            </Link>
             <Link to='/categories/Vases' className='category-link2'>
             <article className='category-card'>
                <img src={vases} alt='vases'/>
                <h5>Shop <span>Vases</span></h5>
                <div className='arrow-container'>
                <ArrowCircleUpIcon className='arrow' fontSize='large'/>
                </div>
            </article>
            </Link>
        </div>
    </main>
    </>
  )
}

export default Categories