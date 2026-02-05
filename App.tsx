
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
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 selection:bg-indigo-500/30 overflow-x-hidden relative">
      <Navbar isHidden={isProjectOpen} />
      
      <main className="relative z-10 pointer-events-auto">
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
      
      {/* Background ambient glows - Truly sent to background with -z-10 */}
      <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-sky-900/10 rounded-full blur-[100px]" />
      </div>

      {/* AI Assistant Chat Widget - Topmost layer */}
      <ChatWidget />
    </div>
  );
};

export default App;
