import React, { useState, useEffect } from 'react';
/* Add missing Linkedin import and remove non-existent SmartphoneIcon */
import { Github, Linkedin, ExternalLink, Workflow, BarChart3, Bot, Database, AlertTriangle, Lightbulb, Play, TrendingUp, X, Search, Zap, PieChart, ClipboardCheck, LayoutDashboard, PenTool, LayoutGrid, FileSpreadsheet, BookOpen, Sparkles, Code, Cpu, Table, BarChart, FlaskConical, Target, Activity, Map, Layers, ShieldCheck, Flag, Smartphone, HardDrive, Filter, Globe, Wine, Leaf, Store, BarChart4, GraduationCap, Trophy, Globe2, LineChart, Microchip, CloudDownload, Gavel, MousePointer2, Cloud, FileJson, Mail, ArrowRight } from 'lucide-react';

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
      {/* Rimosso line-clamp-3 per mostrare il testo completo */}
      <p className="text-slate-400 text-sm mb-6 leading-relaxed">
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
    <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-8 font-medium">CASE STUDY SHOWCASE</div>
    <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">AI Customer Care <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Automation</span></h1>
    <p className="text-slate-400 text-xl md:text-2xl mb-16 max-w-3xl mx-auto font-light leading-relaxed">How we revolutionized customer support and data analysis using <span className="text-white font-medium">n8n</span> and <span className="text-white font-medium">Gemini AI</span>.</p>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left mb-16">
      <div className="bg-[#111111] border border-white/5 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group">
        <Play className="absolute top-10 right-10 w-32 h-32 text-white/5 -rotate-12 group-hover:scale-110 transition-transform duration-500" />
        <div className="relative z-10"><span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-4 block">THE ASSISTANT</span><h3 className="text-3xl font-bold text-white mb-6">AI Support Agent</h3><p className="text-slate-400 text-lg mb-10 leading-relaxed font-light">An intelligent bot that learns from PDF manuals to answer technical queries instantly, 24/7.</p>
          <div className="space-y-4">
            <div className="bg-black/40 border border-white/5 rounded-2xl p-6 flex gap-5"><div className="shrink-0 w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center"><AlertTriangle className="w-5 h-5 text-amber-500" /></div><div><h4 className="text-white font-semibold mb-1">Problem</h4><p className="text-slate-500 text-sm">Repetitive technical questions overwhelming the support team.</p></div></div>
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6 flex gap-5"><div className="shrink-0 w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center"><Bot className="w-5 h-5 text-indigo-400" /></div><div><h4 className="text-white font-semibold mb-1">Solution</h4><p className="text-slate-500 text-sm">Gemini AI parses documentation to provide accurate, instant answers.</p></div></div>
          </div>
        </div>
      </div>
      <div className="bg-[#111111] border border-white/5 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group">
        <TrendingUp className="absolute top-10 right-10 w-32 h-32 text-white/5 group-hover:scale-110 transition-transform duration-500" />
        <div className="relative z-10"><span className="text-[10px] uppercase tracking-widest text-purple-400 font-bold mb-4 block">THE ANALYST</span><h3 className="text-3xl font-bold text-white mb-6">Automated Intelligence</h3><p className="text-slate-400 text-lg mb-10 leading-relaxed font-light"> A backend system that audits conversation quality and generates business insights automatically.</p>
          <div className="space-y-4">
            <div className="bg-black/40 border border-white/5 rounded-2xl p-6 flex gap-4 items-start"><AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-1" /><div><h4 className="text-white font-semibold mb-1">Problem</h4><p className="text-slate-500 text-sm">Unstructured chat data making trend analysis impossible.</p></div></div>
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6 flex gap-5"><div className="shrink-0 w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center"><BarChart3 className="w-5 h-5 text-sky-400" /></div><div><h4 className="text-white font-semibold mb-1">Solution</h4><p className="text-slate-500 text-sm">Automated "Critic" AI that tags, scores, and visualizes data.</p></div></div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
      <a 
        href="https://github.com/Carly97-chu/n8n-Automations/blob/057a36b25436d4901d17f0a9914fc385fddbea7a/Customer%20Support%26Care%20(5).json"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-black px-8 py-4 rounded-xl font-bold inline-flex items-center gap-3 hover:bg-slate-200 transition-colors shadow-xl"
      >
        <Github className="w-5 h-5" /> VIEW PROJECT ON GITHUB <ExternalLink className="w-4 h-4 opacity-50" />
      </a>
      <button onClick={onClose} className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-bold hover:bg-white/10 transition-all flex items-center gap-2"><X className="w-5 h-5" /> CLOSE CASE STUDY</button>
    </div>
  </div>
);

// --- ZERO-TOUCH CONTENT PUBLISHING CASE STUDY ---

const ZeroTouchContentCaseStudy: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="max-w-7xl w-full mx-auto animate-fade-in-up pb-24 px-4 md:px-12">
    <div className="text-center mb-20">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-[10px] uppercase tracking-[0.2em] text-indigo-400 font-bold mb-8">
        Case Study: Marketing & Sales
      </div>
      <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">"Zero-Touch"</span> Content Publishing
      </h1>
      <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-4xl mx-auto font-light leading-relaxed">
        From <span className="text-white font-bold">Google Sheets</span> to <span className="text-white font-bold">Notion</span>: an automated workflow with n8n and AI for an always-on editorial calendar.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-6xl mx-auto mb-16">
        {/* Card 1: The AI Author */}
        <div className="bg-[#0c0c0c] border border-white/5 rounded-[2.5rem] p-10 flex flex-col group relative overflow-hidden">
          <Layers className="absolute -top-4 -right-4 w-40 h-40 text-white/5 opacity-10" />
          <div className="relative z-10">
            <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-8 block">THE AI AUTHOR</span>
            <h3 className="text-3xl font-bold text-white mb-6">SEO Generation</h3>
            <p className="text-slate-500 text-base font-light mb-10 leading-relaxed">
              The AI acts as an SEO Specialist: reads the topic from the sheet, writes the article, and generates relevant keywords.
            </p>
            <div className="space-y-4">
              <div className="bg-black/40 border border-white/5 rounded-2xl p-6 flex gap-4 items-start">
                <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">The Problem</h4>
                  <p className="text-slate-500 text-xs">Writing drafts and formatting takes hours and distracts from strategy.</p>
                </div>
              </div>
              <div className="bg-indigo-500/5 border border-indigo-500/10 rounded-2xl p-6 flex gap-4 items-start">
                <Bot className="w-5 h-5 text-indigo-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">The Solution</h4>
                  <p className="text-slate-300 text-xs">Generative AI drafts complete content starting from a single Excel row.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: The Editorial Manager */}
        <div className="bg-[#0c0c0c] border border-white/5 rounded-[2.5rem] p-10 flex flex-col group relative overflow-hidden">
          <LayoutGrid className="absolute -top-4 -right-4 w-40 h-40 text-white/5 opacity-10" />
          <div className="relative z-10">
            <span className="text-[10px] uppercase tracking-widest text-purple-400 font-bold mb-8 block">THE EDITORIAL MANAGER</span>
            <h3 className="text-3xl font-bold text-white mb-6">Notion Workflow</h3>
            <p className="text-slate-500 text-base font-light mb-10 leading-relaxed">
              n8n orchestrates everything: publishes to Notion, updates status on Sheets, and notifies the team on Slack.
            </p>
            <div className="space-y-4">
              <div className="bg-black/40 border border-white/5 rounded-2xl p-6 flex gap-4 items-start">
                <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">The Problem</h4>
                  <p className="text-slate-500 text-xs">Manual copy-paste processes and data entry cause errors and delays.</p>
                </div>
              </div>
              <div className="bg-purple-500/5 border border-purple-500/10 rounded-2xl p-6 flex gap-4 items-start">
                <PieChart className="w-5 h-5 text-purple-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">The Value (ROI)</h4>
                  <p className="text-slate-300 text-xs">Zero time wasted on data entry. Consistent and monitored production.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-8">
        <a 
          href="https://github.com/Carly97-chu/n8n-Automations/blob/057a36b25436d4901d17f0a9914fc385fddbea7a/Content%20creation%20for%20SEO%20%26%20Marketing%20(2).json"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 bg-white text-black rounded-xl font-black tracking-tight hover:bg-slate-200 transition-all uppercase text-sm flex items-center gap-3"
        >
          <Github className="w-5 h-5" /> VIEW PROJECT ON GITHUB <ArrowRight className="w-4 h-4" />
        </a>
        <button onClick={onClose} className="text-slate-500 hover:text-white transition-colors text-xs font-bold tracking-widest uppercase flex items-center gap-2">
          <X className="w-4 h-4" /> Close Case Study
        </button>
      </div>
    </div>
  </div>
);

const LeadQualificationCaseStudy: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="max-w-7xl w-full mx-auto animate-fade-in-up pb-24 px-4 md:px-12">
    <div className="text-center mb-20">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-[10px] uppercase tracking-[0.2em] text-indigo-400 font-bold mb-8">
        Case Study: Autonomous Sales Pipeline
      </div>
      <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
        Lead Qualification & Reporting
      </h1>
      <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-4xl mx-auto font-light leading-relaxed">
        From <span className="text-white font-bold">Survey</span> to <span className="text-white font-bold">Proposal</span>: real-time qualification and automated daily reporting for sales teams.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-6xl mx-auto mb-16">
        {/* Card 1: Lead Qualifier */}
        <div className="bg-[#0c0c0c] border border-white/5 rounded-[2.5rem] p-10 flex flex-col group relative overflow-hidden">
          <Bot className="absolute -top-4 -right-4 w-40 h-40 text-white/5 opacity-10" />
          <div className="relative z-10">
            <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-8 block">OPERATIONAL</span>
            <h3 className="text-3xl font-bold text-white mb-6">Lead Qualifier</h3>
            <p className="text-slate-500 text-base font-light mb-10 leading-relaxed">
              AI analyzes each new contact (budget & feedback) in real-time, deciding autonomously whether to send a personalized proposal or a courtesy email.
            </p>
            <div className="space-y-4">
              <div className="bg-black/40 border border-white/5 rounded-2xl p-6 flex gap-4 items-start">
                <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">The Problem</h4>
                  <p className="text-slate-500 text-xs">Sales team wastes hours reading survey responses, delaying replies to high-budget clients.</p>
                </div>
              </div>
              <div className="bg-indigo-500/5 border border-indigo-500/10 rounded-2xl p-6 flex gap-4 items-start">
                <Zap className="w-5 h-5 text-indigo-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">The Solution</h4>
                  <p className="text-slate-300 text-xs">Immediate 24/7 response and qualification, instantly opening tickets on Zendesk/Slack.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Daily Reporting */}
        <div className="bg-[#0c0c0c] border border-white/5 rounded-[2.5rem] p-10 flex flex-col group relative overflow-hidden">
          <TrendingUp className="absolute -top-4 -right-4 w-40 h-40 text-white/5 opacity-10" />
          <div className="relative z-10">
            <span className="text-[10px] uppercase tracking-widest text-purple-400 font-bold mb-8 block">MANAGERIAL</span>
            <h3 className="text-3xl font-bold text-white mb-6">Daily Reporting</h3>
            <p className="text-slate-500 text-base font-light mb-10 leading-relaxed">
              A nightly automated process collects daily data, summarizes it via AI, and generates a formatted report sent to the manager.
            </p>
            <div className="space-y-4">
              <div className="bg-black/40 border border-white/5 rounded-2xl p-6 flex gap-4 items-start">
                <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">The Problem</h4>
                  <p className="text-slate-500 text-xs">Managers chasing employees at the end of the day for updates on customer service status.</p>
                </div>
              </div>
              <div className="bg-purple-500/5 border border-purple-500/10 rounded-2xl p-6 flex gap-4 items-start">
                <LayoutDashboard className="w-5 h-5 text-purple-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">The ROI</h4>
                  <p className="text-slate-300 text-xs">Punctual directional reporting every morning without any human effort.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-8">
        <a 
          href="https://github.com/Carly97-chu/n8n-Automations/blob/057a36b25436d4901d17f0a9914fc385fddbea7a/Marketing%20%26%20Sales%20Funnel%20(4).json"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 bg-white text-black rounded-xl font-black tracking-tight hover:bg-slate-200 transition-all uppercase text-sm flex items-center gap-3"
        >
          <Github className="w-5 h-5" /> VIEW PROJECT ON GITHUB <ArrowRight className="w-4 h-4" />
        </a>
        <button onClick={onClose} className="text-slate-500 hover:text-white transition-colors text-xs font-bold tracking-widest uppercase flex items-center gap-2">
          <X className="w-4 h-4" /> Close Case Study
        </button>
      </div>
    </div>
  </div>
);

const LinkedInScoutingCaseStudy: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="max-w-7xl w-full mx-auto animate-fade-in-up pb-24 px-4 md:px-12">
    <div className="text-center mb-24">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-[10px] uppercase tracking-[0.2em] text-indigo-400 font-bold mb-12">Case Study: Automated LinkedIn Scouting</div>
      <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9] uppercase">Scouting LinkedIn<br/><span className="text-indigo-400">Automation</span></h1>
      <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-3xl mx-auto font-light leading-relaxed">From <span className="text-white font-bold">Manual Search</span> to <span className="text-white font-bold">AI Relevance Scoring</span>: build a high-quality talent pipeline 24/7.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-6xl mx-auto mb-20">
        <div className="bg-[#111111] border border-white/5 rounded-[2.5rem] p-10 flex flex-col justify-between group">
          <div className="relative"><Search className="absolute -top-4 -right-4 w-32 h-32 text-white/5 opacity-20" /><span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-8 block">THE DIGITAL HEADHUNTER</span><h3 className="text-3xl font-bold text-white mb-6">AI Profile Scoring</h3><p className="text-slate-500 text-base font-light mb-12 leading-relaxed">The system scans the web 24/7. An advanced AI reads every LinkedIn profile, extracts data, and assigns a quality score (0-5) based on relevance.</p></div>
          <div className="space-y-4">
             <div className="bg-black/40 border border-white/5 rounded-2xl p-6 flex gap-4 items-start"><AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-1" /><div><h4 className="text-white font-bold text-sm mb-1">The Problem</h4><p className="text-slate-500 text-xs">Manual search for specific roles takes hours and results in databases full of "junk".</p></div></div>
             <div className="bg-indigo-500/5 border border-indigo-500/10 rounded-2xl p-6 flex gap-4 items-start"><Zap className="w-5 h-5 text-indigo-400 shrink-0 mt-1" /><div><h4 className="text-white font-bold text-sm mb-1">The Solution</h4><p className="text-slate-300 text-xs">Only structure and save profiles with a high relevance score, filtering out noise automatically.</p></div></div>
          </div>
        </div>
        <div className="bg-[#111111] border border-white/5 rounded-[2.5rem] p-10 flex flex-col justify-between group">
          <div className="relative"><TrendingUp className="absolute -top-4 -right-4 w-32 h-32 text-white/5 opacity-20" /><span className="text-[10px] uppercase tracking-widest text-purple-400 font-bold mb-8 block">MANAGERIAL</span><h3 className="text-3xl font-bold text-white mb-6">Talent Pipeline</h3><p className="text-slate-500 text-base font-light mb-12 leading-relaxed">Human recruiters stop doing manual research and focus only on high-scoring candidates, drastically increasing conversion rates.</p></div>
          <div className="space-y-4">
             <div className="bg-black/40 border border-white/5 rounded-2xl p-6 flex gap-4 items-start"><AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-1" /><div><h4 className="text-white font-bold text-sm mb-1">The Problem</h4><p className="text-slate-500 text-xs">Low conversion rates because recruiters spend too much time filtering irrelevant profiles.</p></div></div>
             <div className="bg-purple-500/5 border border-purple-500/10 rounded-2xl p-6 flex gap-4 items-start"><LayoutGrid className="w-5 h-5 text-purple-400 shrink-0 mt-1" /><div><h4 className="text-white font-bold text-sm mb-1">The ROI</h4><p className="text-slate-300 text-xs">Automatic creation of a highly qualified pipeline for sales or recruiting.</p></div></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6">
        <a 
          href="https://github.com/Carly97-chu/n8n-Automations/blob/057a36b25436d4901d17f0a9914fc385fddbea7a/Lead%20Generation%20(LinkedIn%20%26%20web)%20(3).json"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 bg-white text-black rounded-xl font-black tracking-tight hover:bg-slate-200 transition-all uppercase text-sm flex items-center gap-3"
        >
          <Github className="w-5 h-5" /> VIEW PROJECT ON GITHUB <ExternalLink className="w-4 h-4 opacity-50" />
        </a>
        <button onClick={onClose} className="text-slate-500 hover:text-white transition-colors text-xs font-bold tracking-widest uppercase">Close Details</button>
      </div>
    </div>
  </div>
);

