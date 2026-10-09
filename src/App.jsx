import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BuildSection from './components/BuildSection';
import CreateSection from './components/CreateSection';
import ExperienceSection from './components/ExperienceSection';
import ToolkitSection from './components/ToolkitSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BuildSection />
        <CreateSection />
        <ExperienceSection />
        <ToolkitSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
