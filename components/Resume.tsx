import React from 'react';
import { PortfolioData } from '../types';
import { Mail, MapPin, Globe, Linkedin, Github, Download, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ResumeProps {
  data: PortfolioData;
}

const Resume: React.FC<ResumeProps> = ({ data }) => {
  // Correctly access sections from the data object
  const { site_config, sections } = data;
  const { contact, work_history, skills, about, digital_resume } = sections;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-900 py-10 px-4">
      {/* Controls - Hidden when printing */}
      <div className="container mx-auto max-w-4xl mb-8 flex justify-between items-center no-print">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Portfolio
        </Link>
        {digital_resume?.downloadable_pdf && (
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 bg-primary text-black px-6 py-2.5 rounded font-medium hover:bg-primary-dark transition-colors"
          >
            <Download size={18} />
            Download PDF
          </button>
        )}
      </div>

      {/* A4 Resume Sheet */}
      <div className="bg-white text-gray-900 w-full max-w-[210mm] min-h-[297mm] mx-auto p-[15mm] shadow-2xl rounded-sm print:shadow-none print:w-full print:max-w-none print:p-0 print:m-0">
        
        {/* Header */}
        <header className="border-b-2 border-gray-900 pb-6 mb-6">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-4xl font-bold uppercase tracking-tight mb-2 text-gray-900">{site_config.owner_name}</h1>
              <h2 className="text-xl text-cyan-700 font-semibold">{site_config.role}</h2>
            </div>
            <div className="text-right text-sm space-y-1">
              <div className="flex items-center justify-end gap-2">
                <span>{contact.email}</span>
                <Mail size={14} />
              </div>
              <div className="flex items-center justify-end gap-2">
                <span>Remote / Relocate</span>
                <MapPin size={14} />
              </div>
              <div className="flex items-center justify-end gap-2">
                <a href={contact.socials.linkedin} className="hover:underline">LinkedIn</a>
                <Linkedin size={14} />
              </div>
            </div>
          </div>
        </header>

        {/* Content Grid */}
        <div className="grid grid-cols-12 gap-8">
          
          {/* Main Column (Experience) */}
          <div className="col-span-8 space-y-8">
            <section>
              <h3 className="text-lg font-bold uppercase border-b border-gray-300 mb-4 pb-1">Professional Profile</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                {about.summary}
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold uppercase border-b border-gray-300 mb-4 pb-1">Work Experience</h3>
              <div className="space-y-6">
                {work_history.map((job) => (
                  <div key={job.id}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-bold text-gray-900">{job.role}</h4>
                      <span className="text-sm font-medium text-gray-500">{job.period}</span>
                    </div>
                    <div className="text-cyan-700 font-medium text-sm mb-2">{job.company}</div>
                    <p className="text-sm text-gray-700 mb-2 italic">{job.description}</p>
                    <ul className="list-disc list-outside ml-4 text-sm text-gray-700 space-y-1">
                      {job.achievements.map((ach, i) => (
                        <li key={i}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Column (Skills) */}
          <div className="col-span-4 space-y-8">
            <section>
              <h3 className="text-lg font-bold uppercase border-b border-gray-300 mb-4 pb-1">Tech Stack</h3>
              
              <div className="mb-4">
                <h4 className="font-bold text-sm text-cyan-700 mb-2">Frontend</h4>
                <div className="flex flex-wrap gap-1.5">
                  {skills.frontend.map(skill => (
                    <span key={skill} className="px-2 py-1 bg-gray-100 text-xs font-medium rounded">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-bold text-sm text-cyan-700 mb-2">Backend</h4>
                <div className="flex flex-wrap gap-1.5">
                  {skills.backend.map(skill => (
                    <span key={skill} className="px-2 py-1 bg-gray-100 text-xs font-medium rounded">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-bold text-sm text-cyan-700 mb-2">DevOps & Cloud</h4>
                <div className="flex flex-wrap gap-1.5">
                  {skills.devops.map(skill => (
                    <span key={skill} className="px-2 py-1 bg-gray-100 text-xs font-medium rounded">{skill}</span>
                  ))}
                </div>
              </div>

               <div className="mb-4">
                <h4 className="font-bold text-sm text-cyan-700 mb-2">Databases</h4>
                <div className="flex flex-wrap gap-1.5">
                  {skills.database.map(skill => (
                    <span key={skill} className="px-2 py-1 bg-gray-100 text-xs font-medium rounded">{skill}</span>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-bold uppercase border-b border-gray-300 mb-4 pb-1">Education</h3>
              <div className="mb-2">
                <h4 className="font-bold text-sm text-gray-900">B.S. Computer Science</h4>
                <div className="text-gray-600 text-xs">University of Technology</div>
                <div className="text-gray-500 text-xs">2014 - 2018</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;