const CulinaryPlatformCaseStudy: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="max-w-7xl w-full mx-auto animate-fade-in-up pb-24 px-4 md:px-12">
    <div className="text-center mb-24">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-[10px] uppercase tracking-[0.2em] text-emerald-400 font-bold mb-12">GROWTH STRATEGY CASE STUDY</div>
      <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9] uppercase">CULINARY PLATFORM<br/>STRA<span className="text-indigo-400">TEGY</span></h1>
      <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-3xl mx-auto font-light leading-relaxed">I transformed plant-based community data into a growth strategy, using Python and Tableau to decode user behavior and optimize the digital kitchen experience for thousands.</p>
      <a 
        href="https://drive.google.com/file/d/1Gsl635di0r9H0V85Xll1BgX8H-vtKt6f/view?usp=sharing" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="px-10 py-4 bg-white text-black rounded-full font-bold tracking-tight hover:bg-slate-200 transition-all uppercase text-sm mb-32 inline-block"
      >
        VIEW FULL PROJECT
      </a>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-7xl mx-auto mb-32">
        <div className="bg-[#111111] border border-white/5 rounded-[2rem] p-10 flex flex-col justify-between h-full group">
          <div><span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-8 block">TARGETING</span><h3 className="text-2xl font-bold text-white mb-6">Precision Clusters</h3><p className="text-slate-500 text-base font-light mb-12 leading-relaxed">Using K-Means clustering to identify "Foodies Superstar" – the community core with a record 751-day retention.</p></div>
          <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-2xl p-8"><span className="text-xl font-bold text-emerald-400 block mb-1">751 Days</span><span className="text-[10px] uppercase tracking-widest text-emerald-900 font-bold">AVERAGE RETENTION</span></div>
        </div>
        <div className="bg-[#111111] border border-white/5 rounded-[2rem] p-10 flex flex-col justify-between h-full group">
          <div><span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-8 block">TRENDS</span><h3 className="text-2xl font-bold text-white mb-6">The "Pro" Shift</h3><p className="text-slate-500 text-base font-light mb-10 leading-relaxed">Data shows users seek challenges: Intermediate/Advanced recipes score highest, ending the "basic" content era.</p></div>
          <div className="bg-purple-500/5 border border-purple-500/10 rounded-2xl p-8"><span className="text-xl font-bold text-purple-400 block mb-1">Adv/Int</span><span className="text-[10px] uppercase tracking-widest text-purple-900 font-bold">HIGHEST USER RATINGS</span></div>
        </div>
        <div className="bg-[#111111] border border-white/5 rounded-[2rem] p-10 flex flex-col justify-between h-full group">
          <div><span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-8 block">CONTENT</span><h3 className="text-2xl font-bold text-white mb-6">Multi-Device Engagement</h3><p className="text-slate-500 text-base font-light mb-12 leading-relaxed">Ethnic and Vegan/Smoothie themes drive engagement, with Smart TV and Mobile as the preferred real-time cooking platforms.</p></div>
          <div className="bg-sky-500/5 border border-sky-500/10 rounded-2xl p-8"><span className="text-xl font-bold text-sky-400 block mb-1">TV & Mobile</span><span className="text-[10px] uppercase tracking-widest text-sky-900 font-bold">PREFERRED INTERFACES</span></div>
        </div>
      </div>
    </div>
    <div className="text-center mb-32">
       <span className="text-[10px] uppercase tracking-[0.4em] text-slate-600 font-black mb-16 block">TECHNOLOGICAL STACK</span>
       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
         {[{ name: "Python", desc: "Pandas & Scikit-Learn" }, { name: "Tableau", desc: "Interactive Dashboards" }, { name: "Machine Learning", desc: "K-Means Clustering" }, { name: "KPI Monitoring", desc: "Seasonal Trends" }].map((tool, i) => (
           <div key={i} className="bg-[#111111] border border-white/5 rounded-2xl p-8 flex flex-col items-center gap-2 group hover:bg-white/5 transition-all"><span className="text-lg font-bold text-white">{tool.name}</span><span className="text-[10px] text-slate-600 font-medium tracking-tight uppercase">{tool.desc}</span></div>
         ))}
       </div>
    </div>
    <div className="mb-32">
      <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">Strategic Recommendations</h2><p className="text-slate-500 text-lg font-light max-w-3xl mx-auto">Data-informed roadmap to elevate community engagement and platform scalability through behavioral insights.</p></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {[
          { icon: Target, title: "PERSONA ELEVATION", desc: "Establish \"Foodies Superstar\" as the community model: experimental, community-driven, and highly loyal.", color: "purple" },
          { icon: Trophy, title: "GAMIFIED CONTENT", desc: "Develop new challenges modeled on \"Challenge #3\" success, focusing on ethnic and health-forward themes.", color: "emerald" },
          { icon: GraduationCap, title: "TECHNICAL SUPPORT", desc: "Promote intermediate/advanced recipes paired with coaching layers and tailored support content.", color: "sky" },
          { icon: Smartphone, title: "DEVICE ECOSYSTEM", desc: "Tailored UX: Quick, actionable guides for Mobile and immersive, long-form series for Smart TV.", color: "indigo" },
          { icon: Globe2, title: "MARKET GROWTH", desc: "Utilize Italian culture as the primary growth engine while planning international adaptations.", color: "emerald" },
          { icon: LineChart, title: "ADAPTIVE STRATEGY", desc: "Continuous monitoring of rising trends (Smoothie, Vegan) to anticipate and stay culturally relevant.", color: "sky" }
        ].map((item, i) => (
          <div key={i} className="bg-[#111111] border border-white/5 rounded-3xl p-8 group hover:bg-white/5 transition-all">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6"><item.icon className="w-6 h-6 text-indigo-400" /></div>
            <h4 className="text-sm font-black text-white mb-3 tracking-widest uppercase">{item.title}</h4><p className="text-slate-500 text-sm font-light leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="flex justify-center"><button onClick={onClose} className="px-12 py-5 rounded-full border border-white/10 bg-white/5 text-white font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all flex items-center gap-3"><X className="w-4 h-4" /> CLOSE CASE STUDY</button></div>
  </div>
);

const FoodWasteCaseStudy: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="max-w-7xl w-full mx-auto animate-fade-in-up pb-24 px-4 md:px-12">
    <div className="text-center mb-24">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-12">FOOD WASTE REDUCTION ANALYSIS</div>
      <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9] uppercase">FOOD WASTE<br/>REDUCTION <span className="text-indigo-400">ANALYSIS</span></h1>
      <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-3xl mx-auto font-light leading-relaxed">Data analysis for business engagement and growth. Optimizing strategic decision-making and performance tracking for a leading food recovery platform.</p>
      <a 
        href="https://drive.google.com/file/d/1A84dFBfaC_OEdq9Ee_-xwifxGvAvOXaZ/view?usp=sharing" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="px-10 py-4 bg-white text-black rounded-full font-bold tracking-tight hover:bg-slate-200 transition-all uppercase text-sm mb-32 inline-block"
      >
        VIEW FULL PROJECT
      </a>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-7xl mx-auto mb-32">
        <div className="bg-[#111111] border border-white/5 rounded-[2rem] p-10 flex flex-col justify-between h-full group">
          <div><span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-8 block">GEOGRAPHY</span><h3 className="text-2xl font-bold text-white mb-6">Regional Benchmarks</h3><p className="text-slate-500 text-base font-light mb-12 leading-relaxed">Lombardia emerged as the region with the highest volume of food saved, while Roma leads in total saving orders.</p></div>
          <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-2xl p-8"><span className="text-xl font-bold text-emerald-400 block mb-1">Lombardia & Roma</span><span className="text-[10px] uppercase tracking-widest text-emerald-900 font-bold">TOP SAVING ZONES</span></div>
        </div>
        <div className="bg-[#111111] border border-white/5 rounded-[2rem] p-10 flex flex-col justify-between h-full group">
          <div><span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-8 block">DIGITAL STRATEGY</span><h3 className="text-2xl font-bold text-white mb-6">Social Media Uplift</h3><p className="text-slate-500 text-base font-light mb-12 leading-relaxed">Businesses utilizing Instagram promotions saved 514 kg on average, compared to 501 kg for non-promoted partners.</p></div>
          <div className="bg-purple-500/5 border border-purple-500/10 rounded-2xl p-8"><span className="text-xl font-bold text-purple-400 block mb-1">+13 kg / Store</span><span className="text-[10px] uppercase tracking-widest text-purple-900 font-bold">PROMOTION IMPACT</span></div>
        </div>
        <div className="bg-[#111111] border border-white/5 rounded-[2rem] p-10 flex flex-col justify-between h-full group">
          <div><span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-8 block">MONETIZATION</span><h3 className="text-2xl font-bold text-white mb-6">Premium Synergy</h3><p className="text-slate-500 text-base font-light mb-12 leading-relaxed">Premium partners demonstrate higher quality control, maintaining a 3.96 rating vs 3.86 for standard subscriptions.</p></div>
          <div className="bg-sky-500/5 border border-sky-500/10 rounded-2xl p-8"><span className="text-xl font-bold text-sky-400 block mb-1">3.96 Rating</span><span className="text-[10px] uppercase tracking-widest text-sky-900 font-bold">PREMIUM AVG. RATING</span></div>
        </div>
      </div>
    </div>
    <div className="text-center mb-32"><span className="text-[10px] uppercase tracking-[0.4em] text-slate-600 font-black mb-16 block">TECHNICAL TOOLKIT</span><div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">{[{ name: "Advanced Excel", desc: "Complex Data Manipulation" }, { name: "Pivot Tables", desc: "Multi-dimensional Segmentation" }, { name: "Logical Functions", desc: "AVERAGEIFS & Statistical Extraction" }].map((tool, i) => (<div key={i} className="bg-[#111111] border border-white/5 rounded-2xl p-8 flex flex-col items-center gap-2 group hover:bg-white/5 transition-all"><span className="text-lg font-bold text-white">{tool.name}</span><span className="text-[10px] text-slate-600 font-medium tracking-tight uppercase">{tool.desc}</span></div>))}</div></div>
    <div className="mb-32">
      <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">Retention & Efficiency</h2><p className="text-slate-500 text-lg font-light max-w-2xl mx-auto">Benchmarking success through long-term partner analysis and recovery volume metrics.</p></div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
        <div className="lg:col-span-7 bg-[#111111] border border-white/5 rounded-[2.5rem] p-12 relative overflow-hidden flex flex-col justify-center min-h-[400px]"><Leaf className="absolute -top-10 -right-10 w-48 h-48 text-white/5 -rotate-12 opacity-50" /><div className="relative z-10"><span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-4 block">LOYALTY ANALYSIS</span><h3 className="text-4xl font-bold text-white mb-8">High-Performance Benchmarks</h3><p className="text-slate-400 text-xl font-light leading-relaxed mb-12">Isolated top-performing long-term partners (enrolled for over 1 year) to establish key indicators of food recovery success. Business ID 3028 was identified as a primary benchmark for volume and consistency.</p>
            <div className="flex gap-4"><span className="px-5 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-bold text-purple-400">{">"} 1 Year</span><span className="px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400">Partner Tenure</span></div>
          </div>
        </div>
        <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
          <div className="bg-[#111111] border border-white/5 rounded-3xl p-8 flex items-center gap-6 group hover:bg-white/5 transition-all flex-grow"><div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center shrink-0"><BarChart4 className="w-7 h-7 text-indigo-400" /></div><div><h4 className="text-sm font-black text-white mb-1 tracking-widest uppercase">EFFICIENCY SCORING</h4><p className="text-slate-500 text-sm font-light leading-relaxed">Metrics refined using statistical filters to identify recovery outliers.</p></div></div>
          <div className="bg-[#111111] border border-white/5 rounded-3xl p-8 flex items-center gap-6 group hover:bg-white/5 transition-all flex-grow"><div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0"><Store className="w-7 h-7 text-emerald-400" /></div><div><h4 className="text-sm font-black text-white mb-1 tracking-widest uppercase">BUSINESS SEGMENTATION</h4><p className="text-slate-500 text-sm font-light leading-relaxed">Granular analysis of partner behavior to optimize account management.</p></div></div>
          <div className="bg-[#111111] border border-white/5 rounded-3xl p-8 flex items-center gap-6 group hover:bg-white/5 transition-all flex-grow"><div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center shrink-0"><Zap className="w-7 h-7 text-purple-400" /></div><div><h4 className="text-sm font-black text-white mb-1 tracking-widest uppercase">STRATEGIC DRIVERS</h4><p className="text-slate-500 text-sm font-light leading-relaxed">Identifying the key activities that transform standard partners into top savers.</p></div></div>
        </div>
      </div>
    </div>
    <div className="flex justify-center"><button onClick={onClose} className="px-12 py-5 rounded-full border border-white/10 bg-white/5 text-white font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all flex items-center gap-3"><X className="w-4 h-4" /> CLOSE CASE STUDY</button></div>
  </div>
);

