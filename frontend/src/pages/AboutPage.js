import React from 'react';
import { Link } from 'react-router-dom';
import { Download, ExternalLink, MapPin, Calendar } from 'lucide-react';
import { staticPortfolioData } from '../data/staticData';

// Dynamic icon mapping for competencies
const iconMap = {
  Leaf: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  ),
  Zap: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Box: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  RefreshCw: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  Brain: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  Users: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  )
};

const AboutPage = () => {
  const { about, hero } = staticPortfolioData;

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={hero.image} 
                    alt={hero.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-gold text-charcoal px-6 py-3 rounded-full font-bold shadow-lg">
                  Innovation Leader
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
                About <span className="text-gold">Vinoth</span>
              </h1>
              
              <div className="w-24 h-1 bg-gold mb-8"></div>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                {about.story}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary inline-flex items-center">
                  <Download size={20} className="mr-2" />
                  Download CV
                </button>
                
                <Link to="/contact" className="btn-secondary">
                  Let's Connect
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Core <span className="text-gold">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A unique blend of creative design, scientific research, and technology innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {about.competencies.map((competency, index) => {
              const IconComponent = iconMap[competency.icon];
              return (
                <div key={index} className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-gold/10 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gold text-charcoal rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {IconComponent && <IconComponent />}
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">{competency.text}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Professional <span className="text-gold">Journey</span>
            </h2>
          </div>

          <div className="space-y-8">
            {aboutData.experience.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline Line */}
                <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center text-charcoal font-bold mr-6">
                  {index + 1}
                </div>
                
                {/* Content */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-charcoal">{exp.role}</h3>
                    <div className="flex items-center text-gold font-medium">
                      <Calendar size={16} className="mr-2" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <MapPin size={16} className="mr-2 text-gray-500" />
                    <span className="text-lg font-medium text-gray-700">{exp.company}</span>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Education & <span className="text-gold">Credentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutData.credentials.map((credential, index) => (
              <div key={index} className="flex items-start p-6 bg-gray-50 rounded-2xl hover:bg-gold/10 transition-colors duration-300">
                <div className="w-3 h-3 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed">{credential}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Create <span className="text-gold">Together</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Ready to bring sustainable innovation to your fashion brand? Let's discuss your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Start Collaboration
            </Link>
            <a 
              href="https://linkedin.com/in/vinoth-kumar-265ba8160/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center"
            >
              <ExternalLink size={20} className="mr-2" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;