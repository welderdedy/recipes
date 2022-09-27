import React from 'react';
import CardSection from '../Components/Card-section/CardSection';
import Subscribe from '../Components/Subscribe/Subscribe';
import Footer from '../Services/Footer/Footer';
import Header from '../Services/Header/Header';
import About from '../Components/about/About';
import { Recipes } from '../Components/Recipes/Recipes';



function Home() {
  return (
    <div>
        <Header />
        <Recipes />
        <CardSection />
        <About />
        <Subscribe />
        <Footer  />
    </div>
  )
}

export default Home;