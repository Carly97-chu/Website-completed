import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-white/5 bg-black text-center">
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://www.linkedin.com/in/carlotta-emiro/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="#" className="text-slate-500 hover:text-white transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href="#" className="text-slate-500 hover:text-white transition-colors">
          <Twitter className="w-5 h-5" />
        </a>
      </div>
      <p className="text-slate-600 text-sm">
        © {new Date().getFullYear()} Carlotta Emiro. Built with React & Tailwind.
      </p>
    </footer>
  );
};

export default Footer;