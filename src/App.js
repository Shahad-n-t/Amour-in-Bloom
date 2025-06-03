import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
     <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/About' element={<About/>}/>
   </Routes>
     <Footer/>
   </Router>
  );
}

export default App;
