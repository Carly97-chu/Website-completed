
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
            <div className="bg-black/40 border border-white/5 rounded-2xl p-6 flex gap-4 items-start"><AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-1" /><div><h4 className="text-white font-bold text-sm mb-1">Problem</h4><p className="text-slate-500 text-sm">Unstructured chat data making trend analysis impossible.</p></div></div>
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

// --- MAIN PORTFOLIO COMPONENT ---

const projects: Project[] = [
  {
    title: "AI Customer Care",
    desc: "Integrated n8n and Gemini AI to automate support and analyze customer data patterns.",
    tags: ["n8n", "Gemini AI", "Customer Care"],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
    isCaseStudy: true
  },
  {
    title: "Zero-Touch Content",
    desc: "End-to-end automation from Google Sheets to Notion using AI for SEO content generation.",
    tags: ["n8n", "Automation", "Content"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
    isCaseStudy: true
  },
  {
    title: "Lead Qualification",
    desc: "Autonomous pipeline for qualifying sales leads and generating daily management reports.",
    tags: ["Sales", "AI Agent", "Reporting"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    isCaseStudy: true
  },
  {
    title: "LinkedIn Scouting",
    desc: "AI-powered digital headhunter that scores and filters LinkedIn profiles automatically.",
    tags: ["Recruiting", "Scraping", "Scoring"],
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=800",
    isCaseStudy: true
  },
  {
    title: "Culinary Platform Strategy",
    desc: "Data analysis project using Python and Tableau to drive growth for a plant-based community.",
    tags: ["Python", "Tableau", "Data Analysis"],
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800",
    isCaseStudy: true
  }
];

interface PortfolioProps {
  onProjectToggle: (isOpen: boolean) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onProjectToggle }) => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    onProjectToggle(activeProject !== null);
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeProject, onProjectToggle]);

  const handleProjectClick = (project: Project) => {
    setActiveProject(project);
  };

  const closeCaseStudy = () => {
    setActiveProject(null);
  };

  return (
    <div className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Portfolio</h2>
          <p className="text-slate-400 max-w-2xl">
            A selection of my recent automation workflows, AI integrations, and data analysis projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              onClick={handleProjectClick} 
            />
          ))}
        </div>
      </div>

      {/* Case Study Overlay */}
      {activeProject && (
        <div className="fixed inset-0 z-[100] bg-[#0a0a0a] overflow-y-auto pt-20 pb-24">
          <div className="flex justify-end p-6 fixed top-0 right-0 z-[110]">
             <button 
              onClick={closeCaseStudy}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
             >
               <X className="w-6 h-6" />
             </button>
          </div>
          
          <div className="mt-12">
            {activeProject.title === "AI Customer Care" && <AICustomerCareCaseStudy onClose={closeCaseStudy} />}
            {activeProject.title === "Zero-Touch Content" && <ZeroTouchContentCaseStudy onClose={closeCaseStudy} />}
            {activeProject.title === "Lead Qualification" && <LeadQualificationCaseStudy onClose={closeCaseStudy} />}
            {activeProject.title === "LinkedIn Scouting" && <LinkedInScoutingCaseStudy onClose={closeCaseStudy} />}
            {activeProject.title === "Culinary Platform Strategy" && <CulinaryPlatformCaseStudy onClose={closeCaseStudy} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
