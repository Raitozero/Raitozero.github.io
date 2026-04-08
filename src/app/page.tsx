import React from 'react';
import Link from 'next/link';
import { ArrowRight, Code, Database, Globe, Layers } from 'lucide-react';

export default function Home() {
  const features = [
    {
      title: 'Fullstack Development',
      description: 'Building end-to-end applications with modern technologies like React, Next.js, and Node.js.',
      icon: <Globe className="text-blue-600" size={24} />,
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Designing scalable and robust cloud-native solutions on AWS and Google Cloud.',
      icon: <Layers className="text-blue-600" size={24} />,
    },
    {
      title: 'Database Architecture',
      description: 'Optimizing data storage and retrieval with SQL and NoSQL databases.',
      icon: <Database className="text-blue-600" size={24} />,
    },
    {
      title: 'Clean Code',
      description: 'Writing maintainable, well-documented, and high-performance code.',
      icon: <Code className="text-blue-600" size={24} />,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-blue-900 mb-6">
              Engineering Excellence for the <span className="text-blue-600">Digital Age</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
              Hello, I'm Raitozero. I design and build high-performance software systems that solve complex problems with elegant, scalable solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-lg transition-all"
              >
                View Portfolio <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 shadow-sm transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      </section>

      {/* Skills/Expertise Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Competencies</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="p-8 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Work Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Selected Projects</h2>
              <p className="text-gray-600 max-w-lg">A brief look at some of my recent technical achievements and creative endeavors.</p>
            </div>
            <Link href="/projects" className="mt-4 md:mt-0 text-blue-600 font-semibold flex items-center hover:text-blue-700">
              View All Projects <ArrowRight className="ml-1" size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100">
              <div className="aspect-video bg-blue-900 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-blue-300 opacity-20 group-hover:scale-110 transition-transform duration-500">
                  <Layers size={120} />
                </div>
              </div>
              <div className="p-8">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-blue-600 bg-blue-50 uppercase mb-4">
                  Case Study
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Enterprise Cloud Migrator</h3>
                <p className="text-gray-600 mb-6">A distributed system for seamless data migration between heterogeneous cloud environments.</p>
                <Link href="/projects" className="text-blue-600 font-medium flex items-center group-hover:translate-x-1 transition-transform">
                  Details <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </div>
            
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100">
              <div className="aspect-video bg-blue-800 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-blue-300 opacity-20 group-hover:scale-110 transition-transform duration-500">
                  <Globe size={120} />
                </div>
              </div>
              <div className="p-8">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-blue-600 bg-blue-50 uppercase mb-4">
                  Open Source
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Global Edge Network</h3>
                <p className="text-gray-600 mb-6">A lightweight, globally distributed caching layer designed for minimal latency and maximum throughput.</p>
                <Link href="/projects" className="text-blue-600 font-medium flex items-center group-hover:translate-x-1 transition-transform">
                  Details <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in working together?</h2>
          <p className="text-xl text-blue-100 mb-10">I'm currently available for freelance projects and consulting engagements.</p>
          <a
            href="mailto:contact@raitozero.com"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-md text-blue-900 bg-white hover:bg-blue-50 shadow-xl transition-all"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
