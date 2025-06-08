import React from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import CategoryData from './CategoryData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const CategoryPage = () => {

 const { categoryName } = useParams();
 const category = CategoryData[categoryName]

 const navigate= useNavigate();

 if (!category) {
  return <Navigate to='/Categories' replace/>;
 };

  return (
    <>
    <div className='category-image-header'></div>
    <div className='category-backBtn' onClick={() => navigate(-1)} style={{cursor: 'pointer'}}>
      <FontAwesomeIcon icon={faArrowLeft} size='2x' />
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
            <button className='product-button' aria-label='Add to cart'>
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