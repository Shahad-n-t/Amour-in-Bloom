import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Categories from './components/Categories';

function App() {
  return (
    <Router>
     <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/About' element={<About/>}/>
       <Route path='/ContactUs' element={<ContactUs/>}/>
       <Route path='/Categories' element={<Categories/>}/>
   </Routes>
     <Footer/>
   </Router>
  );
}

export default App;