const DivineDataCaseStudy: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="max-w-7xl w-full mx-auto animate-fade-in-up pb-24 px-4 md:px-12">
    <div className="text-center mb-24">
      <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-[10px] uppercase tracking-[0.2em] text-purple-400 font-bold mb-12">DIVINE DATA: GLOBAL WINE ANALYSIS</div>
      <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9] uppercase">DIVINE <span className="text-indigo-400">DATA</span><br/>WINE ANALYSIS</h1>
      <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-3xl mx-auto font-light leading-relaxed">An extensive exploration of over 130,000 wine reviews to decode market trends, pricing strategies, and regional excellence through advanced data storytelling.</p>
      <a 
        href="https://drive.google.com/file/d/14ntGZfO5wk2dwrUxitXbzpN1sYBVS66S/view?usp=sharing" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="px-10 py-4 bg-white text-black rounded-full font-bold tracking-tight hover:bg-slate-200 transition-all uppercase text-sm mb-32 inline-block"
      >
        VIEW FULL PROJECT
      </a>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-6xl mx-auto mb-32">
        <div className="bg-[#111111] border border-white/5 rounded-[2rem] p-10 flex flex-col justify-between h-full group">
          <div>
            <div className="flex justify-between items-start mb-10">
              <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold">PREMIUM SECTOR</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-500 font-bold tracking-widest uppercase">SOMMELIER DATA</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">Quality vs Price</h3>
            <p className="text-slate-500 text-lg font-light mb-12 leading-relaxed">Deep dive into high-end wine markets, exploring the correlation between bottle price and points assigned by professional sommeliers.</p>
          </div>
          <div className="bg-[#0c0c0c] border border-white/5 rounded-2xl p-8 group-hover:bg-indigo-500/5 transition-colors">
            <span className="text-3xl font-bold text-white block mb-1">High-End</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-600 font-bold">POINT CORRELATION</span>
          </div>
        </div>
        <div className="bg-[#111111] border border-white/5 rounded-[2rem] p-10 flex flex-col justify-between h-full group">
          <div>
            <div className="flex justify-between items-start mb-10">
              <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold">SEGMENTATION</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-500 font-bold tracking-widest uppercase">VARIETALS</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">Varietal Deep Dive</h3>
            <p className="text-slate-500 text-lg font-light mb-12 leading-relaxed">Technical insights into the geographic and qualitative distribution of the most popular grape varieties in the international market.</p>
          </div>
          <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-2xl p-8">
            <span className="text-3xl font-bold text-emerald-400 block mb-1">Specialization</span>
            <span className="text-[10px] uppercase tracking-widest text-emerald-900 font-bold">GRAPE VARIETY ANALYSIS</span>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center mb-32">
       <span className="text-[10px] uppercase tracking-[0.4em] text-slate-600 font-black mb-16 block">DATASET & METHODOLOGY</span>
       <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          <div className="lg:col-span-5 space-y-10 text-left">
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0"><Database className="w-6 h-6 text-slate-400" /></div>
              <div><h4 className="text-xl font-bold text-white mb-2">130,000 Records</h4><p className="text-slate-500 font-light leading-relaxed">Comprehensive sensory descriptions, origin, designation, and pricing.</p></div>
            </div>
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0"><Sparkles className="w-6 h-6 text-slate-400" /></div>
              <div><h4 className="text-xl font-bold text-white mb-2">Data Manipulation</h4><p className="text-slate-500 font-light leading-relaxed">Extraction of statistical insights from complex, unstructured review data.</p></div>
            </div>
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0"><Activity className="w-6 h-6 text-slate-400" /></div>
              <div><h4 className="text-xl font-bold text-white mb-2">Trend Visualization</h4><p className="text-slate-500 text-base font-light mb-12 leading-relaxed">Mapping the journey from the vineyard to the global final market.</p></div>
            </div>
          </div>
          <div className="lg:col-span-7">
             <div className="bg-[#111111] border border-white/5 rounded-[2rem] p-12 relative overflow-hidden h-full flex flex-col justify-center">
                <Wine className="absolute -top-10 -right-10 w-48 h-48 text-white/5 -rotate-12 opacity-50" />
                <div className="relative z-10">
                  <p className="text-slate-400 text-xl md:text-2xl font-light italic leading-relaxed mb-12">"This analysis provides a bird's-eye view of an ancient industry through a modern data lens, revealing how quality perception and pricing strategies align across different continents."</p>
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center"><Wine className="w-5 h-5 text-indigo-400" /></div>
                    <span className="text-[10px] font-black text-slate-600 tracking-[0.2em] uppercase">ANALYSIS VISION 2024</span>
                  </div>
                </div>
             </div>
          </div>
       </div>
    </div>
    <div className="flex justify-center"><button onClick={onClose} className="px-12 py-5 rounded-full border border-white/10 bg-white/5 text-white font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all flex items-center gap-3"><X className="w-4 h-4" /> CLOSE CASE STUDY</button></div>
  </div>
);

// --- REWRITTEN DIPLOMACY & GENDER CASE STUDY ---

const DiplomacyGenderCaseStudy: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="max-w-7xl w-full mx-auto animate-fade-in-up pb-24 px-4 md:px-12">
    <div className="text-center mb-24">
      <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-12 font-medium tracking-[0.3em]">DIPLOMACY AND GENDER ANALYTICS</div>
      <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
        DIPLOMACY AND<br/>
        GENDER ANALY<span className="text-indigo-400">TICS</span>
      </h1>
      <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-4xl mx-auto font-light leading-relaxed">
        A comprehensive study of the Gender and Diplomatic Representation dataset (1968–2021), examining the evolution of gender presence and status hierarchies in global international missions.
      </p>
      <a 
        href="https://drive.google.com/file/d/1hQKx3e2yKlvTJDKtAjFdjJchBYxGuslT/view?usp=sharing" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="px-10 py-4 bg-white text-black rounded-full font-bold tracking-tight hover:bg-slate-200 transition-all uppercase text-sm mb-24 inline-block"
      >
        VIEW FULL PROJECT
      </a>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="bg-[#0c0c0c] border border-white/5 rounded-[2rem] p-10 flex flex-col group">
          <div className="flex justify-between items-start mb-8">
            <span className="text-[10px] uppercase tracking-widest text-purple-400 font-bold">EVOLUTION</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Historical Trends</h3>
          <p className="text-slate-500 text-sm font-light mb-10 leading-relaxed flex-grow">
            Tracked the global gender ratio from 1968 to 2021 to monitor systemic changes in diplomatic representation.
          </p>
          <div className="bg-[#0c1410] border border-emerald-500/10 rounded-2xl p-6">
            <span className="text-2xl font-bold text-emerald-400 block mb-0.5">1968 – 2021</span>
            <span className="text-[10px] uppercase tracking-widest text-emerald-900 font-bold">ANALYSIS TIMELINE</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#0c0c0c] border border-white/5 rounded-[2rem] p-10 flex flex-col group">
          <div className="flex justify-between items-start mb-8">
            <span className="text-[10px] uppercase tracking-widest text-purple-400 font-bold">MAPPING</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Inequality Gaps</h3>
          <p className="text-slate-500 text-sm font-light mb-10 leading-relaxed flex-grow">
            Identified the top 5 countries with the highest gender inequality through snapshots in 1968, 2021, and the full period.
          </p>
          <div className="bg-black/40 border border-white/5 rounded-2xl p-6">
            <span className="text-2xl font-bold text-slate-300 block mb-0.5">Top 5</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-600 font-bold">PRIORITY DISPARITY ZONES</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#0c0c0c] border border-white/5 rounded-[2rem] p-10 flex flex-col group">
          <div className="flex justify-between items-start mb-8">
            <span className="text-[10px] uppercase tracking-widest text-purple-400 font-bold">HIERARCHY</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Status Hierarchies</h3>
          <p className="text-slate-500 text-sm font-light mb-10 leading-relaxed flex-grow">
            Men dominate high-status roles (Ambassador, Papal Nuncio), while women are more frequent as acting chargé d’affaires.
          </p>
          <div className="bg-[#0a1219] border border-sky-500/10 rounded-2xl p-6">
            <span className="text-2xl font-bold text-sky-400 block mb-0.5">Role Bias</span>
            <span className="text-[10px] uppercase tracking-widest text-sky-900 font-bold">2021 DISTRIBUTION ANALYSIS</span>
          </div>
        </div>
      </div>
    </div>

    {/* Technical Toolkit */}
    <div className="text-center mb-32">
       <span className="text-[10px] uppercase tracking-[0.4em] text-slate-600 font-black mb-16 block">TECHNICAL TOOLKIT</span>
       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto px-4">
         {[
           { name: "MySQL", desc: "Database Management" },
           { name: "DBeaver", desc: "SQL Connection & Queries" },
           { name: "Excel", desc: "Data Processing Support" },
           { name: "ChatGPT", desc: "Analytical AI Aid" }
         ].map((tool, i) => (
           <div key={i} className="bg-[#0c0c0c] border border-white/5 rounded-2xl p-8 flex flex-col items-center gap-2 group hover:bg-white/5 transition-all">
             <span className="text-lg font-bold text-white tracking-tight">{tool.name}</span>
             <span className="text-[10px] text-slate-600 font-medium tracking-tight uppercase">{tool.desc}</span>
           </div>
         ))}
       </div>
    </div>

    {/* Specific Case Study Section */}
    <div className="mb-32">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">Specific Case Study: Sweden</h2>
        <p className="text-slate-500 text-lg font-light leading-relaxed max-w-3xl mx-auto">Analyzing the effects of the Feminist Foreign Policy (FFP) on diplomatic appointments.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto px-4">
        <div className="lg:col-span-6 bg-[#111111] border border-white/5 rounded-[2.5rem] p-12 relative overflow-hidden flex flex-col justify-center min-h-[400px]">
          <Flag className="absolute -top-10 -right-10 w-48 h-48 text-white/5 -rotate-12 opacity-30" />
          <div className="relative z-10">
            <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-4 block">CASE FOCUS</span>
            <h3 className="text-4xl font-bold text-white mb-8">The Feminist Foreign Policy Effect</h3>
            <p className="text-slate-400 text-xl font-light leading-relaxed mb-12">
              Detailed analysis of the gender ratio evolution in Sweden between 2014 and 2022. This period highlights the tangible outcomes of institutionalizing gender equality in foreign representation.
            </p>
            <div className="flex gap-4">
              <span className="px-5 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-bold text-purple-400">2014–2022</span>
              <span className="px-5 py-2 rounded-full bg-[#0c1410] border border-emerald-500/20 text-[10px] font-bold text-emerald-400">FFP Adoption</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
          <div className="bg-[#0c0c0c] border border-white/5 rounded-3xl p-8 flex items-center gap-6 group hover:bg-white/5 transition-all flex-grow">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center shrink-0"><BarChart4 className="w-7 h-7 text-indigo-400" /></div>
            <div><h4 className="text-sm font-black text-white mb-1 tracking-widest uppercase">RATIO EVOLUTION</h4><p className="text-slate-500 text-sm font-light leading-relaxed">Quantitative growth of female ambassadors post-2014.</p></div>
          </div>
          <div className="bg-[#0c0c0c] border border-white/5 rounded-3xl p-8 flex items-center gap-6 group hover:bg-white/5 transition-all flex-grow">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0"><Smartphone className="w-7 h-7 text-emerald-400" /></div>
            <div><h4 className="text-sm font-black text-white mb-1 tracking-widest uppercase">MULTI-PLATFORM ACCESS</h4><p className="text-slate-500 text-sm font-light leading-relaxed">Analysis results optimized for quick mobile review and immersive desktop dashboards.</p></div>
          </div>
          <div className="bg-[#0c0c0c] border border-white/5 rounded-3xl p-8 flex items-center gap-6 group hover:bg-white/5 transition-all flex-grow">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center shrink-0"><FileJson className="w-7 h-7 text-purple-400" /></div>
            <div><h4 className="text-sm font-black text-white mb-1 tracking-widest uppercase">DATA IMPORT</h4><p className="text-slate-500 text-sm font-light leading-relaxed">Processed via CSV integration and custom MySQL analytical queries.</p></div>
          </div>
        </div>
      </div>
    </div>

    <div className="flex justify-center mb-12">
      <button onClick={onClose} className="px-12 py-5 rounded-full border border-white/10 bg-white/5 text-white font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all flex items-center gap-3">
        <X className="w-4 h-4" /> CLOSE CASE STUDY
      </button>
    </div>
    <div className="border-t border-white/5 pt-8 flex justify-between items-center text-slate-600 text-[10px] font-black uppercase tracking-widest">
      <span>© 2024 GENDIP DATASET ANALYSIS | GENDER & DIPLOMACY</span>
      <div className="flex gap-4">
        <Linkedin className="w-4 h-4" />
        <Github className="w-4 h-4" />
      </div>
    </div>
  </div>
);

