import React from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import CategoryData from './CategoryData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';



const CategoryPage = () => {

 const { categoryName } = useParams();
 const category = CategoryData[categoryName]

 const navigate= useNavigate();

 if (!category) {
  return <Navigate to='/Categories' replace/>;
 };

const addToCartMessages = {
  BestSellers: "A favorite for a reason! Added to your cart 🌟",
  BigBouquets: "Big beauty coming your way! Added to cart 💐",
  FlowersinVases: "Elegance in a vase! In the cart now 🌸",
  FlowerBouquets: "Fresh bouquet added — brighten your day! 💕",
  FlowerBaskets: "Basket of beauty coming up! Added to your cart 🎁",
  Graduation: "Ready to celebrate someone special! — flowers added! 🎓",
  GetWellSoon: "Sending sweet recovery vibes! — added to cart 🌈",
  Vases: "A beautiful base for your blooms is on hold! 🏺",
};



 
  return (
    <>
    <div className='category-image-header'></div>
    <div className='category-backBtn' onClick={() => navigate(-1)} style={{cursor: 'pointer'}}>
      <FontAwesomeIcon icon={faArrowLeft} size='2x' className='backbtn-icon' />
      <h2>Go back</h2>
    </div>
    <header className='category-text-header'>{category.title}</header>

    <main className='category-products'>
      <div className='product-grid'>
        {category.items.map((item, index) => (
          <article key={index} className='product-card'>
            <img src={item.img} alt={item.name}/>
            <div className='product-text'>
              <h4>{item.name}</h4>
              <h5>{item.price.toFixed(2)}</h5>
            </div>
            <button className='product-button' aria-label='Add to cart' onClick={(e) => {
               e.preventDefault(); 
               
               const message =
               addToCartMessages[categoryName] ||
               "Your arrangement is in the cart — ready when you are 💐"

               Swal.fire({
               title: "Petals on the way!",
               text: message,
               icon: "success",
               confirmButtonText: 'Lovely!',
                customClass: {
                 popup: 'custom-popup',
                 title: 'custom-title',
                 content: 'custom-content',
                 confirmButton: 'custom-confirm-button',
                 }
              });
            }}>
              Add to cart
            </button>
          </article>
        ))}
      </div>
    </main>
    </>
  )
}

export default CategoryPage;