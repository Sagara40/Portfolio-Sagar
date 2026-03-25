/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cloud, 
  Code2, 
  Database, 
  Zap, 
  Award, 
  Briefcase, 
  ChevronRight, 
  Mail, 
  Linkedin, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Terminal,
  Cpu,
  Layers,
  Users,
  MessageSquare,
  ArrowUpRight,
  Menu,
  X
} from 'lucide-react';

// --- Types ---
interface Project {
  title: string;
  client: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  category: string;
}

interface Certification {
  name: string;
  issuer: string;
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    title: "Healthcare Claims Automation",
    client: "BCBSM (Healthcare)",
    problem: "Manual claim processing was taking 5-7 days, leading to high operational costs and patient dissatisfaction.",
    solution: "Architected a Vlocity-driven solution using OmniScripts and Integration Procedures to automate data validation and claim routing.",
    impact: "Reduced processing time by 45% and eliminated 30% of manual entry errors.",
    tech: ["Vlocity", "OmniScript", "Apex", "LWC"],
    category: "Vlocity / Healthcare"
  },
  {
    title: "Global Supply Chain Sync",
    client: "Corteva (Agriculture)",
    problem: "Inventory data across 12 countries was desynchronized, causing massive logistics delays.",
    solution: "Developed a robust integration layer using REST APIs and Batch Apex to sync SAP data with Salesforce in real-time.",
    impact: "Achieved 100% inventory visibility globally, saving an estimated $2M in annual logistics overhead.",
    tech: ["REST API", "Batch Apex", "Named Credentials", "Integration"],
    category: "Integration / Agriculture"
  },
  {
    title: "Pharma Sales Optimization",
    client: "Global Pharma Project",
    problem: "Sales reps were spending 40% of their time on administrative tasks instead of client meetings.",
    solution: "Built custom LWC dashboards and automated Flows to streamline lead management and reporting.",
    impact: "Increased sales rep productivity by 25% and improved lead conversion rates by 15%.",
    tech: ["LWC", "Salesforce Flows", "JavaScript", "Apex Triggers"],
    category: "Development / Pharma"
  }
];

const SKILLS = [
  { category: "Development", items: ["Apex", "Triggers", "Batch Apex", "Asynchronous Apex", "LWC", "JavaScript"] },
  { category: "Vlocity", items: ["OmniScripts", "DataRaptors", "Integration Procedures", "FlexCards"] },
  { category: "Integration", items: ["REST APIs", "Named Credentials", "JSON/XML", "OAuth"] },
  { category: "Admin & Tools", items: ["Flows", "Validation", "Copado", "Jenkins", "Bitbucket", "Agile"] }
];

