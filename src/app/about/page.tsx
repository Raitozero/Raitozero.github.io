import React from 'react';
import { Award, BookOpen, Briefcase, GraduationCap } from 'lucide-react';

export default function About() {
  const experience = [
    {
      company: 'Tech Solutions Inc.',
      role: 'Senior Software Engineer',
      period: '2021 - Present',
      description: 'Leading the development of enterprise-scale cloud applications using Next.js and AWS.',
    },
    {
      company: 'Digital Systems Corp.',
      role: 'Fullstack Developer',
      period: '2018 - 2021',
      description: 'Developed and maintained various client projects using React, Node.js, and PostgreSQL.',
    },
    {
      company: 'Startup Hub',
      role: 'Junior Web Developer',
      period: '2016 - 2018',
      description: 'Assisted in building responsive web applications and implementing UI/UX designs.',
    },
  ];

  const education = [
    {
      school: 'University of Technology',
      degree: 'M.S. in Computer Science',
      year: '2016',
    },
    {
      school: 'State University',
      degree: 'B.S. in Software Engineering',
      year: '2014',
    },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">About Me</h1>
        
        <div className="prose prose-lg text-gray-600 mb-16">
          <p className="mb-4">
            I am a passionate software engineer with over 8 years of experience in building digital products. 
            My journey began with a curiosity for how things work on the web, which led me to pursue a formal education in Computer Science.
          </p>
          <p>
            Throughout my career, I've worked with a variety of technologies and industries, always focusing on creating 
            efficient, maintainable, and user-centric solutions. I believe in continuous learning and staying updated with 
            the latest industry trends and best practices.
          </p>
        </div>

        {/* Experience Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-blue-600" size={28} />
            <h2 className="text-2xl font-bold text-gray-900">Work Experience</h2>
          </div>
          
          <div className="space-y-12">
            {experience.map((item, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-blue-100">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                <div className="mb-1 flex flex-col md:flex-row md:justify-between md:items-baseline">
                  <h3 className="text-xl font-bold text-gray-900">{item.role}</h3>
                  <span className="text-blue-600 font-semibold text-sm">{item.period}</span>
                </div>
                <p className="text-lg text-gray-700 font-medium mb-2">{item.company}</p>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-blue-600" size={28} />
            <h2 className="text-2xl font-bold text-gray-900">Education</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((item, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-100 bg-gray-50">
                <p className="text-blue-600 font-bold mb-1">{item.year}</p>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{item.degree}</h3>
                <p className="text-gray-600">{item.school}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills/Interests */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-blue-600" size={24} />
              <h2 className="text-xl font-bold text-gray-900">Certifications</h2>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li>• AWS Certified Solutions Architect</li>
              <li>• Google Cloud Professional Developer</li>
              <li>• Microsoft Certified: Azure Fundamentals</li>
            </ul>
          </section>
          
          <section>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="text-blue-600" size={24} />
              <h2 className="text-xl font-bold text-gray-900">Research Interests</h2>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li>• Distributed Systems Architecture</li>
              <li>• Machine Learning for Software Performance</li>
              <li>• Decentralized Computing</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
