import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Workflow, BarChart3, Bot, Database, AlertTriangle, Lightbulb, Play, TrendingUp, X, Search, Zap, PieChart, ClipboardCheck, LayoutDashboard, PenTool, LayoutGrid, FileSpreadsheet, BookOpen, Sparkles, Code, Cpu, Table, BarChart, FlaskConical, Target, Activity, Map, Layers, ShieldCheck, Flag, Smartphone, HardDrive, Filter, Globe } from 'lucide-react';

interface Project {
  title: string;
  desc: string;
  tags: string[];
  image: string;
  isCaseStudy?: boolean;
}

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => (
  <div className="group bg-white/5 border border-white/5 rounded-2xl overflow-hidden hover:border-sky-500/30 transition-all duration-300 flex flex-col h-full">
    <div className="relative h-48 overflow-hidden shrink-0">
      <img 
        src={project.image} 
        alt={project.title} 
        loading="lazy"
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors duration-300"></div>
    </div>
    
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3">
        {project.desc}
      </p>
      
      <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <span key={i} className="text-xs font-medium px-2.5 py-1 rounded bg-white/10 text-slate-300 border border-white/5">
              {tag}
            </span>
          ))}
        </div>

        <button 
          className="text-sm font-medium text-white hover:text-sky-400 transition-colors flex items-center gap-2 cursor-pointer outline-none"
          onClick={() => onClick(project)}
        >
          {project.isCaseStudy ? 'View Case Study' : 'View Project'} <ExternalLink className="w-3 h-3" />
        </button>
      </div>
    </div>
  </div>
);

// --- CASE STUDIES ---

const AICustomerCareCaseStudy: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="max-w-6xl w-full mx-auto text-center px-4 md:px-0 relative">
    <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-8 font-medium">
      CASE STUDY SHOWCASE
    </div>
    <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
      AI Customer Care <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Automation</span>
    </h1>
    <p className="text-slate-400 text-xl md:text-2xl mb-16 max-w-3xl mx-auto font-light leading-relaxed">
      How we revolutionized customer support and data analysis using <span className="text-white font-medium">n8n</span> and <span className="text-white font-medium">Gemini AI</span>.
    </p>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left mb-16">
      <div className="bg-[#111111] border border-white/5 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group">
        <Play className="absolute top-10 right-10 w-32 h-32 text-white/5 -rotate-12 group-hover:scale-110 transition-transform duration-500" />
        <div className="relative z-10">
          <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-4 block">THE ASSISTANT</span>
          <h3 className="text-3xl font-bold text-white mb-6">AI Support Agent</h3>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed font-light">An intelligent bot that learns from PDF manuals to answer technical queries instantly, 24/7.</p>
          <div className="space-y-4">
            <div className="bg-black/40 border border-white/5 rounded-2xl p-6 flex gap-5">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
              </div>
              <div><h4 className="text-white font-semibold mb-1">Problem</h4><p className="text-slate-500 text-sm">Repetitive technical questions overwhelming the support team.</p></div>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6 flex gap-5">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                <Bot className="w-5 h-5 text-indigo-400" />
              </div>
              <div><h4 className="text-white font-semibold mb-1">Solution</h4><p className="text-slate-500 text-sm">Gemini AI parses documentation to provide accurate, instant answers.</p></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#111111] border border-white/5 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group">
        <TrendingUp className="absolute top-10 right-10 w-32 h-32 text-white/5 group-hover:scale-110 transition-transform duration-500" />
        <div className="relative z-10">
          <span className="text-[10px] uppercase tracking-widest text-purple-400 font-bold mb-4 block">THE ANALYST</span>
          <h3 className="text-3xl font-bold text-white mb-6">Automated Intelligence</h3>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed font-light">A backend system that audits conversation quality and generates business insights automatically.</p>
          <div className="space-y-4">
            <div className="bg-black/40 border border-white/5 rounded-2xl p-6 flex gap-5">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
              </div>
              <div><h4 className="text-white font-semibold mb-1">Problem</h4><p className="text-slate-500 text-sm">Unstructured chat data making trend analysis impossible.</p></div>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6 flex gap-5">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-sky-400" />
              </div>
              <div><h4 className="text-white font-semibold mb-1">Solution</h4><p className="text-slate-500 text-sm">Automated "Critic" AI that tags, scores, and visualizes data.</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
      <button className="bg-white text-black px-8 py-4 rounded-xl font-bold inline-flex items-center gap-3 hover:bg-slate-200 transition-colors shadow-xl">
        <Github className="w-5 h-5" /> VIEW PROJECT ON GITHUB <ExternalLink className="w-4 h-4 opacity-50" />
      </button>
      <button onClick={onClose} className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-bold hover:bg-white/10 transition-all flex items-center gap-2">
        <X className="w-5 h-5" /> CLOSE CASE STUDY
      </button>
    </div>
  </div>
);

const NetflixContentCaseStudy: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="max-w-7xl w-full mx-auto animate-fade-in-up pb-24">
    {/* Navbar Header */}
    <div className="flex items-center justify-between py-6 px-4 md:px-12 border-b border-white/5 mb-16">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-indigo-400 flex items-center justify-center rounded font-black text-white text-sm">N</div>
        <span className="font-bold text-white text-sm tracking-tight uppercase">STRATEGY</span>
      </div>
      <nav className="hidden md:flex gap-8">
        {['THE GOAL', 'DASHBOARDS', 'TECH STACK'].map(item => (
          <span key={item} className="text-[10px] font-bold text-slate-500 hover:text-white cursor-pointer transition-colors tracking-widest">{item}</span>
        ))}
      </nav>
    </div>

    {/* Hero Section */}
    <div className="text-center px-4 md:px-12 mb-24">
      <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.2em] text-slate-400 font-medium mb-12">
        NETFLIX CONTENT STRATEGY
      </div>
      
      <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9] uppercase">
        NETFLIX CONTENT<br/>
        STRATEGY <span className="text-indigo-300">ANALYTICS</span>
      </h1>

      <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-4xl mx-auto font-light leading-relaxed">
        Exploring the Netflix ecosystem as a mirror of global storytelling. Using data to transform raw insights into visual narratives that identify success patterns and imagine new inclusive content.
      </p>

      <button className="px-10 py-4 bg-indigo-300 text-black rounded-full font-bold tracking-tight hover:bg-indigo-200 transition-all uppercase text-sm mb-32">
        VIEW FULL PROJECT
      </button>

      {/* Grid Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-6xl mx-auto mb-32">
        {/* Growth Analysis */}
        <div className="bg-[#111111] border border-white/5 rounded-[2rem] p-10 flex flex-col justify-between h-full group hover:border-indigo-500/20 transition-all duration-500">
          <div>
            <div className="flex justify-between items-start mb-10">
              <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold">GROWTH ANALYSIS</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-500 font-bold tracking-widest">2011–2021</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">Production Evolution</h3>
            <p className="text-slate-500 text-base font-light mb-12 leading-relaxed">
              Monitoring the growth of Netflix originals and analyzing the volume of shows categorized by maturity ratings over the last decade.
            </p>
          </div>
          <div className="bg-[#0c0c0c] border border-white/5 rounded-2xl p-8 group-hover:bg-indigo-500/5 transition-colors">
            <span className="text-3xl font-bold text-white block mb-1">Time-Series</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-600 font-bold">TREND TRACKING</span>
          </div>
        </div>

        {/* Global Reach */}
        <div className="bg-[#111111] border border-white/5 rounded-[2rem] p-10 flex flex-col justify-between h-full group hover:border-indigo-500/20 transition-all duration-500">
          <div>
            <div className="flex justify-between items-start mb-10">
              <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold">GLOBAL REACH</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-500 font-bold tracking-widest">Geospatial Mapping</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">Production Geography</h3>
            <p className="text-slate-500 text-base font-light mb-12 leading-relaxed">
              Mapping main producing nations (USA, India, France, Japan) and analyzing content ratings to understand regional market differences.
            </p>
          </div>
          <div className="bg-[#0c0c0c] border border-white/5 rounded-2xl p-8 group-hover:bg-indigo-500/5 transition-colors">
            <span className="text-3xl font-bold text-white block mb-1">Global Maps</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-600 font-bold">REGIONAL DISTRIBUTION</span>
          </div>
        </div>

        {/* Efficiency */}
        <div className="bg-[#111111] border border-white/5 rounded-[2rem] p-10 flex flex-col justify-between h-full group hover:border-indigo-500/20 transition-all duration-500">
          <div>
            <div className="flex justify-between items-start mb-10">
              <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold">EFFICIENCY</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-500 font-bold tracking-widest">Industry Leaders</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">Production Leaders</h3>
            <p className="text-slate-500 text-base font-light mb-12 leading-relaxed">
              Identifying the most productive directors and analyzing the distribution between movies and TV series by release year.
            </p>
          </div>
          <div className="bg-[#0c0c0c] border border-white/5 rounded-2xl p-8 group-hover:bg-indigo-500/5 transition-colors">
            <span className="text-3xl font-bold text-white block mb-1">Content Mix</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-600 font-bold">DIRECTOR METRICS</span>
          </div>
        </div>

        {/* UX Strategy */}
        <div className="bg-[#111111] border border-white/5 rounded-[2rem] p-10 flex flex-col justify-between h-full group hover:border-indigo-500/20 transition-all duration-500">
          <div>
            <div className="flex justify-between items-start mb-10">
              <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold">UX STRATEGY</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-500 font-bold tracking-widest">Interactive Selector</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">User Experience Insights</h3>
            <p className="text-slate-500 text-base font-light mb-12 leading-relaxed">
              Creation of a dedicated "Which Product to Choose?" dashboard to facilitate navigation based on specific user preferences.
            </p>
          </div>
          <div className="bg-[#0c0c0c] border border-white/5 rounded-2xl p-8 group-hover:bg-indigo-500/5 transition-colors">
            <span className="text-3xl font-bold text-white block mb-1">Discovery</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-600 font-bold">DYNAMIC FILTERING</span>
          </div>
        </div>
      </div>
    </div>

    {/* Tools & Methodology */}
    <div className="px-4 md:px-12 mb-32 max-w-6xl mx-auto">
       <span className="text-[10px] uppercase tracking-[0.4em] text-slate-600 font-black mb-16 block text-center">TOOLS & METHODOLOGY</span>
       <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-all">
                <LayoutDashboard className="w-7 h-7 text-indigo-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Tableau Software</h4>
                <p className="text-slate-500 text-sm font-light">Used for interactive stories, dynamic dashboards, and heat maps.</p>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-all">
                <Lightbulb className="w-7 h-7 text-indigo-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Decision Making</h4>
                <p className="text-slate-500 text-sm font-light">Transforming complex data into accessible, decision-ready visual assets.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
             <div className="bg-[#111111] border border-white/5 rounded-[2rem] p-12 relative">
                <PieChart className="absolute top-8 right-8 w-16 h-16 text-indigo-400/10" />
                <p className="text-slate-400 text-lg md:text-xl font-light italic leading-relaxed mb-8">
                  "This project demonstrates how data analysis can guide the creation of new shows that aren't just entertainment, but strategic responses to audience demand for inclusivity and representation."
                </p>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      <PieChart className="w-5 h-5 text-indigo-400" />
                   </div>
                   <span className="text-[10px] font-black text-slate-600 tracking-widest uppercase">STRATEGIC CONCLUSION</span>
                </div>
             </div>
          </div>
       </div>
    </div>

    {/* Footer Call to Action */}
    <div className="text-center px-4">
      <h3 className="text-2xl md:text-4xl font-black text-white mb-12 uppercase tracking-tighter">The Future of Content Creation</h3>
      <button 
        onClick={onClose}
        className="px-12 py-5 rounded-full border border-white/10 bg-white/5 text-white font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all flex items-center gap-3 mx-auto"
      >
        <X className="w-4 h-4" /> CLOSE CASE STUDY
      </button>
    </div>
  </div>
);

