import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Industries from './components/Industries';
import ContactSection from './components/ContactSection';
import ServicesComponent from './components/Services';
import UseComponent from './components/UseComponent';
import SuccessStories from './components/SuccessStories';
import RecognizedByTheBest from './components/RecognizedByTheBest'
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="">
        <HeroSection />
        <ServicesComponent/>
        <Industries />
        <UseComponent/>
        <SuccessStories />
        <RecognizedByTheBest/>
        <ContactSection/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;