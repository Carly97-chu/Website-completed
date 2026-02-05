
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AiTools from './components/AiTools';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  const [isProjectOpen, setIsProjectOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 selection:bg-indigo-500/30 overflow-x-hidden">
      <Navbar isHidden={isProjectOpen} />
      
      <main className="relative z-10">
        <section id="about">
          <Hero />
        </section>

        <section id="tools">
          <AiTools />
        </section>

        <section id="portfolio">
          <Portfolio onProjectToggle={setIsProjectOpen} />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
      
      {/* Background ambient glows */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-sky-900/20 rounded-full blur-[100px]" />
      </div>

      {/* AI Assistant Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default App;