const RetailAnalyticsCaseStudy: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="max-w-7xl w-full mx-auto text-center px-4 md:px-12 relative animate-fade-in-up">
    <div className="flex justify-center mb-6">
      <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.2em] text-slate-400 font-medium">
        CASE STUDY SHOWCASE
      </div>
    </div>
    
    <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
      RETAIL ANALYTICS & <br/>
      ML FORE<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">CASTING</span>
    </h1>

    <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-3xl mx-auto font-light leading-relaxed">
      Advanced Analytics for a Sustainable Retail Future. I transformed raw sales and product data into actionable insights using predictive modeling and Machine Learning to balance profitability with ethical growth.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 text-left">
      <div className="bg-[#111111] border border-white/5 rounded-[2rem] p-10 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-10">
             <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold">CLASSIFICATION</span>
             <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-400 font-bold">Decision Tree</span>
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">Quality Optimization</h3>
          <p className="text-slate-500 text-base font-light mb-12 leading-relaxed">
            Developed a Decision Tree model to classify product quality, significantly outperforming the logistic regression baseline.
          </p>
        </div>
        <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
          <span className="text-4xl font-bold text-indigo-400 block mb-1">83%</span>
          <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">ACCURACY ACHIEVED</span>
        </div>
      </div>

      <div className="bg-[#111111] border border-white/5 rounded-[2rem] p-10 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-10">
             <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold">FORECASTING</span>
             <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-400 font-bold">XGBoost</span>
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">Sales Forecasting</h3>
          <p className="text-slate-500 text-base font-light mb-12 leading-relaxed">
            Implemented an XGBoost model to predict gross income trends over time, capturing complex seasonality.
          </p>
        </div>
        <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
          <span className="text-4xl font-bold text-emerald-400 block mb-1">Time Series</span>
          <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">PREDICTIVE MODELING</span>
        </div>
      </div>
    </div>

    <div className="flex flex-col md:flex-row items-center justify-center gap-4 pb-20">
      <button 
        onClick={onClose}
        className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-bold hover:bg-white/10 transition-all flex items-center gap-2"
      >
        <X className="w-5 h-5" /> CLOSE CASE STUDY
      </button>
    </div>
  </div>
);

