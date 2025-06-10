import React from 'react'
import redFlowers from '../images/petal colors/red flowers.jpg'
import pinkFlowers from '../images/petal colors/pink flowers.jpg'
import yellowFlowers from '../images/petal colors/yellow flowers.jpg'
import orangeFlowers from '../images/petal colors/orange flowers.jpg'
import purpleFlowers from '../images/petal colors/purple flowers.jpg'
import blueFlowers from '../images/petal colors/blue flowers.jpg'
import whiteFlowers from '../images/petal colors/white flower.jpg'

const PetalColors = () => {
  return (
    <>
    <div className='bloomcolors-header'>
        <h2>The Meaning Behind Every Bloom</h2>
        <h6>The meaning of flower colors isn’t perfectly well defined.  The symbolism 
         varies a little, but there are some consistencies you can use to match your 
         flowers to a special person, mood, or meaning that you can express when choosing
         the perfect bouquet!</h6>
    </div>
    <main className='bloomcolors' >
        <div className='bloomcolors-grid'>
            <article className='bloomcolors-card'>
              <img src={redFlowers} alt='red flowers'/>
              <div className='text-content'>
              <h3>Red flowers</h3>
              <h4>Primary Meaning: <span>Love, Romance, Passion, and Desire.</span></h4>
              <p>Red flowers are perhaps the most universally recognized symbols of deep romantic love.
                <br/> They can convey respect, courage, and admiration, especially in deeper crimson shades.</p>
              </div>
            </article>
            <article className='bloomcolors-card'>
              <img src={pinkFlowers} alt='pink peonies'/>
              <div className='text-content'>
              <h3>Pink flowers</h3>
              <h4>Primary Meaning: <span>Grace, Gentleness, Happiness, and Admiration.</span></h4>
              <p>Light pinks suggest innocence, you, and tenderness. <br/>
              Darker pinks are used to express gratitude and appreciation, especially in contexts like “Thank you” or “Thinking of you”.</p>
              </div>
            </article>
            <article className='bloomcolors-card'>
              <img src={yellowFlowers} alt='yellow daffodils'/>
              <div className='text-content'>
              <h3>Yellow flowers</h3>
              <h4>Primary Meaning: <span>Joy, Friendship, Optimism, and New Beginnings.</span></h4>
              <p> Bright and cheerful yellow flowers symbolize sunshine and positive energy. <br/>
              They’re ideal for cheering someone up or celebrating a platonic relationship. 
              Today, they more commonly stand for warmth, renewal, and loyalty in friendship.</p>
              </div>
            </article>
            <article className='bloomcolors-card'>
              <img src={orangeFlowers} alt='orange chrysanthemum'/>
              <div className='text-content'>
              <h3>Orange flowers</h3>
              <h4>Primary Meaning: <span>Energy, Desire, Excitement, and Confidence.</span></h4>
              <p>Vibrant and attention-grabbing, orange flowers convey a sense of enthusiasm and zest for life. <br/>
              They symbolize strong attraction - not necessarily romantic, but often physical and emotional intensity.
              Orange flowers are great for celebrating accomplishments!</p>
              </div>
            </article>
            <article className='bloomcolors-card'>
              <img src={purpleFlowers} alt='pruple flowers'/>
              <div className='text-content'>
              <h3>Purple flowers</h3>
              <h4>Primary Meaning: <span>Royalty, Mystery, Spiritual Depth, and Success.</span></h4>
              <p>Historically, purple dye was expensive and rare, so the color became associated with warmth and nobility. <br/>
              In flowers, purple suggests dignity, grace, and a sense of magic or enchantment.</p>
              </div>
            </article>
            <article className='bloomcolors-card'>
              <img src={blueFlowers} alt='blue hydrangeas'/>
              <div className='text-content'>
              <h3>Blue flowers</h3>
              <h4>Primary Meaning: <span>Peace, Trust, Stability, and Mystery.</span></h4>
              <p>Blue flowers are rare in nature, so they often symbolize the unattainable or dreamlike. <br/>
              They evoke the feelings of calm, tranquility, and hope. Lighter blues, like forget me nots, are tied to faithfulness,
              remembrance, and gentle love. Deeper blues may represent depth and emotion, loyalty, and reliability - like a steady, 
              enduring bond.</p>
              </div>
            </article>
            <article className='bloomcolors-card'>
              <img src={whiteFlowers} alt='white carnations'/>
              <div className='text-content'>
              <h3>White flowers</h3>
              <h4>Primary Meaning: <span>Purity, Innocence, Reverence, and Peace.</span></h4>
              <p>Commonly associated with weddings, they symbolize new beginnings and pure love. <br/>
              White Flowers enhance the symbolism of other flower colors when arranged together in bouquets.
              For instance, a red rose might become more passionate and romantic when white lilies are nestled alongside them!</p>
              </div>
            </article>
        </div>
    </main>
    </>
  )
}

export default PetalColors