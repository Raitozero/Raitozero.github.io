import React from 'react';
import { ExternalLink, Layers, Globe, Code } from 'lucide-react';
import { Github } from '@/components/Icons';

export default function Projects() {
  const projects = [
    {
      title: 'Enterprise Cloud Migrator',
      category: 'System Architecture',
      description: 'A distributed system designed for high-throughput data migration between heterogeneous cloud environments. Implemented with Go and optimized for AWS S3 and Azure Blob Storage.',
      tags: ['Go', 'AWS', 'Azure', 'Distributed Systems'],
      icon: <Layers className="text-blue-600" size={32} />,
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Global Edge Network',
      category: 'Open Source',
      description: 'A lightweight, globally distributed caching layer designed for minimal latency. Used by multiple high-traffic websites to reduce server load and improve performance.',
      tags: ['Rust', 'WebAssembly', 'Edge Computing'],
      icon: <Globe className="text-blue-600" size={32} />,
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Real-time Analytics Dashboard',
      category: 'Web Application',
      description: 'A professional dashboard for monitoring real-time user activity and application performance metrics. Built with Next.js, Tailwind CSS, and WebSockets.',
      tags: ['Next.js', 'TypeScript', 'Tailwind', 'WebSockets'],
      icon: <Code className="text-blue-600" size={32} />,
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Decentralized Identity Manager',
      category: 'Security',
      description: 'A secure and private way for users to manage their digital identities across multiple platforms without relying on a central authority.',
      tags: ['Blockchain', 'Cryptography', 'Identity'],
      icon: <Layers className="text-blue-600" size={32} />,
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-2xl">A collection of professional projects ranging from cloud infrastructure to experimental open-source software.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
              <div className="p-8 flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-600 transition-colors duration-300">
                    <div className="text-blue-600 group-hover:text-white transition-colors duration-300">
                      {project.icon}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} className="text-gray-400 hover:text-blue-600 transition-colors" aria-label="View Github">
                      <Github size={20} />
                    </a>
                    <a href={project.demo} className="text-gray-400 hover:text-blue-600 transition-colors" aria-label="View Demo">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <span className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-full border border-gray-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="h-2 bg-blue-50 group-hover:bg-blue-600 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
