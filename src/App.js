import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Categories from './components/Categories';
import CategoryPage from './components/CategoryPage';


function App() {
  return (
    <Router>
      <ScrollToTop/>
     <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/About' element={<About/>}/>
       <Route path='/ContactUs' element={<ContactUs/>}/>
       <Route path='/Categories' element={<Categories/>}/>
       <Route path='/categories/:categoryName' element={<CategoryPage/>}/>
   </Routes>
     <Footer/>
   </Router>
  );
}

export default App;
