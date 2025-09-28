import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Users, Award, BookOpen, Microscope, Lightbulb, TrendingUp } from 'lucide-react';
import { portfolioAPI } from '../services/api';

const ResearchPage = () => {
  const { research } = portfolioData;

  const publications = [
    {
      title: "Hemp Fiber Classification Standards for U.S. Textile Industry",
      journal: "Fibers Journal",
      year: "2025",
      status: "Published",
      doi: "10.3390/fibers2025.13.001",
      impact: "Contributing to standardization of hemp textiles in the American market"
    },
    {
      title: "AI-Driven Quality Assurance in Fashion Manufacturing",
      journal: "Textile Research Journal",
      year: "2024",
      status: "Under Review",
      impact: "Revolutionizing quality control processes in fashion production"
    }
  ];

  const collaborations = [
    {
      organization: "USDA Agricultural Research Service",
      project: "Hemp Fiber Classification",
      role: "Lead Researcher",
      duration: "2024 - Present"
    },
    {
      organization: "Texas Tech University",
      project: "Sustainable Textile Innovation",
      role: "Research Collaborator", 
      duration: "2024 - Present"
    },
    {
      organization: "Mad Street Den",
      project: "AI in Fashion Technology",
      role: "Technology Lead",
      duration: "2022 - 2024"
    }
  ];

  const innovations = [
    {
      icon: Microscope,
      title: "Fiber Analysis Technology",
      description: "Advanced microscopic analysis techniques for hemp fiber classification and standardization."
    },
    {
      icon: Lightbulb,
      title: "3D Printed Textiles",
      description: "Innovative TPU-based fabric structures using additive manufacturing technology."
    },
    {
      icon: TrendingUp,
      title: "AI Quality Control",
      description: "Machine learning algorithms for automated defect detection in fashion manufacturing."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
              Research & <span className="text-gold">Innovation</span>
            </h1>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Pioneering sustainable fashion through scientific research, technology innovation, 
              and collaborative partnerships with leading institutions and industry experts.
            </p>
          </div>
        </div>
      </section>

      {/* Current Research Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">
              Current <span className="text-gold">Research</span>
            </h2>
            <p className="text-xl text-gray-600">
              Active research initiatives advancing sustainable fashion and textile innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {research.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen size={24} className="text-charcoal" />
                  </div>
                  <div className="flex-1">
                    <div className={`text-xs font-semibold px-3 py-1 rounded-full inline-block ${
                      project.status === 'Ongoing' ? 'bg-green-100 text-green-700' :
                      project.status === 'Prototype Phase' ? 'bg-blue-100 text-blue-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {project.status}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-charcoal mb-4 group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Award size={16} className="text-gold mr-2" />
                    <span className="text-gray-700">{project.organization}</span>
                  </div>
                  
                  {project.collaboration && (
                    <div className="flex items-center text-sm">
                      <Users size={16} className="text-gold mr-2" />
                      <span className="text-gray-700">{project.collaboration}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">
              Innovation <span className="text-gold">Focus Areas</span>
            </h2>
            <p className="text-xl text-gray-600">
              Specialized expertise in cutting-edge fashion and textile technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {innovations.map((innovation, index) => {
              const IconComponent = innovation.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <IconComponent size={32} className="text-gold" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-charcoal mb-4">
                    {innovation.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {innovation.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">
              Publications & <span className="text-gold">Impact</span>
            </h2>
            <p className="text-xl text-gray-600">
              Peer-reviewed research contributing to the advancement of sustainable fashion
            </p>
          </div>

          <div className="space-y-8">
            {publications.map((publication, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1 mb-4 lg:mb-0">
                    <div className="flex items-center mb-3">
                      <h3 className="text-xl font-bold text-charcoal mr-4">
                        {publication.title}
                      </h3>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        publication.status === 'Published' ? 'bg-green-100 text-green-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {publication.status}
                      </span>
                    </div>
                    
                    <div className="text-gray-600 mb-2">
                      <span className="font-medium">{publication.journal}</span> • {publication.year}
                    </div>
                    
                    {publication.doi && (
                      <div className="text-sm text-gold mb-3">
                        DOI: {publication.doi}
                      </div>
                    )}
                    
                    <p className="text-gray-700 leading-relaxed">
                      {publication.impact}
                    </p>
                  </div>

                  {publication.status === 'Published' && (
                    <div className="lg:ml-6">
                      <button className="btn-secondary inline-flex items-center text-sm">
                        <ExternalLink size={16} className="mr-2" />
                        View Paper
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">
              Research <span className="text-gold">Collaborations</span>
            </h2>
            <p className="text-xl text-gray-600">
              Strategic partnerships with leading institutions and organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collaborations.map((collab, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center mr-3">
                    <Users size={20} className="text-charcoal" />
                  </div>
                  <div className="text-sm text-gold font-medium">
                    {collab.duration}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-charcoal mb-2">
                  {collab.organization}
                </h3>
                
                <p className="text-gray-600 mb-3">
                  {collab.project}
                </p>
                
                <div className="text-sm font-medium text-gold">
                  {collab.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Impact Stats */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Research <span className="text-gold">Impact</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">3+</div>
              <p className="text-gray-300">Active Research Projects</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">2</div>
              <p className="text-gray-300">Published Papers</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">5+</div>
              <p className="text-gray-300">Institutional Partnerships</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">$500K+</div>
              <p className="text-gray-300">Research Funding</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Interested in <span className="text-gold">Collaboration</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Let's discuss research partnerships, innovation opportunities, 
            or consulting on sustainable fashion technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Discuss Research Partnership
            </Link>
            <Link to="/services" className="btn-secondary">
              Explore Consulting Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchPage;