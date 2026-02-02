import React from 'react';
import { ExternalLink, CheckCircle2, Globe, Sparkles, Search } from 'lucide-react';

const AiTools: React.FC = () => {
  const tools = [
    {
      badge: "New Feature",
      title: "NGO Funding Matcher",
      desc: "Sei una ONG in cerca di finanziamenti? Questo agente AI analizza la compatibilità tra un bando e la missione della tua organizzazione, generando report strategici istantanei.",
      features: ["Analisi Istantanea", "Smart Matching"],
      link: "https://n8n.46.224.232.131.sslip.io/form/0d05b625-7ad0-450b-abf3-6d8d6a8dc5b9",
      color: "sky",
      icon: Sparkles
    },
    {
      badge: "AI Audit",
      title: "Website Health Check",
      desc: "Audit your website in 30 seconds. Get a custom report identifying conversion killers and actionable fixes for your SEO and User Experience. Stop guessing, start optimizing",
      features: ["UX Audit", "Suggerimenti SEO"],
      link: "https://n8n.46.224.232.131.sslip.io/form/f156e0b3-46ca-44c6-b80f-ae3b60cc9b66",
      color: "indigo",
      icon: Search
    }
  ];

  return (
    <div className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Try My AI Tools</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Interactive micro-applications showcasing the power of modern AI APIs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 overflow-hidden group hover:border-sky-500/30 transition-all duration-500 flex flex-col h-full"
            >
              {/* Background Glow */}
              <div className={`absolute top-0 right-0 w-[400px] h-[400px] ${tool.color === 'sky' ? 'bg-sky-500/10' : 'bg-indigo-500/10'} rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="space-y-6 flex-grow">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${tool.color === 'sky' ? 'bg-sky-500/10 border-sky-500/20 text-sky-400' : 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400'} border text-xs font-medium`}>
                    <span className="relative flex h-2 w-2">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${tool.color === 'sky' ? 'bg-sky-400' : 'bg-indigo-400'} opacity-75`}></span>
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${tool.color === 'sky' ? 'bg-sky-500' : 'bg-indigo-500'}`}></span>
                    </span>
                    {tool.badge}
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <tool.icon className={`w-6 h-6 ${tool.color === 'sky' ? 'text-sky-400' : 'text-indigo-400'}`} />
                    <h3 className="text-2xl font-bold text-white">{tool.title}</h3>
                  </div>
                  
                  <p className="text-slate-400 text-base leading-relaxed">
                    {tool.desc}
                  </p>

                  <div className="flex flex-wrap gap-4 text-xs text-slate-500 pt-2 mb-4">
                    {tool.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <a 
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl ${tool.color === 'sky' ? 'bg-gradient-to-r from-sky-600 to-indigo-600' : 'bg-gradient-to-r from-indigo-600 to-purple-600'} text-white font-medium hover:shadow-lg transition-all active:scale-[0.98] w-fit`}
                  >
                    Launch Tool <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiTools;