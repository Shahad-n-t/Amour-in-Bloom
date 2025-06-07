import React from 'react'

/* Best Sellers*/
import SunsetSpritz from '../images/best sellers/sunset spritz.jpg'
import EnchantedDusk from '../images/best sellers/enchanted dusk.jpg'
import GhostlyGrace from '../images/best sellers/ghostly grace.jpg'
import FloralExtravaganza from '../images/best sellers/floral extravaganza.jpg'
import BlushandBlue from '../images/best sellers/blush and blue.jpg'
import FreshBloom from '../images/best sellers/fresh bloom.jpg'
import SunnyMajesty from '../images/best sellers/sunny majesty.jpg'
import SpringtimeSplendor from '../images/best sellers/springtime splendor.jpg'
import GardenParty from '../images/best sellers/graden party.jpg'

/*Big Bouquets*/
import PinkSonata from '../images/big arrangements/pink sonata.jpg'
import DelicateGrace from '../images/big arrangements/delicate grace.jpg'
import SoftHarmony from '../images/big arrangements/soft harmony.jpg'
import HelloSunshine from '../images/big arrangements/hello sunshine.jpg'
import SugarFuchsia from '../images/big arrangements/sugar fuchsia.jpg'
import SunsetSpark from '../images/big arrangements/sunset spark.jpg'
import SpringFling from '../images/big arrangements/spring fling.jpg'
import PaintersGarden from '../images/big arrangements/painters garden.jpg'
import SeasideBreeze from '../images/big arrangements/seaside breeze.jpg'

/*Flowers in Vases*/
import WhispersofSpring from '../images/flowers in vases/whispers of spring.jpg'
import LavendarBlue from '../images/flowers in vases/lavendar blue.jpg'
import SummerDream from '../images/flowers in vases/summer dream.jpg'
import PetalPop from '../images/flowers in vases/petal pop.jpg'
import PinkLemonade from '../images/flowers in vases/pink lemonade.jpg'
import LoveStory from '../images/flowers in vases/love story.jpg'
import RosesandLilies from '../images/flowers in vases/roses and lilies.jpg'
import SpringSorbet from '../images/flowers in vases/spring sorbet.jpg'
import WhiteandBlue from '../images/flowers in vases/white and blue.jpg'

/*Flower Bouquets*/
import TropicalBloom from '../images/flower bouquets/tropical bloom.jpg'
import PinkParade from '../images/flower bouquets/pink parade.jpg'
import FreshBloom2 from '../images/flower bouquets/fresh bloom.jpg'
import SummerSerenade from '../images/flower bouquets/summer serenade.jpg'
import FloralDream from '../images/flower bouquets/floral dream.jpg'
import DovesDelight from '../images/flower bouquets/doves delight.jpg'
import VelvetEmber from '../images/flower bouquets/velvet ember.jpg'
import TimelessBeauty from '../images/flower bouquets/timeless beauty.jpg'
import VerdantCharm from '../images/flower bouquets/verdant charm.jpg'

/*Flower Baskets*/
import SugarPetals from '../images/flower baskets/sugar petals.jpg'
import SummerSonata from '../images/flower baskets/summer sonata.jpg'
import CloudSerenade from '../images/flower baskets/cloud serenade.jpg'
import DahliaDelight from '../images/flower baskets/dahlia delight.jpg'
import TenderBloom from '../images/flower baskets/tender bloom.jpg'
import FieldsofGold from '../images/flower baskets/fields of gold.jpg'
import WhiteNoir from '../images/flower baskets/white noir.jpg'
import LoveinBloom from '../images/flower baskets/love in bloom.jpg'
import PinkWhisper from '../images/flower baskets/pink whisper.jpg'

/*Graduation*/
import PinkRoses from '../images/grad/pink roses.jpg'
import WhiteGrad from '../images/grad/white grad.jpg'
import WhiteandPink from '../images/grad/white and pink.jpg'
import TeddyBouquet from '../images/grad/teddy bouquet.jpg'
import MixedFlowers from '../images/grad/mixed flowers.jpg'
import RedFlowers from '../images/grad/red flower stand.jpg'
import PinkCarnations from '../images/grad/pink carnations.jpg'
import PinkArrangements from '../images/grad/pink arrangement.jpg'
import GiftBouquet from '../images/grad/gift bouquet.jpg'