const NetflixContentCaseStudy: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="max-w-7xl w-full mx-auto animate-fade-in-up pb-24 px-4 md:px-12">
    <div className="text-center mb-24">
      <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-12 font-medium">NETFLIX CONTENT STRATEGY</div>
      <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
        NETFLIX CONTENT<br/>
        STRATEGY ANALY<span className="text-indigo-400">TICS</span>
      </h1>
      <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-4xl mx-auto font-light leading-relaxed">
        Exploring the Netflix ecosystem as a mirror of global storytelling. Using data to transform raw insights into visual narratives that identify success patterns and imagine new inclusive content.
      </p>
      <a 
        href="https://drive.google.com/file/d/1ogZtn8Y1o43Yq7otYhB7wk-roECK0jrk/view?usp=sharing" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="px-10 py-4 bg-indigo-500/30 border border-indigo-500/50 text-indigo-200 rounded-full font-bold tracking-tight hover:bg-indigo-500/40 transition-all uppercase text-sm mb-24 inline-block"
      >
        VIEW FULL PROJECT
      </a>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-[#0c0c0c] border border-white/5 rounded-[2rem] p-10 flex flex-col group">
          <div className="flex justify-between items-start mb-8">
            <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold">GROWTH ANALYSIS</span>
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-500 font-bold">2011–2021</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Production Evolution</h3>
          <p className="text-slate-500 text-sm font-light mb-10 leading-relaxed flex-grow">
            Monitoring the growth of Netflix originals and analyzing the volume of shows categorized by maturity ratings over the last decade.
          </p>
          <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
            <span className="text-2xl font-bold text-white block mb-0.5">Time-Series</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-600 font-bold">TREND TRACKING</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#0c0c0c] border border-white/5 rounded-[2rem] p-10 flex flex-col group">
          <div className="flex justify-between items-start mb-8">
            <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold">GLOBAL REACH</span>
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-500 font-bold">Geospatial Mapping</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Production Geography</h3>
          <p className="text-slate-500 text-sm font-light mb-10 leading-relaxed flex-grow">
            Mapping main producing nations (USA, India, France, Japan) and analyzing content ratings to understand regional market differences.
          </p>
          <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
            <span className="text-2xl font-bold text-white block mb-0.5">Global Maps</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-600 font-bold">REGIONAL DISTRIBUTION</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#0c0c0c] border border-white/5 rounded-[2rem] p-10 flex flex-col group">
          <div className="flex justify-between items-start mb-8">
            <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold">EFFICIENCY</span>
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-500 font-bold">Industry Leaders</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Production Leaders</h3>
          <p className="text-slate-500 text-sm font-light mb-10 leading-relaxed flex-grow">
            Identifying the most productive directors and analyzing the distribution between movies and TV series by release year.
          </p>
          <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
            <span className="text-2xl font-bold text-white block mb-0.5">Content Mix</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-600 font-bold">DIRECTOR METRICS</span>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-[#0c0c0c] border border-white/5 rounded-[2rem] p-10 flex flex-col group">
          <div className="flex justify-between items-start mb-8">
            <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold">UX STRATEGY</span>
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-500 font-bold">Interactive Selector</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">User Experience Insights</h3>
          <p className="text-slate-500 text-sm font-light mb-10 leading-relaxed flex-grow">
            Creation of a dedicated "Which Product to Choose?" dashboard to facilitate navigation based on specific user preferences.
          </p>
          <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
            <span className="text-2xl font-bold text-white block mb-0.5">Discovery</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-600 font-bold">DYNAMIC FILTERING</span>
          </div>
        </div>
      </div>
    </div>

    {/* Tools & Methodology */}
    <div className="mb-32">
      <div className="text-center mb-20">
        <span className="text-[10px] uppercase tracking-[0.4em] text-slate-600 font-black">TOOLS & METHODOLOGY</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center px-4">
        <div className="space-y-12">
          <div className="flex items-center gap-6 group">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-indigo-500/10 transition-colors">
              <PieChart className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Tableau Software</h4>
              <p className="text-slate-500 text-sm font-light leading-relaxed">Used for interactive stories, dynamic dashboards, and heat maps.</p>
            </div>
          </div>
          <div className="flex items-center gap-6 group">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-indigo-500/10 transition-colors">
              <Lightbulb className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Decision Making</h4>
              <p className="text-slate-500 text-sm font-light leading-relaxed">Transforming complex data into accessible, decision-ready visual assets.</p>
            </div>
          </div>
        </div>

        <div className="bg-[#111111] border border-white/5 rounded-[2.5rem] p-12 relative overflow-hidden group">
          <div className="relative z-10">
            <p className="text-slate-400 text-lg md:text-xl font-light italic leading-relaxed mb-12">
              "This project demonstrates how data analysis can guide the creation of new shows that aren't just entertainment, but strategic responses to audience demand for inclusivity and representation."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center">
                <LayoutDashboard className="w-4 h-4 text-indigo-400" />
              </div>
              <span className="text-[10px] font-black text-slate-600 tracking-[0.2em] uppercase">STRATEGIC CONCLUSION</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Footer Section */}
    <div className="text-center mb-24 px-4">
      <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">The Future of Content Creation</h2>
      <p className="text-slate-500 text-lg font-light leading-relaxed mb-12 max-w-3xl mx-auto">
        Leveraging analytics to foster inclusion, empowerment, and strategic growth within the global streaming ecosystem.
      </p>
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-[10px] font-black text-indigo-400 uppercase tracking-widest">
        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
        VISUALIZATION INSIGHTS COMPLETE
      </div>
    </div>

    <div className="flex justify-center mb-12">
      <button onClick={onClose} className="px-12 py-5 rounded-full border border-white/10 bg-white/5 text-white font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all flex items-center gap-3">
        <X className="w-4 h-4" /> CLOSE CASE STUDY
      </button>
    </div>
  </div>
);

// --- REWRITTEN WINERY CASE STUDY ---

