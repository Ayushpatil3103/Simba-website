import logo from './logo.svg';
import './App.css';
import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import AfricaSection from './pages/Africa';
import PartnersSection from './pages/Partner';
import NewsSection from './pages/News';
import Footer from './pages/Footer';
import Stats from './pages/Stats';
import '@fontsource/anton';
import '@fontsource/urbanist';

function App() {
  return (
    <div className="App">
     <Hero></Hero>
     <About></About>
     <Projects></Projects>
     <Stats></Stats>
     <AfricaSection></AfricaSection>
     <PartnersSection></PartnersSection>
     <NewsSection></NewsSection>
     <Footer></Footer>
    </div>
  );
}

export default App;
