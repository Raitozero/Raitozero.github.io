import React from 'react';
import { Mail } from 'lucide-react';
import { Github, Twitter, Linkedin } from './Icons';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-blue-900 mb-4 tracking-tight">
              RAITO<span className="text-blue-500">ZERO</span>
            </h3>
            <p className="text-gray-600 max-w-sm">
              Developing high-quality software solutions with a focus on clean architecture, 
              robust performance, and exceptional user experience.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a></li>
              <li><a href="/projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a></li>
              <li><a href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Social</h4>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-gray-500 hover:text-blue-600 transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-500 hover:text-blue-600 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-500 hover:text-blue-600 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@raitozero.com" className="text-gray-500 hover:text-blue-600 transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Raitozero. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