const WineryStrategyCaseStudy: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="max-w-7xl w-full mx-auto animate-fade-in-up pb-24 px-4 md:px-12">
    <div className="text-center mb-24">
      <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-12 font-medium">DATA DRIVEN WINERY STRATEGY 🍷</div>
      <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
        DATA DRIVEN<br/>
        WINERY <span className="text-indigo-400">STRATEGY</span>
      </h1>
      <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-4xl mx-auto font-light leading-relaxed">
        Optimizing Sustainability and Business Growth through Data. A strategic implementation of precision agriculture and market-driven decision making.
      </p>
      <a 
        href="https://drive.google.com/file/d/1_Mae4-KqRuDgs-t-WHzhLXf8CGD4j-Dq/view?usp=sharing" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="px-10 py-4 bg-white text-black rounded-full font-bold tracking-tight hover:bg-slate-200 transition-all uppercase text-sm mb-24 inline-block"
      >
        VIEW FULL PROJECT
      </a>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-7xl mx-auto mb-32">
        {/* Card 1 */}
        <div className="bg-[#0c0c0c] border border-white/5 rounded-[2rem] p-10 flex flex-col group">
          <div className="flex justify-between items-start mb-8">
            <span className="text-[10px] uppercase tracking-widest text-purple-400 font-bold">MARKET TREND</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Growth & Profitability</h3>
          <p className="text-slate-500 text-sm font-light mb-10 leading-relaxed flex-grow">
            Personalizing products based on consumer needs to reduce waste and focus investments on high-success categories.
          </p>
          <div className="bg-[#0c1410] border border-emerald-500/10 rounded-2xl p-6">
            <span className="text-2xl font-bold text-emerald-400 block mb-0.5">Predictive Success</span>
            <span className="text-[10px] uppercase tracking-widest text-emerald-900 font-bold">INVESTMENT OPTIMIZATION</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#0c0c0c] border border-white/5 rounded-[2rem] p-10 flex flex-col group">
          <div className="flex justify-between items-start mb-8">
            <span className="text-[10px] uppercase tracking-widest text-purple-400 font-bold">ENVIRONMENTAL</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Precision Agriculture</h3>
          <p className="text-slate-500 text-sm font-light mb-10 leading-relaxed flex-grow">
            Optimizing water and pesticide usage through data metrics and shifting to digital-first communication channels.
          </p>
          <div className="bg-black/40 border border-white/5 rounded-2xl p-6">
            <span className="text-2xl font-bold text-purple-400 block mb-0.5">Resource Eco-Efficiency</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-600 font-bold">SUSTAINABILITY GOAL</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#0c0c0c] border border-white/5 rounded-[2rem] p-10 flex flex-col group">
          <div className="flex justify-between items-start mb-8">
            <span className="text-[10px] uppercase tracking-widest text-purple-400 font-bold">CASE STUDY</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">"Banfi" Benchmark</h3>
          <p className="text-slate-500 text-sm font-light mb-10 leading-relaxed flex-grow">
            Analyzing real-world applications of data for harvest timing, waste prevention, and high-impact advertising strategies.
          </p>
          <div className="bg-[#0a1219] border border-sky-500/10 rounded-2xl p-6">
            <span className="text-2xl font-bold text-sky-400 block mb-0.5">Operational Model</span>
            <span className="text-[10px] uppercase tracking-widest text-sky-900 font-bold">REAL-WORLD BENCHMARK</span>
          </div>
        </div>
      </div>
    </div>

    {/* The Data Journey */}
    <div className="mb-32">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase">THE DATA JOURNEY</h2>
        <p className="text-slate-500 text-lg font-light leading-relaxed max-w-3xl mx-auto">A structured workflow defined for "Il Poggiolone" to transform raw inputs into actionable business intelligence.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto px-4">
        <div className="lg:col-span-6 bg-[#111111] border border-white/5 rounded-[2.5rem] p-12 relative overflow-hidden flex flex-col justify-center min-h-[400px]">
          <Wine className="absolute -top-10 -right-10 w-48 h-48 text-white/5 -rotate-12 opacity-30" />
          <div className="relative z-10">
            <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-4 block">STRATEGIC WORKFLOW</span>
            <h3 className="text-4xl font-bold text-white mb-8">The Cycle of Insight</h3>
            <p className="text-slate-400 text-xl font-light leading-relaxed mb-12">
              Our journey begins with data collection from social networks and customer behavior, moves through organization into structured databases, and culminates in informed decision-making.
            </p>
            <div className="flex gap-4">
              <span className="px-5 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-bold text-purple-400">Collection</span>
              <span className="px-5 py-2 rounded-full bg-[#0c1410] border border-emerald-500/20 text-[10px] font-bold text-emerald-400">Analysis</span>
              <span className="px-5 py-2 rounded-full bg-[#0a1219] border border-sky-500/20 text-[10px] font-bold text-sky-400">Decision</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
          <div className="bg-[#0c0c0c] border border-white/5 rounded-3xl p-8 flex items-center gap-6 group hover:bg-white/5 transition-all flex-grow">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center shrink-0"><Cloud className="w-7 h-7 text-indigo-400" /></div>
            <div><h4 className="text-sm font-black text-white mb-1 tracking-widest uppercase">DATA COLLECTION</h4><p className="text-slate-500 text-sm font-light leading-relaxed">Surveys, social network metrics, and digital customer footprints.</p></div>
          </div>
          <div className="bg-[#0c0c0c] border border-white/5 rounded-3xl p-8 flex items-center gap-6 group hover:bg-white/5 transition-all flex-grow">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0"><LayoutGrid className="w-7 h-7 text-emerald-400" /></div>
            <div><h4 className="text-sm font-black text-white mb-1 tracking-widest uppercase">ORGANIZATION</h4><p className="text-slate-500 text-sm font-light leading-relaxed">Pattern recognition through advanced charts and structured databases.</p></div>
          </div>
          <div className="bg-[#0c0c0c] border border-white/5 rounded-3xl p-8 flex items-center gap-6 group hover:bg-white/5 transition-all flex-grow">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center shrink-0"><Gavel className="w-7 h-7 text-purple-400" /></div>
            <div><h4 className="text-sm font-black text-white mb-1 tracking-widest uppercase">ACTIONABLE DECISIONS</h4><p className="text-slate-500 text-sm font-light leading-relaxed">Formulating specific business actions based on empirical findings.</p></div>
          </div>
        </div>
      </div>
    </div>

    {/* Core Competencies */}
    <div className="text-center mb-32">
       <span className="text-[10px] uppercase tracking-[0.4em] text-slate-600 font-black mb-16 block">CORE COMPETENCIES</span>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
         <div className="bg-[#0c0c0c] border border-white/5 rounded-[2rem] p-10 text-left group hover:bg-white/5 transition-all">
            <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-tighter">DATA STRATEGY</h4>
            <p className="text-slate-500 text-sm font-light leading-relaxed">Defining critical KPIs and constant monitoring of sales trends, customer preferences, and key environmental indicators.</p>
         </div>
         <div className="bg-[#0c0c0c] border border-white/5 rounded-[2rem] p-10 text-left group hover:bg-white/5 transition-all">
            <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-tighter">OPERATIONAL EFFICIENCY</h4>
            <p className="text-slate-500 text-sm font-light leading-relaxed">Accelerating internal decision-making processes and improving market agility through rapid access to relevant data.</p>
         </div>
       </div>
    </div>

    <div className="flex justify-center mb-12">
      <button onClick={onClose} className="px-12 py-5 rounded-full border border-white/10 bg-white/5 text-white font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all flex items-center gap-3">
        <X className="w-4 h-4" /> CLOSE CASE STUDY</button>
    </div>
  </div>
);

// --- REWRITTEN RETAIL ANALYTICS CASE STUDY ---

