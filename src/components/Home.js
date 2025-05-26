import React from 'react'
import Navbar from '../components/Navbar';
import Header from './Header';
import Main from './Main'

const Home = () => {
  return (
    <div className='home-container'>
    <Navbar/>
    <Header/>
    <Main/>
    </div>
  )
}

export default Home;