const DiplomacyGenderCaseStudy: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="max-w-7xl w-full mx-auto animate-fade-in-up pb-24">
    <div className="flex items-center justify-between py-6 px-4 md:px-12 border-b border-white/5 mb-12">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-indigo-500 flex items-center justify-center rounded font-black text-white text-sm">G</div>
        <span className="font-bold text-white text-sm tracking-tight">Diplomacy and gender analytics</span>
      </div>
      <nav className="hidden md:flex gap-8">
        {['OVERVIEW', 'ANALYSIS', 'FINDINGS', 'TOOLKIT'].map(item => (
          <span key={item} className="text-[10px] font-bold text-slate-500 hover:text-white cursor-pointer transition-colors tracking-widest">{item}</span>
        ))}
      </nav>
    </div>
    <div className="text-center px-4 md:px-12 mb-20">
      <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.2em] text-slate-400 font-medium mb-12">
        DIPLOMACY AND GENDER ANALYTICS
      </div>
      <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9] uppercase">
        DIPLOMACY AND<br/>
        GENDER <span className="text-indigo-400">ANALYTICS</span>
      </h1>
      <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-4xl mx-auto font-light leading-relaxed">
        A comprehensive study of the Gender and Diplomatic Representation dataset (1968–2021), examining the evolution of gender presence and status hierarchies in global international missions.
      </p>
      <button className="px-10 py-4 bg-white text-black rounded-full font-bold tracking-tight hover:bg-slate-200 transition-all uppercase text-sm mb-24">
        VIEW FULL PROJECT
      </button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        <div className="bg-[#111111] border border-white/5 rounded-[2rem] p-10 flex flex-col justify-between h-full group">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-6 block">EVOLUTION</span>
            <h3 className="text-3xl font-bold text-white mb-6">Historical Trends</h3>
            <p className="text-slate-500 text-base font-light mb-12 leading-relaxed">Tracked the global gender ratio from 1968 to 2021 to monitor systemic changes in diplomatic representation.</p>
          </div>
          <div className="bg-[#0c0c0c] border border-white/5 rounded-2xl p-6 group-hover:bg-indigo-500/5 transition-colors">
            <span className="text-2xl font-bold text-indigo-400 block mb-1">1968 – 2021</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-600 font-bold">ANALYSIS TIMELINE</span>
          </div>
        </div>
        <div className="bg-[#111111] border border-white/5 rounded-[2rem] p-10 flex flex-col justify-between h-full group">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-6 block">MAPPING</span>
            <h3 className="text-3xl font-bold text-white mb-6">Inequality Gaps</h3>
            <p className="text-slate-500 text-base font-light mb-12 leading-relaxed">Identified the top 5 countries with the highest gender inequality through snapshots in 1968, 2021, and the full period.</p>
          </div>
          <div className="bg-[#0c0c0c] border border-white/5 rounded-2xl p-6 group-hover:bg-indigo-500/5 transition-colors">
            <span className="text-2xl font-bold text-indigo-400 block mb-1">Top 5</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-600 font-bold">PRIORITY DISPARITY ZONES</span>
          </div>
        </div>
        <div className="bg-[#111111] border border-white/5 rounded-[2rem] p-10 flex flex-col justify-between h-full group">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-6 block">HIERARCHY</span>
            <h3 className="text-3xl font-bold text-white mb-6">Status Hierarchies</h3>
            <p className="text-slate-500 text-base font-light mb-12 leading-relaxed">Men dominate high-status roles (Ambassador, Papal Nuncio), while women are more frequent as acting chargé d'affaires.</p>
          </div>
          <div className="bg-[#0c0c0c] border border-white/5 rounded-2xl p-6 group-hover:bg-indigo-500/5 transition-colors">
            <span className="text-2xl font-bold text-indigo-400 block mb-1">Role Bias</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-600 font-bold">2021 DISTRIBUTION ANALYSIS</span>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center px-4 md:px-12 mb-32">
       <span className="text-[10px] uppercase tracking-[0.4em] text-slate-600 font-black mb-12 block">TECHNICAL TOOLKIT</span>
       <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
         {[
           { name: "MySQL", desc: "Database Management", icon: Database },
           { name: "DBeaver", desc: "SQL Connection & Queries", icon: Workflow },
           { name: "Excel", desc: "Data Processing Support", icon: FileSpreadsheet },
           { name: "ChatGPT", desc: "Analytical AI Aid", icon: Bot }
         ].map((tool, i) => (
           <div key={i} className="bg-[#111111] border border-white/5 rounded-2xl p-8 flex flex-col items-center gap-4 group hover:bg-white/5 transition-all">
             <span className="text-sm font-bold text-white mb-1">{tool.name}</span>
             <span className="text-[10px] text-slate-600 font-medium tracking-tight uppercase">{tool.desc}</span>
           </div>
         ))}
       </div>
    </div>
    <div className="px-4 md:px-12 mb-32">
      <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Specific Case Study: Sweden</h2><p className="text-slate-500 text-lg font-light">Analyzing the effects of the Feminist Foreign Policy (FFP) on diplomatic appointments.</p></div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
        <div className="lg:col-span-7 bg-[#111111] border border-white/5 rounded-[2rem] p-12 relative overflow-hidden h-full">
           <Flag className="absolute top-10 right-10 w-48 h-48 text-white/5 -rotate-12 opacity-50" />
           <div className="relative z-10">
             <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-4 block">CASE FOCUS</span>
             <h3 className="text-4xl font-bold text-white mb-8">The Feminist Foreign Policy Effect</h3>
             <p className="text-slate-400 text-xl font-light leading-relaxed mb-12">Detailed analysis of the gender ratio evolution in Sweden between 2014 and 2022. This period highlights the tangible outcomes of institutionalizing gender equality in foreign representation.</p>
             <div className="flex gap-4">
               <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-slate-400">2014–2022</span>
               <span className="px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400">FFP Adoption</span>
             </div>
           </div>
        </div>
        <div className="lg:col-span-5 space-y-4 h-full flex flex-col justify-between">
           {[
             { title: "RATIO EVOLUTION", desc: "Quantitative growth of female ambassadors post-2014.", icon: TrendingUp },
             { title: "MULTI-PLATFORM ACCESS", desc: "Analysis results optimized for quick mobile review and immersive desktop dashboards.", icon: Smartphone },
             { title: "DATA IMPORT", desc: "Processed via CSV integration and custom MySQL analytical queries.", icon: HardDrive }
           ].map((item, i) => (
             <div key={i} className="bg-[#111111] border border-white/5 rounded-2xl p-8 flex items-center gap-6 group hover:border-white/10 transition-all flex-grow">
               <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0"><item.icon className="w-6 h-6 text-indigo-400" /></div>
               <div><h4 className="text-xs font-black text-white mb-1 tracking-widest uppercase">{item.title}</h4><p className="text-slate-500 text-sm font-light leading-relaxed">{item.desc}</p></div>
             </div>
           ))}
        </div>
      </div>
    </div>
    <div className="flex justify-center px-4">
      <button onClick={onClose} className="px-12 py-5 rounded-full border border-white/10 bg-white/5 text-white font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all flex items-center gap-3">
        <X className="w-4 h-4" /> CLOSE CASE STUDY
      </button>
    </div>
  </div>
);

