import React from 'react';
import Navbar from './footer/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
   
import Home from './components/Pages/Home';           
import About from './components/Pages/About';         
import Product from './components/Pages/Product';     
import SignUp from './components/Pages/SignUp'; 


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
     <Routes>
     <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<Product />} />
          <Route path='/sign-up' element={<SignUp />} />
      </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
