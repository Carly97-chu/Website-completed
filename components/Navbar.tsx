
import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

interface NavbarProps {
  isHidden?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isHidden }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'About Me', href: '#about' },
    { name: 'AI Tools', href: '#tools' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isHidden ? 'opacity-0 pointer-events-none -translate-y-full' : 'opacity-100 translate-y-0'
      } ${
        scrolled 
          ? 'bg-[#0a0a0a]/70 backdrop-blur-md border-b border-white/10 py-5' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-[90rem] mx-auto px-10 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#" 
          onClick={scrollToTop}
          className="flex items-center gap-3 group"
        >
          <div className="p-3 bg-gradient-to-br from-indigo-500 to-sky-500 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <span className="font-black text-2xl tracking-tighter text-white group-hover:text-sky-400 transition-colors">
            Carlotta.Dev
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-lg font-bold text-slate-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-1 after:bg-sky-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-3 text-slate-300 hover:text-white transition-colors"
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-2xl border-b border-white/10 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col py-8 px-10 gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-slate-300 hover:text-sky-400 text-2xl font-black py-4 border-l-4 border-transparent hover:border-sky-500 pl-6 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
