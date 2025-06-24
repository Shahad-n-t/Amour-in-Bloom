import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import TrackOrder from './pages/TrackMyOrder';
import Footer from './components/Footer';
import Categories from './categories/Categories';
import CategoryPage from './pages/CategoryPage';
import PetalColors from './pages/PetalColors';
import CartProvider from './cart/CartContext';
import ShoppingCart from './cart/ShoppingCart'
import Checkout from './cart/Checkout';


function App() {
  return (
    <Router>
      <ScrollToTop/>
     <Navbar/>
     <CartProvider>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/About' element={<About/>}/>
       <Route path='/ContactUs' element={<ContactUs/>}/>
       <Route path='/TrackOrder' element={<TrackOrder/>}/>
       <Route path='/Categories' element={<Categories/>}/>
       <Route path='/categories/:categoryName' element={<CategoryPage/>}/>
       <Route path='/PetalColors' element={<PetalColors/>}/>
       <Route path='/ShoppingCart' element={<ShoppingCart/>}/>
       <Route path='/Checkout' element={<Checkout/>}/>
   </Routes>
   </CartProvider>
     <Footer/>
   </Router>
  );
}

export default App;
