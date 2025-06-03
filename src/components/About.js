import React from 'react';
import flowerShop from '../images/headers/flower shop.jpg';
import Florist from '../images/headers/florist.jpg';
import whiteFlower from '../images/headers/white flower.png';
import pinkFlower from '../images/headers/pink flower.png';
import lilyFlower from '../images/headers/lily flower.webp';

const About = () => {
  return (
   <section className='about-section'>
    <header className='about-header'>
        <div>
            <h3>About us</h3>
        </div>
    </header>

    <div className='image-stack'>
      <div className='circle'></div>
      <div className='image-stack-first'>
        <img src={flowerShop} alt='Our flower shop' className='image1'/>
      </div>
      <div className='image-stack-second'>
        <img src={Florist} alt='Florist' className='image2'/>
      </div>
      <div className='image-stack-pinkflower'>
        <img src={pinkFlower} alt='pink flower' className='image3'/>
      </div>
      <div className='image-stack-whiteflower'>
        <img src={whiteFlower} alt='white flower' className='image4'/>
      </div>
      <div className='image-stack-lilyflower'>
        <img src={lilyFlower} alt='lily flower' className='image5'/>
      </div>
        
    </div>
    

    <div className='about-text'>
      <p>At <span>Amour in Bloom</span>, flowers are more than just beautiful — they're a way to share love, celebrate life,
         and create lasting memories. Founded on a passion for creativity and a deep love for nature, 
         our shop is dedicated to offering fresh, thoughtfully arranged blooms for every occasion. 
         Whether it's a grand event or a simple "thinking of you," we believe each bouquet should tell a story.
         We take pride in creating unique, aesthetic flower arrangements that reflect both emotion and style — each 
         design is crafted with care, attention to detail, and a true appreciation for natural beauty.
          With a focus on quality, personal service, and artistic design, we’re proud to be your local florist 
          and a part of your most meaningful moments.</p>
    </div>

   </section>
  );
};

export default About;