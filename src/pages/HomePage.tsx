import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import About from '../components/sections/About';
import CaseStudies from '../components/sections/CaseStudies';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <CaseStudies />
      <Testimonials />
      <Contact />
    </>
  );
};

export default HomePage;