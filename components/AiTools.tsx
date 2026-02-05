
import React from 'react';
import { ExternalLink, CheckCircle2, Globe, Sparkles, Search } from 'lucide-react';

const AiTools: React.FC = () => {
  const tools = [
    {
      badge: "New Feature",
      title: "NGO Funding Matcher",
      desc: "Are you an NGO looking for funding? This AI agent analyzes the compatibility between a call for proposals and your organization's mission, generating instant strategic reports.",
      features: ["Instant Analysis", "Smart Matching"],
      link: "https://n8n.46.224.232.131.sslip.io/form/0d05b625-7ad0-450b-abf3-6d8d6a8dc5b9",
      color: "sky",
      icon: Sparkles
    },
    {
      badge: "AI Audit",
      title: "Website Health Check",
      desc: "Audit your website in 30 seconds. Get a custom report identifying conversion killers and actionable fixes for your SEO and User Experience. Stop guessing, start optimizing.",
      features: ["UX Audit", "SEO Suggestions"],
      link: "https://n8n.46.224.232.131.sslip.io/form/f156e0b3-46ca-44c6-b80f-ae3b60cc9b66",
      color: "indigo",
      icon: Search
    }
  ];

  return (
    <div className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-[90rem] mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Try My AI Tools</h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto font-light">
            Interactive micro-applications showcasing the power of modern AI APIs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 md:p-14 overflow-hidden group hover:border-sky-500/30 transition-all duration-500 flex flex-col h-full shadow-2xl"
            >
              {/* Background Glow - Layer 0 */}
              <div 
                className={`absolute top-0 right-0 z-0 w-[500px] h-[500px] ${tool.color === 'sky' ? 'bg-sky-500/10' : 'bg-indigo-500/10'} rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:opacity-100 transition-opacity duration-500`}
                aria-hidden="true"
              ></div>

              {/* Content Wrapper - Layer 10 (Interactive) */}
              <div className="relative z-10 flex flex-col h-full">
                <div className="space-y-8 flex-grow">
                  <div className={`inline-flex items-center gap-3 px-4 py-1.5 rounded-full ${tool.color === 'sky' ? 'bg-sky-500/10 border-sky-500/20 text-sky-400' : 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400'} border text-sm font-bold`}>
                    <span className="relative flex h-2.5 w-2.5">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${tool.color === 'sky' ? 'bg-sky-400' : 'bg-indigo-400'} opacity-75`}></span>
                      <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${tool.color === 'sky' ? 'bg-sky-500' : 'bg-indigo-500'}`}></span>
                    </span>
                    {tool.badge}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <tool.icon className={`w-8 h-8 ${tool.color === 'sky' ? 'text-sky-400' : 'text-indigo-400'}`} />
                    <h3 className="text-3xl md:text-4xl font-black text-white">{tool.title}</h3>
                  </div>
                  
                  <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-light">
                    {tool.desc}
                  </p>

                  <div className="flex flex-wrap gap-6 text-sm text-slate-500 pt-4 mb-6">
                    {tool.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button Container - Layer 20 */}
                <div className="pt-8">
                  <a 
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative z-20 inline-flex items-center gap-3 px-10 py-4 rounded-2xl ${tool.color === 'sky' ? 'bg-gradient-to-r from-sky-600 to-indigo-600' : 'bg-gradient-to-r from-indigo-600 to-purple-600'} text-white text-lg font-bold hover:shadow-xl transition-all active:scale-[0.98] w-fit shadow-lg cursor-pointer`}
                  >
                    Launch Tool <ExternalLink className="w-5 h-5" />
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
