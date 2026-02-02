import React from 'react';
import { Mail, MapPin, Send, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Let's Connect</h2>
              <p className="text-slate-400">
                Interested in collaborating on an automation project or AI integration? 
                Drop me a line.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-sky-400" />
                </div>
                <span>carlottaemiro@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-purple-400" />
                </div>
                <span>+351 931 406 620</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-indigo-400" />
                </div>
                <span>Lisbon, Portugal</span>
              </div>
            </div>
          </div>

          <form 
            className="space-y-6" 
            action="https://formspree.io/f/xldqpayw" 
            method="POST"
          >
            <div className="group">
              <input 
                type="text" 
                name="name"
                placeholder="Name" 
                required
                className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-sky-500 transition-colors"
              />
            </div>
            <div className="group">
              <input 
                type="email" 
                name="email"
                placeholder="Email" 
                required
                className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-sky-500 transition-colors"
              />
            </div>
            <div className="group">
              <textarea 
                name="message"
                placeholder="Message" 
                rows={3}
                required
                className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-sky-500 transition-colors resize-none"
              ></textarea>
            </div>
            
            <button type="submit" className="w-full py-4 bg-gradient-to-r from-indigo-600 to-sky-600 rounded-xl text-white font-bold hover:shadow-lg hover:shadow-indigo-500/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Contact;