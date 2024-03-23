import React from 'react';
import '../../App.css';
import Cards from '../../footer/Cards';
import HeroSection from '../../footer/HeroSection';
import Footer from '../../footer/Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;