/*Get well soon*/
import BubblegumBlush from '../images/get well soon/bubblegum blush.jpg'
import Blushed from '../images/get well soon/blushed.jpg'
import RosyGlow from '../images/get well soon/rosy glow.jpg'
import RougeReverie from '../images/get well soon/rouge reverie.jpg'
import FuchsiaFade from '../images/get well soon/fuchsia fade.jpg'
import PinkSymphony from '../images/get well soon/pink symphony.jpg'
import PowderedPalette from '../images/get well soon/powdered palette.jpg'
import MellowYellow from '../images/get well soon/mellow yellow.jpg'
import PeachyPetals from '../images/get well soon/peachy petals.jpg'

/*Vases*/
import LilyCascade from '../images/vases/lily cascade.jpg'
import RusticElegance from '../images/vases/rustic elegance.jpg'
import Bark from '../images/vases/bark.jpg'
import CootonCandy from '../images/vases/cotton candy.jpg'
import GentleGarden from '../images/vases/gentle garden.jpg'
import GlossGrace from '../images/vases/gloss and grace.jpg'
import PlumCrystal from '../images/vases/plum crystal.jpg'
import MuttedMeadow from '../images/vases/mutted meadow.jpg'
import MossandMist from '../images/vases/moss and mist.jpg'

const CategoryData = () => {
  return (
    BestSellers: {
        title: 'Best Sellers',
        items: [
            { name: 'Sunset Spritz', price: 57.99, img: SunsetSpritz},
            { name: 'Enchanted Dusk', price: 67.99, img: EnchantedDusk},
            { name: 'Ghostly Ghost', price: 96.99, img: GhostlyGrace},
            { name: 'Floral Extravagnza', price: 119.99, img: FloralExtravaganza},
            { name: 'Blush and Blue', price: 64.99, img: BlushandBlue},
            { name: 'Fresh Bloom', price: 52.99, img: FreshBloom},
            { name: 'Sunny Majesty', price: 67.99, img: SunnyMajesty},
            { name: 'Springtime Splendor', price: 83.99, img: SpringtimeSplendor},
            { name: 'Garden Party', price: 69.99, img: GardenParty},
        ],
    },
    BigBouquets: {
        title: "Big floral arrangements",
        items: [
            { name: 'Pink Sonata', price: 92.99, img: PinkSonata},
            { name: 'Delicate Grace', price: 74.99, img: DelicateGrace},
            { name: 'Soft Harmony', price: 85.99, img: SoftHarmony},
            { name: 'Hello Sunshine', price: 99.99, img: HelloSunshine},
            { name: 'Sugar Fuchsia', price: 69.99, img: SugarFuchsia},
            { name: 'Sunset Spark', price: 86.99, img: SunsetSpark},
            { name: 'Spring Fling', price: 95.99, img: SpringFling},
            { name: 'Painters Garden', price: 79.99, img: PaintersGarden},
            { name: 'SeaSide Breeze', price: 82.99, img: SeasideBreeze},
        ],
    },
    FlowersinVases: {
        title: "Flowers in Vases",
        items: [
            { name: 'Whispers of Spring', price: 79.99, img: WhispersofSpring},
            { name: 'Lavendar Blue', price: 55.99, img: LavendarBlue},
            { name: 'Summer Dream', price: 40.99, img: SummerDream},
            { name: 'Petal Pop', price: 49.99, img: PetalPop},
            { name: 'Pink Lemonade', price: 55.99, img: PinkLemonade},
            { name: 'Love Story', price: 69.99, img: LoveStory},
            { name: 'Roses and Lilies', price: 72.99, img: RosesandLilies},
            { name: 'Spring Sorbet', price: 80.99, img: SpringSorbet},
            { name: 'White & Blue', price: 36.99, img: WhiteandBlue},
        ],
    },
    FlowerBouquets: {
        title: "Flower Bouquets",
        items: [
            { name: 'Tropical Bloom', price: 71.99, img: TropicalBloom},
            { name: 'Pink Parade', price: 49.99, img: PinkParade},
            { name: 'Fresh Bloom', price: 52.99, img: FreshBloom2},
            { name: 'Summer Serenade', price: 52.99, img: SummerSerenade},
            { name: 'Floral Dream', price: 63.99, img: FloralDream},
            { name: 'Doves Delight', price: 36.99, img: DovesDelight},
            { name: 'Velvet Ember', price: 58.99, img: VelvetEmber},
            { name: 'Timeless Beauty', price: 39.99, img: TimelessBeauty},
            { name: 'Verdant Charm', price: 69.99, img: VerdantCharm},
        ],
    },
)
}

export default CategoryData