const CERTS: Certification[] = [
  { name: "Platform Developer I", issuer: "Salesforce" },
  { name: "Salesforce Administrator", issuer: "Salesforce" },
  { name: "Platform App Builder", issuer: "Salesforce" },
  { name: "Copado Fundamentals", issuer: "Copado" },
  { name: "Robotic Testing", issuer: "Copado" }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center">
            <Cloud className="text-white w-5 h-5" />
          </div>
          <span>SAGAR<span className="text-brand-blue">.DEV</span></span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">{item}</a>
          ))}
          <a 
            href="#contact" 
            className="bg-brand-blue text-white px-5 py-2 rounded-full hover:bg-brand-blue/90 transition-all shadow-lg shadow-brand-blue/20"
          >
            Hire Me
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-dark border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-lg text-slate-400">{item}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-brand-blue/10 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold tracking-widest uppercase mb-6 border border-brand-blue/20">
              Salesforce Developer • 4.5+ Years Exp
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Transforming Complex <span className="text-brand-blue">Workflows</span> into Scalable Solutions.
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl">
              I build high-performance Salesforce ecosystems that improve business efficiency by up to 40%. Specialized in Apex, LWC, and Vlocity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#projects" 
                className="flex items-center justify-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-brand-blue/20"
              >
                View Case Studies <ChevronRight className="w-5 h-5" />
              </a>
              <a 
                href="#contact" 
                className="flex items-center justify-center gap-2 bg-white/5 text-white border border-white/10 px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all"
              >
                Let's Connect
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12"
          >
            <div>
              <div className="text-3xl font-bold text-white mb-1">4.5+</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">230+</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider font-medium">Trailhead Badges</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">5+</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider font-medium">Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">4+</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider font-medium">Global Industries</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 bg-brand-card p-2">
             <div className="w-full h-full rounded-2xl bg-gradient-to-br from-brand-blue/20 to-transparent flex items-center justify-center">
                <Terminal className="w-24 h-24 text-brand-blue opacity-50" />
             </div>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-brand-blue p-6 rounded-2xl shadow-2xl hidden md:block">
            <Zap className="text-white w-8 h-8" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-[0.2em] mb-4">The Mindset</h2>
          <h3 className="text-4xl font-bold mb-6">Architecting Efficiency. <br/>Coding Growth.</h3>
          <p className="text-slate-400 mb-6 leading-relaxed">
            Since 2021, I've been embedded in high-stakes environments at Accenture, solving complex problems for Pharma, Healthcare, and Agriculture giants. I don't just write code; I design systems that bridge the gap between business goals and technical reality.
          </p>
          <p className="text-slate-400 mb-8 leading-relaxed">
            My approach is rooted in the Agile philosophy—fast iterations, client-centric solutions, and a relentless focus on scalability. Whether it's a Vlocity integration or a custom LWC dashboard, my goal is always the same: <strong>Business Impact.</strong>
          </p>
          
          <div className="space-y-4">
            {[
              "Client-facing experience with global stakeholders",
              "Expertise in Vlocity (Industries CPQ/CME)",
              "Strong focus on CI/CD and DevOps best practices"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-blue w-5 h-5 flex-shrink-0" />
                <span className="text-slate-200 font-medium">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-[0.2em] mb-4">Toolkit</h2>
          <h3 className="text-4xl font-bold">Core Competencies</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, idx) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-brand-card border border-white/5 hover:border-brand-blue/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-6 group-hover:bg-brand-blue/20 transition-colors">
                {idx === 0 && <Code2 className="text-brand-blue" />}
                {idx === 1 && <Layers className="text-brand-blue" />}
                {idx === 2 && <Zap className="text-brand-blue" />}
                {idx === 3 && <Cpu className="text-brand-blue" />}
              </div>
              <h4 className="text-xl font-bold mb-4">{skill.category}</h4>
              <div className="flex flex-wrap gap-2">
                {skill.items.map(item => (
                  <span key={item} className="px-3 py-1 rounded-lg bg-white/5 text-slate-400 text-xs font-medium border border-white/5">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold text-brand-blue uppercase tracking-[0.2em] mb-4">Career Path</h2>
            <h3 className="text-4xl font-bold">Professional Journey</h3>
          </div>
          <div className="text-slate-500 font-medium">Accenture (2021 – Present)</div>
        </div>

        <div className="space-y-8">
          {[
            {
              role: "Senior Salesforce Developer",
              company: "Accenture",
              period: "2021 - Present",
              description: "Leading technical implementation for Fortune 500 clients across Healthcare, Pharma, and Agriculture.",
              impacts: [
                "Architected Vlocity solutions for BCBSM, reducing claim processing time by 40%.",
                "Developed global integration frameworks for Corteva using REST APIs and Batch Apex.",
                "Implemented CI/CD pipelines using Copado, reducing deployment errors by 60%.",
                "Mentored junior developers and led code review sessions to ensure high-quality standards."
              ]
            }
          ].map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl bg-brand-card border border-white/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-10 opacity-5">
                <Briefcase className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <h4 className="text-2xl font-bold text-white">{exp.role}</h4>
                  <span className="px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider">Full-Time</span>
                </div>
                <p className="text-slate-400 mb-8 max-w-3xl text-lg">{exp.description}</p>
                <div className="grid md:grid-cols-2 gap-6">
                  {exp.impacts.map((impact, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-brand-blue" />
                      </div>
                      <span className="text-slate-300 leading-relaxed">{impact}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-[0.2em] mb-4">Case Studies</h2>
          <h3 className="text-4xl font-bold">High-Impact Projects</h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col rounded-3xl bg-brand-card border border-white/5 overflow-hidden hover:border-brand-blue/30 transition-all"
            >
              <div className="p-8 flex-1">
                <div className="flex justify-between items-start mb-6">
                   <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">{project.category}</span>
                   <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      <ArrowUpRight className="w-5 h-5 text-slate-500" />
                   </div>
                </div>
                <h4 className="text-2xl font-bold mb-4">{project.title}</h4>
                <div className="space-y-6">
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase mb-2">Problem</div>
                    <p className="text-slate-400 text-sm leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase mb-2">Solution</div>
                    <p className="text-slate-400 text-sm leading-relaxed">{project.solution}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-brand-blue/5 border border-brand-blue/10">
                    <div className="text-xs font-bold text-brand-blue uppercase mb-2 flex items-center gap-2">
                      <Zap className="w-3 h-3" /> Business Impact
                    </div>
                    <p className="text-slate-200 text-sm font-medium">{project.impact}</p>
                  </div>
                </div>
              </div>
              <div className="px-8 py-6 bg-white/[0.02] border-t border-white/5 flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Certifications = () => {
  return (
    <section className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-[0.2em] mb-4">Credibility</h2>
          <h3 className="text-4xl font-bold">Certifications & Badges</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {CERTS.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-2xl bg-brand-card border border-white/5 text-center flex flex-col items-center group hover:bg-brand-blue/5 transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="text-brand-blue w-8 h-8" />
              </div>
              <div className="text-xs font-bold text-slate-500 uppercase mb-1">{cert.issuer}</div>
              <div className="text-sm font-bold text-white leading-tight">{cert.name}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-brand-blue/20 to-transparent border border-brand-blue/20 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-brand-blue flex items-center justify-center shadow-lg shadow-brand-blue/30">
                 <Zap className="text-white w-8 h-8" />
              </div>
              <div>
                 <h4 className="text-2xl font-bold mb-1">230+ Trailhead Badges</h4>
                 <p className="text-slate-400">Continuous learning and mastery of the Salesforce ecosystem.</p>
              </div>
           </div>
           <a href="https://trailblazer.me/id/sagarbulbule" target="_blank" className="px-6 py-3 rounded-xl bg-white text-brand-dark font-bold hover:bg-slate-200 transition-colors flex items-center gap-2">
              View Profile <ExternalLink className="w-4 h-4" />
           </a>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Senior Project Manager",
      role: "Accenture",
      text: "Sagar's ability to translate complex healthcare requirements into elegant Vlocity solutions was instrumental in our project's success. He is a rare developer who understands both the 'how' and the 'why'."
    },
    {
      name: "Technical Lead",
      role: "Global Pharma Client",
      text: "Exceptional problem-solving skills. Sagar took ownership of our integration challenges and delivered a solution that was far more scalable than our original architecture."
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-10 rounded-3xl bg-brand-card border border-white/5 relative">
              <MessageSquare className="absolute top-8 right-8 text-brand-blue/20 w-12 h-12" />
              <p className="text-xl text-slate-300 italic mb-8 leading-relaxed">"{t.text}"</p>
              <div>
                <div className="font-bold text-white">{t.name}</div>
                <div className="text-sm text-brand-blue font-medium">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-brand-blue relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-white/80 font-bold uppercase tracking-widest mb-4">Let's Work Together</h2>
            <h3 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">Ready to scale your Salesforce ecosystem?</h3>
            <p className="text-white/80 text-xl mb-12 leading-relaxed">
              I'm currently open to new opportunities, freelance projects, and technical consultations. Let's discuss how I can bring value to your team.
            </p>
            
            <div className="flex flex-col gap-6">
              <a href="mailto:sagarbulbule99@gmail.com" className="flex items-center gap-4 text-white hover:translate-x-2 transition-transform">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-2xl font-bold">sagarbulbule99@gmail.com</span>
              </a>
              <div className="flex gap-4 mt-4">
                <a href="https://linkedin.com/in/sagarbulbule" className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
                  <Linkedin className="w-7 h-7 text-white" />
                </a>
                <a href="https://github.com/sagarbulbule" className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
                  <Github className="w-7 h-7 text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-2xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-100 border-transparent focus:bg-white focus:border-brand-blue focus:ring-0 transition-all text-slate-900" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-100 border-transparent focus:bg-white focus:border-brand-blue focus:ring-0 transition-all text-slate-900" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl bg-slate-100 border-transparent focus:bg-white focus:border-brand-blue focus:ring-0 transition-all text-slate-900">
                  <option>Hiring / Recruitment</option>
                  <option>Freelance Project</option>
                  <option>Technical Consultation</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-100 border-transparent focus:bg-white focus:border-brand-blue focus:ring-0 transition-all text-slate-900" placeholder="Tell me about your project..."></textarea>
              </div>
              <button className="w-full py-4 rounded-xl bg-brand-blue text-white font-bold text-lg hover:bg-brand-blue/90 transition-all shadow-lg shadow-brand-blue/20">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-500 text-sm font-medium">
          © 2026 Sagar Bulbule. All rights reserved.
        </div>
        <div className="flex items-center gap-8 text-sm font-medium text-slate-500">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-blue/30 selection:text-brand-blue">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