const LeadQualificationCaseStudy: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="max-w-6xl w-full mx-auto text-center px-4 md:px-0 relative">
    <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-8 font-medium">Case Study: Autonomous Sales Pipeline</div>
    <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">Lead Qualification & Reporting</h1>
    <p className="text-slate-400 text-xl md:text-2xl mb-16 max-w-3xl mx-auto font-light leading-relaxed">
      From <span className="text-white font-medium">Survey</span> to <span className="text-white font-medium">Proposal</span>: real-time qualification and automated daily reporting for sales teams.
    </p>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left mb-16">
      <div className="bg-[#111111] border border-white/5 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group">
        <ClipboardCheck className="absolute top-10 right-10 w-32 h-32 text-white/5 group-hover:scale-110 transition-transform duration-500" />
        <div className="relative z-10">
          <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-4 block">OPERATIONAL</span>
          <h3 className="text-3xl font-bold text-white mb-6">Lead Qualifier</h3>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed font-light">AI analyzes each new contact (budget & feedback) in real-time, deciding autonomously whether to send a personalized proposal or a courtesy email.</p>
          <div className="space-y-4">
            <div className="bg-black/40 border border-white/5 rounded-2xl p-6 flex gap-5">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center"><AlertTriangle className="w-5 h-5 text-amber-500" /></div>
              <div><h4 className="text-white font-semibold mb-1">The Problem</h4><p className="text-slate-500 text-sm">Sales team wastes hours reading survey responses, delaying replies to high-budget clients.</p></div>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6 flex gap-5">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center"><Zap className="w-5 h-5 text-indigo-400" /></div>
              <div><h4 className="text-white font-semibold mb-1">The Solution</h4><p className="text-slate-500 text-sm">Immediate 24/7 response and qualification, instantly opening tickets on Zendesk/Slack.</p></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#111111] border border-white/5 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group">
        <LayoutDashboard className="absolute top-10 right-10 w-32 h-32 text-white/5 group-hover:scale-110 transition-transform duration-500" />
        <div className="relative z-10">
          <span className="text-[10px] uppercase tracking-widest text-purple-400 font-bold mb-4 block">MANAGERIAL</span>
          <h3 className="text-3xl font-bold text-white mb-6">Daily Reporting</h3>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed font-light">A nightly automated process collects daily data, summarizes it via AI, and generates a formatted report sent to the manager.</p>
          <div className="space-y-4">
            <div className="bg-black/40 border border-white/5 rounded-2xl p-6 flex gap-5">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center"><AlertTriangle className="w-5 h-5 text-amber-500" /></div>
              <div><h4 className="text-white font-semibold mb-1">The Problem</h4><p className="text-slate-500 text-sm">Managers chasing employees at the end of the day for updates on customer service status.</p></div>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6 flex gap-5">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center"><PieChart className="w-5 h-5 text-sky-400" /></div>
              <div><h4 className="text-white font-semibold mb-1">The ROI</h4><p className="text-slate-500 text-sm">Punctual directional reporting every morning without any human effort.</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
      <button className="bg-white text-black px-8 py-4 rounded-xl font-bold inline-flex items-center gap-3 hover:bg-slate-200 transition-colors">
        <Github className="w-5 h-5" /> VIEW PROJECT ON GITHUB <ExternalLink className="w-4 h-4 opacity-50" />
      </button>
      <button onClick={onClose} className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-bold hover:bg-white/10 transition-all flex items-center gap-2"><X className="w-5 h-5" /> CLOSE CASE STUDY</button>
    </div>
  </div>
);

