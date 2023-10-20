
import './App.css';
import Ad from './components/Ad';
import Ad2 from './components/Ad2';
import Footer from './components/Footer';
import Frame from './components/Frame';
import Hero from './components/Hero';
import Instagram from './components/Instagram';
import Latest from './components/Latest';
import Nav from './components/Nav';
import Popular from './components/Popular';
import Random from './components/Random';
import Sub from './components/Sub';
import UnderHero from './components/UnderHero';



function App() {
  return (
    <>
    <Nav/>
    <Hero/>
    <UnderHero/>
    <Latest />
    <Ad/>
    <Popular/>
    <Frame/>
    <Ad2/>
    <Random/>
    <Instagram/>
    <Sub/>
    <Footer/>
    </>
  );
}

export default App;
