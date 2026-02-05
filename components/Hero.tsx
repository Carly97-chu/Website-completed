
import React, { useState, useEffect } from 'react';
import { ArrowRight, Linkedin, Brain, Code, Cpu, Workflow, Database, Globe, Activity, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const Hero: React.FC = () => {
  const [aiMotto, setAiMotto] = useState<string>("");
  const [loadingMotto, setLoadingMotto] = useState<boolean>(true);

  useEffect(() => {
    const generateAiMotto = async () => {
      /* Assume process.env.API_KEY is pre-configured and valid per instructions */
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: "Crea un motto professionale di una sola riga (massimo 12 parole) per Carlotta Emiro, una Junior AI Automation Developer con un background in Antropologia. Deve essere d'impatto, moderno e riflettere l'unione tra umano e automazione. Rispondi solo con il motto.",
        });
        setAiMotto(response.text || "");
      } catch (error) {
        console.error("Errore nel recupero del motto AI:", error);
      } finally {
        setLoadingMotto(false);
      }
    };

    generateAiMotto();
  }, []);

  const scrollToPortfolio = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('portfolio');
    
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-16 px-6 flex items-center justify-center relative">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* Left Column: Intro */}
        <div className="space-y-8 animate-fade-in-up sticky top-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-sky-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            Available for Full Remote & Hybrid
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-400 inline-block pb-2">
                Carlotta Emiro
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-light">
              Junior AI Automation Developer <br/>
              <span className="text-lg opacity-80">Low-Code & Operations</span>
            </p>
          </div>

          {/* AI Motto Display */}
          {(aiMotto || loadingMotto) && (
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 max-w-lg animate-fade-in-up">
              <Sparkles className={`w-5 h-5 text-sky-400 shrink-0 mt-0.5 ${loadingMotto ? 'animate-pulse' : ''}`} />
              {loadingMotto ? (
                <div className="h-4 w-48 bg-white/10 rounded animate-pulse"></div>
              ) : (
                <p className="text-sm text-slate-300 italic font-medium leading-relaxed">
                  "{aiMotto}"
                </p>
              )}
            </div>
          )}

          <p className="text-slate-400 max-w-lg leading-relaxed text-lg">
            My journey began in Anthropology, but my curiosity quickly drove me beyond theory toward building concrete solutions. Today, I merge Data Analysis and n8n automation to solve real-world problems.
            <br /><br />
            My competitive edge? Understanding people before processes. Leveraging an approach rooted in observation and active listening — skills refined while working in diverse, multicultural environments in Portugal — I design AI agents and workflows that are not just efficient, but deeply aligned with human needs.
            <br /><br />
            Use the chat in the corner to know me better!
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#portfolio"
              onClick={scrollToPortfolio}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-sky-600 text-white font-medium hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all flex items-center gap-2 group"
            >
              View Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://www.linkedin.com/in/carlotta-emiro/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white font-medium hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn Profile
            </a>
          </div>
        </div>

        {/* Right Column: Visual CV */}
        <div className="relative">
          {/* Glass Card Container */}
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
            
            {/* Experience/Education Timeline */}
            <div className="mb-10">
              <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-6">Experience & Education</h3>
              <div className="space-y-10 relative border-l border-white/10 ml-2 pl-8">
                {[
                  { 
                    role: "Freelance Automation Specialist", 
                    company: "Remote", 
                    period: "Oct 2025 – Present",
                    project: "Social Media Automation & Content Pipeline",
                    details: [
                      "Designed and developed an end-to-end pipeline to generate copy drafts and hashtags starting from automated web scraping, integrating Gemini AI.",
                      "Integrated Meta APIs (Instagram/Facebook) for automatic publishing, reducing manual management time by 40%.",
                      "Created a dynamic editorial database on Google Sheets for content tracking and post-publication performance analysis."
                    ]
                  },
                  { 
                    role: "Course in AI and Business Automation", 
                    company: "Academy Rapido", 
                    period: "2025",
                    details: [
                      "Vertical focus on n8n, API integrations, and AI Agents."
                    ] 
                  },
                  { 
                    role: "Master in Data Analysis", 
                    company: "Start2Impact University", 
                    period: "2024 – 2025",
                    details: [
                      "Focus: Data-driven strategies, Python for data analysis, SQL, Excel and visualization with Tableau."
                    ]
                  },
                  { 
                    role: "Master’s Degree in Cultural Anthropology", 
                    company: "University of Bologna", 
                    period: "2016 – 2021",
                    details: [
                      "Specialization in Applied Anthropology.",
                      "Thesis focused on the analysis of complex human systems."
                    ]
                  },
                ].map((job, index) => (
                  <div key={index} className="relative group cursor-default">
                    <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border-2 border-[#0a0a0a] bg-slate-600 group-hover:bg-sky-500 transition-colors"></span>
                    <h4 className="text-lg font-medium text-white group-hover:text-sky-300 transition-colors">{job.role}</h4>
                    <p className="text-sm text-sky-400 font-medium mb-1">{job.company} • {job.period}</p>
                    
                    {job.details && (
                      <ul className="mt-2 space-y-2">
                        {job.details.map((detail, i) => (
                          <li key={i} className="text-sm text-slate-400 flex items-start gap-2 leading-relaxed">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-600 shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Cluster */}
            <div>
              <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-4">Tech & Skills</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "n8n", icon: Workflow },
                  { name: "AI Agents", icon: Brain },
                  { name: "Python", icon: Code },
                  { name: "SQL", icon: Database },
                  { name: "Tableau", icon: Activity },
                  { name: "Gemini AI", icon: Sparkles },
                  { name: "Web Scraping", icon: Globe },
                  { name: "Process Automation", icon: Cpu },
                ].map((skill, i) => (
                  <div 
                    key={i}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 border border-white/5 hover:border-sky-500/30 hover:bg-sky-500/10 text-slate-300 text-sm transition-all cursor-default"
                  >
                    <skill.icon className="w-3 h-3 text-sky-400" />
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>

          </div>
          
          {/* Decorative Elements around card */}
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full blur-2xl opacity-40"></div>
          <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-sky-500 rounded-full blur-3xl opacity-20"></div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