const ZeroTouchContentCaseStudy: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="max-w-6xl w-full mx-auto text-center px-4 md:px-0 relative">
    <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-8 font-medium">CASE STUDY: MARKETING & SALES</div>
    <h1 className="text-4xl md:text-7xl font-bold text-white mb-6"><span className="text-indigo-400">"Zero-Touch"</span> Content Publishing</h1>
    <p className="text-slate-400 text-xl md:text-2xl mb-16 max-w-3xl mx-auto font-light leading-relaxed">
      From <span className="text-white font-medium">Google Sheets</span> to <span className="text-white font-medium">Notion</span>: an automated workflow with n8n and AI for an always-on editorial calendar.
    </p>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left mb-16">
      <div className="bg-[#111111] border border-white/5 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group">
        <PenTool className="absolute top-10 right-10 w-32 h-32 text-white/5 group-hover:scale-110 transition-transform duration-500" />
        <div className="relative z-10">
          <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-4 block">THE AI AUTHOR</span>
          <h3 className="text-3xl font-bold text-white mb-6">SEO Generation</h3>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed font-light">The AI acts as an SEO Specialist: reads the topic from the sheet, writes the article, and generates relevant keywords.</p>
          <div className="space-y-4">
            <div className="bg-black/40 border border-white/5 rounded-2xl p-6 flex gap-5">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center"><AlertTriangle className="w-5 h-5 text-amber-500" /></div>
              <div><h4 className="text-white font-semibold mb-1">The Problem</h4><p className="text-slate-500 text-sm">Writing drafts and formatting takes hours and distracts from strategy.</p></div>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6 flex gap-5">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center"><Bot className="w-5 h-5 text-indigo-400" /></div>
              <div><h4 className="text-white font-semibold mb-1">The Solution</h4><p className="text-slate-500 text-sm">Generative AI drafts complete content starting from a single Excel row.</p></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#111111] border border-white/5 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group">
        <LayoutGrid className="absolute top-10 right-10 w-32 h-32 text-white/5 group-hover:scale-110 transition-transform duration-500" />
        <div className="relative z-10">
          <span className="text-[10px] uppercase tracking-widest text-purple-400 font-bold mb-4 block">THE EDITORIAL MANAGER</span>
          <h3 className="text-3xl font-bold text-white mb-6">Notion Workflow</h3>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed font-light">n8n orchestrates everything: publishes to Notion, updates status on Sheets, and notifies the team on Slack.</p>
          <div className="space-y-4">
            <div className="bg-black/40 border border-white/5 rounded-2xl p-6 flex gap-5">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center"><AlertTriangle className="w-5 h-5 text-amber-500" /></div>
              <div><h4 className="text-white font-semibold mb-1">The Problem</h4><p className="text-slate-500 text-sm">Manual copy-paste processes and data entry cause errors and delays.</p></div>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6 flex gap-5">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center"><PieChart className="w-5 h-5 text-sky-400" /></div>
              <div><h4 className="text-white font-semibold mb-1">The Value (ROI)</h4><p className="text-slate-500 text-sm">Zero time wasted on data entry. Consistent and monitored production.</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
      <button className="bg-white text-black px-8 py-4 rounded-xl font-bold inline-flex items-center gap-3 hover:bg-slate-200 shadow-xl"><Github className="w-5 h-5" /> VIEW PROJECT ON GITHUB <ExternalLink className="w-4 h-4 opacity-50" /></button>
      <button onClick={onClose} className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-bold hover:bg-white/10 transition-all flex items-center gap-2"><X className="w-5 h-5" /> CLOSE CASE STUDY</button>
    </div>
  </div>
);

