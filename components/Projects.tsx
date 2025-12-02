import React from 'react';
import { ProjectItem } from '../types';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';

interface ProjectsProps {
  data: ProjectItem[];
}

const Projects: React.FC<ProjectsProps> = ({ data }) => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            <FolderGit2 size={14} />
            <span>Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Selected <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            A collection of robust software solutions and experimental applications built to solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {data.map((project, idx) => (
            <article 
              key={idx} 
              className="group relative bg-[#0f0f0f] border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.image_placeholder} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-4 backdrop-blur-sm">
                  {project.repo_link && (
                    <a 
                      href={project.repo_link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
                      title="View Code"
                    >
                      <Github size={22} />
                    </a>
                  )}
                  {project.live_link && (
                    <a 
                      href={project.live_link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="p-3 bg-primary text-black rounded-full hover:scale-110 transition-transform"
                      title="View Live"
                    >
                      <ExternalLink size={22} />
                    </a>
                  )}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech_stack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1.5 text-xs font-medium text-gray-300 bg-white/5 border border-white/5 rounded-full group-hover:border-primary/20 group-hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;