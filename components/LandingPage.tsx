import React from 'react';
import { PortfolioData } from '../types';
import Navbar from './Navbar';
import Projects from './Projects';
import AIChat from './AIChat';
import { 
  ArrowRight, 
  Terminal, 
  Database, 
  Layout, 
  Server, 
  Cpu, 
  Briefcase, 
  Mail, 
  Linkedin, 
  Github, 
  Twitter,
  ChevronRight,
  Download
} from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

interface LandingProps {
  data: PortfolioData;
}

const LandingPage: React.FC<LandingProps> = ({ data }) => {
  const { hero, about, skills, work_history, projects, contact } = data.sections;

  const chartData = [
    { subject: 'Frontend', A: 95, fullMark: 100 },
    { subject: 'Backend', A: 90, fullMark: 100 },
    { subject: 'DevOps', A: 85, fullMark: 100 },
    { subject: 'Database', A: 88, fullMark: 100 },
    { subject: 'System Design', A: 92, fullMark: 100 },
    { subject: 'Cloud', A: 85, fullMark: 100 },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-primary selection:text-black overflow-hidden relative">
      {/* Global Ambient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
         <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>

      <Navbar items={data.navigation} />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 text-center z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 hover:border-primary/50 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-300">{hero.availability_status}</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            <span className="text-white block mb-2">Building Scalable</span>
            <span className="text-gradient-primary">Digital Solutions.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            {hero.sub_headline}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <a 
              href={hero.cta_primary.link}
              onClick={(e) => handleScroll(e, hero.cta_primary.link)}
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-primary hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              {hero.cta_primary.text} <ArrowRight size={20} />
            </a>
            <a 
              href={hero.cta_secondary.link}
              onClick={(e) => handleScroll(e, hero.cta_secondary.link)}
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
            >
              {hero.cta_secondary.text}
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
            <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-gray-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="glass-panel rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="w-8 h-1 bg-primary rounded-full"></span>
                  About Me
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {about.summary}
                </p>
                
                <div className="grid grid-cols-3 gap-4">
                  {about.stats.map((stat, i) => (
                    <div key={i} className="bg-black/20 p-5 rounded-xl border border-white/5 text-center">
                      <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative flex justify-center">
                <div className="relative w-full max-w-sm aspect-square bg-gradient-to-br from-gray-800 to-black rounded-3xl border border-white/5 p-8 flex flex-col items-center justify-center group overflow-hidden">
                   {/* Background Grid */}
                   <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                   <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(0deg,transparent,black)]"></div>
                   
                   <Terminal size={80} className="text-gray-700 group-hover:text-primary transition-colors duration-500 relative z-10 mb-6" />
                   <div className="font-mono text-gray-500 text-sm relative z-10">
                    <span className="text-primary">const</span> <span className="text-yellow-200">developer</span> = <span className="text-blue-300">{`{`}</span><br/>
                    &nbsp;&nbsp;name: <span className="text-green-400">'Ebad'</span>,<br/>
                    &nbsp;&nbsp;passion: <span className="text-green-400">'Code'</span><br/>
                    <span className="text-blue-300">{`}`}</span>;
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical Ebad Furqan</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A comprehensive arsenal of technologies and tools I use to bring digital products to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Chart */}
            <div className="lg:col-span-1 h-[400px] flex justify-center items-center bg-[#0a0a0a] rounded-3xl border border-white/5 relative p-6">
              <div className="absolute top-6 left-6 text-sm font-bold text-gray-500">EXPERTISE_RADAR</div>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
                  <PolarGrid stroke="#222" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#6b7280', fontSize: 12, fontWeight: 600 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="transparent" />
                  <Radar
                    name="Skills"
                    dataKey="A"
                    stroke="#00E5FF"
                    strokeWidth={3}
                    fill="#00E5FF"
                    fillOpacity={0.15}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            {/* List */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <Layout size={20} />, title: 'Frontend', skills: skills.frontend },
                { icon: <Server size={20} />, title: 'Backend', skills: skills.backend },
                { icon: <Database size={20} />, title: 'Database', skills: skills.database },
                { icon: <Cpu size={20} />, title: 'DevOps', skills: skills.devops },
              ].map((category, idx) => (
                <div key={idx} className="bg-[#0f0f0f] p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-white/5 rounded-lg text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map(s => (
                      <span key={s} className="px-3 py-1.5 bg-black border border-white/10 rounded-md text-sm text-gray-400 hover:text-white hover:border-white/30 transition-colors cursor-default">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="work-history" className="py-32 relative z-10 bg-[#080808]">
        <div className="container mx-auto px-6">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
             <div>
               <div className="flex items-center gap-3 mb-2 text-primary font-bold tracking-wider text-sm uppercase">
                 <Briefcase size={16} />
                 <span>Experience</span>
               </div>
               <h2 className="text-4xl font-bold text-white">Professional Journey</h2>
             </div>
             <a href="/resume-view" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
               View Full Resume <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
             </a>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {work_history.map((job, index) => (
              <div key={job.id} className="relative pl-8 md:pl-0">
                {/* Timeline Line (Desktop) */}
                <div className="hidden md:block absolute left-[29px] top-0 bottom-0 w-px bg-gray-800"></div>
                
                <div className="flex flex-col md:flex-row gap-8 group">
                  {/* Timeline Dot & Date (Desktop) */}
                  <div className="hidden md:flex flex-col items-center w-16 shrink-0 pt-2 relative z-10">
                    <div className="w-4 h-4 rounded-full bg-gray-800 border-2 border-gray-600 group-hover:bg-primary group-hover:border-primary transition-colors"></div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-surface-highlight p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-all duration-300 hover:bg-surface-highlight/80">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-2">
                      <div>
                        <h3 className="font-bold text-xl text-white">{job.role}</h3>
                        <div className="text-lg text-primary">{job.company}</div>
                      </div>
                      <span className="text-sm font-mono text-gray-500 bg-black/30 px-3 py-1 rounded-full border border-white/5">{job.period}</span>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                      {job.description}
                    </p>
                    
                    <div className="space-y-3">
                      {job.achievements.map((ach, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm text-gray-400">
                          <ChevronRight size={16} className="text-primary mt-0.5 shrink-0" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Projects data={projects} />

      {/* Contact Section */}
      <section id="contact" className="py-32 relative z-10">
        <div className="container mx-auto px-6">
           <div className="glass-panel rounded-3xl p-8 md:p-16 border border-white/5">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
               <div className="flex flex-col justify-between">
                 <div>
                   <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Let's <span className="text-gradient-primary">Talk</span></h2>
                   <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                     I'm currently available for freelance projects and full-time opportunities.
                     Whether you have a question or just want to say hi, I'll try my best to get back to you!
                   </p>
                   
                   <div className="space-y-6">
                     <a href={`mailto:${contact.email}`} className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group p-4 bg-white/5 rounded-xl border border-white/5 hover:border-primary/30">
                       <Mail className="text-primary" />
                       <span className="text-lg font-medium">{contact.email}</span>
                     </a>
                     
                     <div className="flex gap-4">
                       {[
                         { icon: <Github size={20} />, href: contact.socials.github },
                         { icon: <Linkedin size={20} />, href: contact.socials.linkedin },
                         { icon: <Twitter size={20} />, href: contact.socials.twitter },
                       ].map((social, idx) => (
                         <a 
                          key={idx}
                          href={social.href} 
                          className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-primary/20 hover:scale-110 transition-all border border-white/5"
                         >
                           {social.icon}
                         </a>
                       ))}
                     </div>
                   </div>
                 </div>
               </div>

               <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                 <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-2">
                     <label className="text-sm font-medium text-gray-500 ml-1">Name</label>
                     <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" placeholder="John Doe" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-medium text-gray-500 ml-1">Email</label>
                     <input type="email" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" placeholder="john@example.com" />
                   </div>
                 </div>
                 <div className="space-y-2">
                   <label className="text-sm font-medium text-gray-500 ml-1">Subject</label>
                   <select className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none">
                     <option>General Inquiry</option>
                     <option>Project Proposal</option>
                     <option>Freelance Contract</option>
                   </select>
                 </div>
                 <div className="space-y-2">
                   <label className="text-sm font-medium text-gray-500 ml-1">Message</label>
                   <textarea rows={5} className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none" placeholder="Tell me about your project..."></textarea>
                 </div>
                 <button className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors shadow-lg shadow-white/5">
                   Send Message
                 </button>
               </form>
             </div>
           </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 bg-[#050505]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Ebad Furqan. Built with React & Tailwind.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms</a>
          </div>
        </div>
      </footer>

      <AIChat />
    </div>
  );
};

export default LandingPage;