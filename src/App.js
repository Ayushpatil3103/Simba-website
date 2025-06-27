import React, { useEffect, useState } from 'react';
import './App.css';
import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import AfricaSection from './pages/Africa';
import PartnersSection from './pages/Partner';
import NewsSection from './pages/News';
import Footer from './pages/Footer';
import Stats from './pages/Stats';
import Preloader from './Preloader'; // 👈 import preloader
import '@fontsource/anton';
import '@fontsource/urbanist';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fade-out after 3 seconds (2s delay + 1s fade)
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      {!loading && (
        <div className="App">
          <Hero />
          <About />
          <Projects />
          <Stats />
          <AfricaSection />
          <PartnersSection />
          <NewsSection />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
