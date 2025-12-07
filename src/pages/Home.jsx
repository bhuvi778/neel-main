import { useState, useEffect } from 'react';
import Hero from '../components/home/Hero';
import Facts from '../components/home/Facts';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Projects from '../components/home/Projects';
import BlogPreview from '../components/home/BlogPreview';
import TeamPreview from '../components/home/TeamPreview';
import TestimonialPreview from '../components/home/TestimonialPreview';

function Home() {
  return (
    <div>
      <Hero />
      <Facts />
      <About />
      <Services />
      <Projects />
      <BlogPreview />
      <TeamPreview />
      <TestimonialPreview />
    </div>
  );
}

export default Home;