const LinkedInAutomationCaseStudy: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="max-w-6xl w-full mx-auto text-center px-4 md:px-0 relative">
    <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-8 font-medium">Case Study: Automated LinkedIn Scouting</div>
    <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">Scouting LinkedIn Automation</h1>
    <p className="text-slate-400 text-xl md:text-2xl mb-16 max-w-3xl mx-auto font-light leading-relaxed">
      From <span className="text-white font-medium">Manual Search</span> to <span className="text-white font-medium">AI Relevance Scoring</span>: build a high-quality talent pipeline 24/7.
    </p>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left mb-16">
      <div className="bg-[#111111] border border-white/5 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group">
        <Search className="absolute top-10 right-10 w-32 h-32 text-white/5 group-hover:scale-110 transition-transform duration-500" />
        <div className="relative z-10">
          <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-4 block">THE DIGITAL HEADHUNTER</span>
          <h3 className="text-3xl font-bold text-white mb-6">AI Profile Scoring</h3>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed font-light">The system scans the web 24/7. An advanced AI reads every LinkedIn profile, extracts data, and assigns a quality score (0-5) based on relevance.</p>
          <div className="space-y-4">
            <div className="bg-black/40 border border-white/5 rounded-2xl p-6 flex gap-5">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center"><AlertTriangle className="w-5 h-5 text-amber-500" /></div>
              <div><h4 className="text-white font-semibold mb-1">The Problem</h4><p className="text-slate-500 text-sm">Manual search for specific roles takes hours and results in databases full of "junk".</p></div>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6 flex gap-5">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center"><Zap className="w-5 h-5 text-indigo-400" /></div>
              <div><h4 className="text-white font-semibold mb-1">The Solution</h4><p className="text-slate-500 text-sm">Only structure and save profiles with a high relevance score, filtering out noise automatically.</p></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#111111] border border-white/5 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group">
        <TrendingUp className="absolute top-10 right-10 w-32 h-32 text-white/5 group-hover:scale-110 transition-transform duration-500" />
        <div className="relative z-10">
          <span className="text-[10px] uppercase tracking-widest text-purple-400 font-bold mb-4 block">MANAGERIAL</span>
          <h3 className="text-3xl font-bold text-white mb-6">Talent Pipeline</h3>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed font-light">Human recruiters stop doing manual research and focus only on high-scoring candidates, drastically increasing conversion rates.</p>
          <div className="space-y-4">
            <div className="bg-black/40 border border-white/5 rounded-2xl p-6 flex gap-5">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center"><AlertTriangle className="w-5 h-5 text-amber-500" /></div>
              <div><h4 className="text-white font-semibold mb-1">The Problem</h4><p className="text-slate-500 text-sm">Low conversion rates because recruiters spend too much time filtering irrelevant profiles.</p></div>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6 flex gap-5">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center"><PieChart className="w-5 h-5 text-sky-400" /></div>
              <div><h4 className="text-white font-semibold mb-1">The ROI</h4><p className="text-slate-500 text-sm">Automatic creation of a highly qualified pipeline for sales or recruiting.</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
      <button className="bg-white text-black px-8 py-4 rounded-xl font-bold inline-flex items-center gap-3 hover:bg-slate-200 transition-colors"><Github className="w-5 h-5" /> VIEW PROJECT ON GITHUB <ExternalLink className="w-4 h-4 opacity-50" /></button>
      <button onClick={onClose} className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-bold hover:bg-white/10 transition-all flex items-center gap-2"><X className="w-5 h-5" /> CLOSE CASE STUDY</button>
    </div>
  </div>
);