const RetailAnalyticsCaseStudy: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="max-w-7xl w-full mx-auto animate-fade-in-up pb-24 px-4 md:px-12">
    {/* Hero Section */}
    <div className="text-center mb-24">
      <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
        RETAIL ANALYTICS & <br/>
        ML FORE<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">CASTING</span>
      </h1>
      <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-4xl mx-auto font-light leading-relaxed px-4">
        Advanced Analytics for a Sustainable Retail Future. I transformed raw sales and product data into actionable insights using predictive modeling and Machine Learning to balance profitability with ethical growth for a sustainable supermarket chain.
      </p>
      <a 
        href="https://drive.google.com/file/d/11SgFFvNfL6k_cvm70-ND5FtGIbBSm6Nl/view?usp=sharing" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="px-10 py-4 bg-white text-black rounded-full font-bold tracking-tight hover:bg-slate-200 transition-all uppercase text-sm mb-24 inline-block"
      >
        VIEW FULL PROJECT
      </a>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-6xl mx-auto">
        
        {/* Classification Card */}
        <div className="bg-[#111111] border border-white/5 rounded-[2rem] p-10 flex flex-col group">
          <div className="flex justify-between items-start mb-10">
            <span className="text-[10px] uppercase tracking-[0.2em] text-purple-400 font-bold">CLASSIFICATION</span>
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-500 font-bold uppercase tracking-widest">Decision Tree</span>
          </div>
          <h3 className="text-3xl font-bold text-white mb-6">Quality Optimization</h3>
          <p className="text-slate-500 text-base font-light mb-10 leading-relaxed flex-grow">
            Developed a Decision Tree model to classify product quality (focusing on fresh produce), significantly outperforming the logistic regression baseline.
          </p>
          <div className="bg-black/40 border border-white/5 rounded-2xl p-8 mt-auto">
            <span className="text-3xl font-bold text-white block mb-1">83%</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-600 font-bold">ACCURACY ACHIEVED</span>
          </div>
        </div>

        {/* Forecasting Card */}
        <div className="bg-[#111111] border border-white/5 rounded-[2rem] p-10 flex flex-col group">
          <div className="flex justify-between items-start mb-10">
            <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-400 font-bold">FORECASTING</span>
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-500 font-bold uppercase tracking-widest">XGBoost</span>
          </div>
          <h3 className="text-3xl font-bold text-white mb-6">Sales Forecasting</h3>
          <p className="text-slate-500 text-base font-light mb-10 leading-relaxed flex-grow">
            Implemented an XGBoost model to predict gross income trends over time, capturing complex seasonality to optimize sustainable stock levels.
          </p>
          <div className="bg-[#0c1410] border border-emerald-500/10 rounded-2xl p-8 mt-auto">
            <span className="text-3xl font-bold text-emerald-400 block mb-1">Time Series</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-900 font-bold">PREDICTIVE MODELING</span>
          </div>
        </div>

        {/* Regression Card */}
        <div className="bg-[#111111] border border-white/5 rounded-[2rem] p-10 flex flex-col group">
          <div className="flex justify-between items-start mb-10">
            <span className="text-[10px] uppercase tracking-[0.2em] text-sky-400 font-bold">REGRESSION</span>
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-500 font-bold uppercase tracking-widest">Polynomial</span>
          </div>
          <h3 className="text-3xl font-bold text-white mb-6">Profitability Analysis</h3>
          <p className="text-slate-500 text-base font-light mb-10 leading-relaxed flex-grow">
            Reinterpreted customer "Ratings" as a transaction profitability metric, using Polynomial Regression to identify the economic drivers behind purchases.
          </p>
          <div className="bg-[#0a1219] border border-sky-500/10 rounded-2xl p-8 mt-auto">
            <span className="text-3xl font-bold text-sky-400 block mb-1">Insights</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-sky-900 font-bold">ECONOMIC DRIVERS</span>
          </div>
        </div>

        {/* Clustering Card */}
        <div className="bg-[#111111] border border-white/5 rounded-[2rem] p-10 flex flex-col group">
          <div className="flex justify-between items-start mb-10">
            <span className="text-[10px] uppercase tracking-[0.2em] text-amber-500 font-bold">CLUSTERING</span>
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-500 font-bold uppercase tracking-widest">K-Means</span>
          </div>
          <h3 className="text-3xl font-bold text-white mb-6">Automated Segmentation</h3>
          <p className="text-slate-500 text-base font-light mb-10 leading-relaxed flex-grow">
            Utilized K-Means to group products into quality clusters without labels, identifying physical traits (sweetness, size) that define "Top Quality".
          </p>
          <div className="bg-[#191510] border border-amber-500/10 rounded-2xl p-8 mt-auto">
            <span className="text-3xl font-bold text-amber-500 block mb-1">Unsupervised</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-amber-900 font-bold">QUALITY CLUSTERS</span>
          </div>
        </div>

      </div>
    </div>

    {/* Technological Stack */}
    <div className="text-center mb-32">
       <span className="text-[10px] uppercase tracking-[0.4em] text-slate-600 font-black mb-16 block">TECHNOLOGICAL STACK</span>
       <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto px-4">
         {[
           { name: "Python", icon: Code, color: "purple" },
           { name: "XGBoost", icon: Cpu, color: "emerald" },
           { name: "Pandas/NumPy", icon: Table, color: "sky" },
           { name: "Matplotlib", icon: BarChart, color: "amber" },
           { name: "Scikit-learn", icon: FlaskConical, color: "red" }
         ].map((tool, i) => (
           <div key={i} className="bg-black/40 border border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center min-w-[160px] group hover:bg-white/5 transition-all">
             <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                <tool.icon className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
             </div>
             <span className="text-sm font-bold text-white tracking-tight">{tool.name}</span>
           </div>
         ))}
       </div>
       <p className="text-[10px] text-slate-600 uppercase tracking-[0.2em] mt-12 font-bold">
        ENVIRONMENT: GOOGLE COLAB | DATA SCIENCE: SCIPY & SEABORN
       </p>
    </div>

    {/* Footer Sustainability Section */}
    <div className="text-center mb-24 max-w-4xl mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">Data-Driven Sustainability</h2>
      <p className="text-slate-500 text-lg font-light leading-relaxed mb-12">
        This project demonstrates how Machine Learning is not just a tool for profit, but a fundamental ally for responsible resource management in modern retail.
      </p>
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-[10px] font-black text-indigo-400 uppercase tracking-widest">
        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
        REAL-TIME ANALYSIS READY
      </div>
    </div>

    <div className="flex justify-center mb-12">
      <button onClick={onClose} className="px-12 py-5 rounded-full border border-white/10 bg-white/5 text-white font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all flex items-center gap-3"><X className="w-4 h-4" /> CLOSE CASE STUDY</button>
    </div>
  </div>
);

const ProjectDetails: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => (
  <div className="fixed inset-0 bg-black/95 flex items-start justify-center z-[100] overflow-y-auto backdrop-blur-sm scrollbar-thin">
    <div className="w-full py-12 md:py-20 animate-fade-in-up">
      {project.title === "AI Customer Care Automation" ? (
        <AICustomerCareCaseStudy onClose={onClose} />
      ) : project.title === "Retail Analytics & ML Forecasting" ? (
        <RetailAnalyticsCaseStudy onClose={onClose} />
      ) : project.title === "Diplomacy & Gender Analytics" ? (
        <DiplomacyGenderCaseStudy onClose={onClose} />
      ) : project.title === "Netflix Content Strategy Dashboard" ? (
        <NetflixContentCaseStudy onClose={onClose} />
      ) : project.title === "Divine Data: Global Wine Analysis" ? (
        <DivineDataCaseStudy onClose={onClose} />
      ) : project.title === "Data-Driven Winery Strategy" ? (
        <WineryStrategyCaseStudy onClose={onClose} />
      ) : project.title === "Food Waste Reduction Analysis" ? (
        <FoodWasteCaseStudy onClose={onClose} />
      ) : project.title === "Culinary Platform Strategy" ? (
        <CulinaryPlatformCaseStudy onClose={onClose} />
      ) : project.title === "Scouting LinkedIn Automation" ? (
        <LinkedInScoutingCaseStudy onClose={onClose} />
      ) : project.title === "Lead Qualification & Reporting" ? (
        <LeadQualificationCaseStudy onClose={onClose} />
      ) : project.title === '"Zero-Touch" Content Publishing' ? (
        <ZeroTouchContentCaseStudy onClose={onClose} />
      ) : (
        <div className="bg-[#111] border border-white/10 rounded-[2.5rem] max-w-4xl w-full mx-auto p-8 md:p-12 shadow-2xl relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative rounded-2xl overflow-hidden aspect-video md:aspect-square"><img src={project.image} alt={project.title} className="w-full h-full object-cover" /></div>
            <div className="flex flex-col"><h2 className="text-3xl font-bold text-white mb-6">{project.title}</h2><p className="text-slate-400 text-lg leading-relaxed mb-8 flex-grow">{project.desc}</p>
              <div className="space-y-8">
                <div><h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4">Stack</h4><div className="flex flex-wrap gap-2">{project.tags.map((tag, i) => (<span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-slate-300 text-sm">{tag}</span>))}</div></div>
                <div className="flex flex-col gap-3"><button className="w-full py-4 bg-white text-black rounded-xl font-bold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">View Project <ExternalLink className="w-4 h-4" /></button><button onClick={onClose} className="w-full py-4 border border-white/10 bg-white/5 text-white rounded-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2">Close Details</button></div>
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
      tags: ["n8n", "Marketing Ops", "AI Agents"],
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
      title: "Culinary Platform Strategy",
      desc: "End-to-end analysis of a plant-based recipe community. Used clustering to define personas (e.g., 'Foodies Superstar') and built interactive Tableau dashboards to drive growth.",
      tags: ["Tableau", "User Clustering", "Business Strategy", "Python"],
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1000&auto=format&fit=crop",
      isCaseStudy: true
    },
    {
      title: "Food Waste Reduction Analysis",
      desc: "Operational analytics using Advanced Excel to optimize a food rescue platform. Utilized Pivot Tables and complex formulas (Index/Match) to segment users and improve donation efficiency.",
      tags: ["Advanced Excel", "Pivot Tables", "Operations", "Sustainability"],
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1000&auto=format&fit=crop",
      isCaseStudy: true
    },
    {
      title: "Divine Data: Global Wine Analysis",
      desc: "Analyzed 130,000+ wine reviews to uncover global market trends. Identified strong positive correlations between price and quality, mapped top production regions (Italy, France, US), and revealed value-for-money insights using Python and Seaborn.",
      tags: ["Python", "Pandas", "Seaborn", "EDA"],
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000&auto=format&fit=crop",
      isCaseStudy: true
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
    },
    {
      title: "Data-Driven Winery Strategy",
      desc: "Strategic consulting project for 'Il Poggiolone' winery. Defined a data-driven roadmap integrating precision agriculture and CRM strategies to optimize harvest timing and customer loyalty.",
      tags: ["Data Strategy", "CRM", "Precision Ag", "Business Consulting"],
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1000&auto=format&fit=crop",
      isCaseStudy: true
    }
  ];

  return (
    <div className="py-24 px-6 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div><h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Selected Projects</h2><p className="text-slate-400 max-w-xl">A dual-track portfolio showcasing technical automation workflows and analytical data research.</p></div>
          <a href="https://github.com/Carly97-chu" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 font-medium flex items-center gap-2 transition-colors px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10"><Github className="w-4 h-4" /> View GitHub</a>
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