const ProjectDetails: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => (
  <div className="fixed inset-0 bg-black/95 flex items-start justify-center z-[100] overflow-y-auto backdrop-blur-sm scrollbar-thin">
    <div className="w-full py-12 md:py-20 animate-fade-in-up">
      {project.title === "AI Customer Care Automation" ? (
        <AICustomerCareCaseStudy onClose={onClose} />
      ) : project.title === "Scouting LinkedIn Automation" ? (
        <LinkedInAutomationCaseStudy onClose={onClose} />
      ) : project.title === "Lead Qualification & Reporting" ? (
        <LeadQualificationCaseStudy onClose={onClose} />
      ) : project.title === '"Zero-Touch" Content Publishing' ? (
        <ZeroTouchContentCaseStudy onClose={onClose} />
      ) : project.title === "Retail Analytics & ML Forecasting" ? (
        <RetailAnalyticsCaseStudy onClose={onClose} />
      ) : project.title === "Diplomacy & Gender Analytics" ? (
        <DiplomacyGenderCaseStudy onClose={onClose} />
      ) : project.title === "Netflix Content Strategy Dashboard" ? (
        <NetflixContentCaseStudy onClose={onClose} />
      ) : (
        <div className="bg-[#111] border border-white/10 rounded-[2.5rem] max-w-4xl w-full mx-auto p-8 md:p-12 shadow-2xl relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative rounded-2xl overflow-hidden aspect-video md:aspect-square">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold text-white mb-6">{project.title}</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8 flex-grow">{project.desc}</p>
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4">Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-slate-300 text-sm">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <button className="w-full py-4 bg-white text-black rounded-xl font-bold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">View Project <ExternalLink className="w-4 h-4" /></button>
                  <button onClick={onClose} className="w-full py-4 border border-white/10 bg-white/5 text-white rounded-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2">Close Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
);

interface PortfolioProps {
  onProjectToggle?: (isOpen: boolean) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onProjectToggle }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (onProjectToggle) onProjectToggle(selectedProject !== null);
  }, [selectedProject, onProjectToggle]);

  const automationProjects: Project[] = [
    {
      title: "AI Customer Care Automation",
      desc: "An intelligent support system leveraging AI agents to automate ticket classification, draft responses, and handle common inquiries, streamlining customer service operations.",
      tags: ["n8n", "AI Agents", "Customer Support", "Automation"],
      image: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?q=80&w=2000&auto=format&fit=crop",
      isCaseStudy: true
    },
    {
      title: "Lead Qualification & Reporting",
      desc: "Integrated workflow solution for aligning marketing leads with sales follow-ups. Automates data enrichment, scoring, and personalized outreach using AI agents.",
      tags: ["n8n", "Salesforce", "Marketing Ops", "AI Agents"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
      isCaseStudy: true
    },
    {
      title: "Scouting LinkedIn Automation",
      desc: "Automated pipeline for identifying and tracking potential leads on LinkedIn. Extracts professional insights and qualifies prospects before syncing with CRM.",
      tags: ["n8n", "LinkedIn", "Automation", "Lead Scoring"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      isCaseStudy: true
    },
    {
      title: '"Zero-Touch" Content Publishing',
      desc: "Autonomous content ecosystem that monitors trends, generates high-quality articles and social posts using clustered AI agents, and publishes across platforms with built-in quality checks.",
      tags: ["n8n", "OpenAI", "CMS Automation", "Content Ops"],
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1000&auto=format&fit=crop",
      isCaseStudy: true
    }
  ];

  const dataProjects: Project[] = [
    {
      title: "Retail Analytics & ML Forecasting",
      desc: "Built predictive models (XGBoost, Decision Trees) to forecast supermarket transaction profitability and classify fruit quality with 84% accuracy. Utilized K-Means clustering to segment products without labeled data for sustainable retail insights.",
      tags: ["Machine Learning", "XGBoost", "Scikit-learn", "K-Means"],
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop",
      isCaseStudy: true
    },
    {
      title: "Divine Data: Global Wine Analysis",
      desc: "Analyzed 130,000+ wine reviews to uncover global market trends. Identified strong positive correlations between price and quality, mapped top production regions (Italy, France, US), and revealed value-for-money insights using Python and Seaborn.",
      tags: ["Python", "Pandas", "Seaborn", "EDA"],
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Netflix Content Strategy Dashboard",
      desc: "Developed interactive Tableau dashboards to analyze Netflix's catalog (2011-2021). Explored production trends, content ratings, and director productivity to define a strategic 'Tech Sheet' for content investment.",
      tags: ["Tableau", "Data Visualization", "Business Intelligence"],
      image: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?q=80&w=1000&auto=format&fit=crop",
      isCaseStudy: true
    },
    {
      title: "Diplomacy & Gender Analytics",
      desc: "Longitudinal analysis of the GenDip dataset (1968-2021) using MySQL and DBeaver. Investigated gender disparity in diplomatic missions, analyzing the impact of Feminist Foreign Policies (FFP) across different political regimes.",
      tags: ["SQL", "MySQL", "DBeaver", "Data Storytelling"],
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop",
      isCaseStudy: true
    }
  ];

  return (
    <div className="py-24 px-6 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Selected Projects</h2>
            <p className="text-slate-400 max-w-xl">A dual-track portfolio showcasing technical automation workflows and analytical data research.</p>
          </div>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 font-medium flex items-center gap-2 transition-colors px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10"><Github className="w-4 h-4" /> View GitHub</a>
        </div>
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4"><div className="p-2 bg-indigo-500/20 rounded-lg"><Bot className="w-6 h-6 text-indigo-400" /></div><h3 className="text-2xl font-bold text-slate-200">n8n & AI Automation</h3></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{automationProjects.map((project, index) => (<ProjectCard key={index} project={project} onClick={setSelectedProject} />))}</div>
        </div>
        <div>
          <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4"><div className="p-2 bg-sky-500/20 rounded-lg"><BarChart3 className="w-6 h-6 text-sky-400" /></div><h3 className="text-2xl font-bold text-slate-200">Data Analysis & Strategy</h3></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{dataProjects.map((project, index) => (<ProjectCard key={index} project={project} onClick={setSelectedProject} />))}</div>
        </div>
      </div>
      {selectedProject && <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  );
};

export default Portfolio;