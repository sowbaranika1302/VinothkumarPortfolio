import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Leaf, Brain, Users, TrendingUp, Award, Target } from 'lucide-react';
import { portfolioAPI } from '../services/api';

const ServicesPage = () => {
  const { services } = portfolioData;

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "Deep dive into your brand vision, sustainability goals, and market positioning to develop a comprehensive strategy.",
      duration: "1-2 weeks"
    },
    {
      number: "02", 
      title: "Research & Analysis",
      description: "Conduct market research, material analysis, and competitive assessment to inform innovative solutions.",
      duration: "2-3 weeks"
    },
    {
      number: "03",
      title: "Design & Development",
      description: "Create sustainable designs, develop prototypes, and implement technology solutions with iterative feedback.",
      duration: "4-8 weeks"
    },
    {
      number: "04",
      title: "Implementation & Launch", 
      description: "Execute strategy, launch collections, and ensure successful market introduction with ongoing support.",
      duration: "2-4 weeks"
    }
  ];

  const expertise = [
    {
      icon: Leaf,
      title: "Sustainability Leadership",
      areas: ["Circular Design", "ESG Strategy", "Supply Chain Optimization", "Material Innovation"]
    },
    {
      icon: Brain,
      title: "Technology Integration",
      areas: ["AI/ML Implementation", "3D Design & Prototyping", "Digital Fashion Solutions", "Quality Assurance Systems"]
    },
    {
      icon: Users,
      title: "Strategic Consulting",
      areas: ["Market Research", "Brand Positioning", "Partnership Development", "Innovation Strategy"]
    },
    {
      icon: TrendingUp,
      title: "Business Impact",
      areas: ["ROI Optimization", "Cost Reduction", "Market Expansion", "Competitive Advantage"]
    }
  ];

  const caseStudyMetrics = [
    { metric: "30%", description: "Average reduction in environmental impact" },
    { metric: "25%", description: "Increase in customer satisfaction" },
    { metric: "40%", description: "Improvement in production efficiency" },
    { metric: "95%", description: "Client retention rate" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
              Strategic <span className="text-gold">Services</span>
            </h1>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive consulting and innovation services for fashion brands seeking 
              sustainable transformation and competitive advantage in the evolving market.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">
              Core <span className="text-gold">Offerings</span>
            </h2>
            <p className="text-xl text-gray-600">
              Specialized services designed for C-level executives and fashion industry leaders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <Target size={28} className="text-charcoal" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-charcoal mb-3 group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-charcoal mb-3">Key Deliverables:</h4>
                  {service.deliverables.map((deliverable, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle size={18} className="text-gold mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{deliverable}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Link 
                    to="/contact"
                    className="inline-flex items-center text-gold font-medium hover:text-charcoal transition-colors"
                  >
                    Discuss This Service
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">
              Areas of <span className="text-gold">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600">
              Deep specialization across critical fashion industry domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300 group">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={28} className="text-charcoal" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-charcoal mb-4">
                    {area.title}
                  </h3>
                  
                  <ul className="space-y-2">
                    {area.areas.map((item, idx) => (
                      <li key={idx} className="text-gray-600 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">
              Collaboration <span className="text-gold">Process</span>
            </h2>
            <p className="text-xl text-gray-600">
              Structured approach ensuring maximum impact and measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gold/30 transform -translate-y-1/2 z-0"></div>
                )}
                
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-2xl font-bold text-charcoal">{step.number}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-charcoal mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="text-sm text-gold font-medium">
                    Timeline: {step.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Proven <span className="text-gold">Results</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Measurable impact delivered for leading fashion brands and organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {caseStudyMetrics.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gold mb-3">
                  {item.metric}
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <Award size={32} className="text-gold mr-4" />
              <h3 className="text-2xl font-bold">Client Success Story</h3>
            </div>
            <blockquote className="text-xl text-gray-300 italic mb-6 max-w-4xl mx-auto">
              "Vinoth's strategic approach to sustainable collection development resulted in our most successful launch to date. 
              His expertise in both design innovation and business strategy created measurable value for our brand."
            </blockquote>
            <div className="text-gold font-medium">
              — Creative Director, Fortune 500 Fashion Brand
            </div>
          </div>
        </div>
      </section>

      {/* Investment Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">
              Service <span className="text-gold">Packages</span>
            </h2>
            <p className="text-xl text-gray-600">
              Flexible engagement models designed for different business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Strategic Advisory */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-charcoal mb-3">Strategic Advisory</h3>
                <p className="text-gray-600">Ongoing strategic guidance and expertise</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-gold mr-3" />
                  <span className="text-gray-700">Monthly strategy sessions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-gold mr-3" />
                  <span className="text-gray-700">Sustainability roadmap</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-gold mr-3" />
                  <span className="text-gray-700">Industry insights & trends</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-gold mr-3" />
                  <span className="text-gray-700">Email & phone support</span>
                </li>
              </ul>
              
              <Link to="/contact" className="btn-secondary w-full text-center">
                Discuss Advisory
              </Link>
            </div>

            {/* Project-Based */}
            <div className="bg-gold text-charcoal rounded-2xl p-8 shadow-xl transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-charcoal text-gold px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-3">Project Partnership</h3>
                <p className="text-charcoal/80">Comprehensive project execution</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-charcoal mr-3" />
                  <span>Full project management</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-charcoal mr-3" />
                  <span>Design & development</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-charcoal mr-3" />
                  <span>Implementation support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-charcoal mr-3" />
                  <span>Results measurement</span>
                </li>
              </ul>
              
              <Link to="/contact" className="btn-primary w-full text-center bg-charcoal text-gold">
                Start Partnership
              </Link>
            </div>

            {/* Research Collaboration */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-charcoal mb-3">Research Collaboration</h3>
                <p className="text-gray-600">Innovation-focused partnerships</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-gold mr-3" />
                  <span className="text-gray-700">Joint research initiatives</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-gold mr-3" />
                  <span className="text-gray-700">Technology development</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-gold mr-3" />
                  <span className="text-gray-700">Publication opportunities</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={18} className="text-gold mr-3" />
                  <span className="text-gray-700">IP co-development</span>
                </li>
              </ul>
              
              <Link to="/contact" className="btn-secondary w-full text-center">
                Explore Research
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Ready to <span className="text-gold">Transform</span> Your Brand?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Let's discuss how strategic innovation and sustainability expertise 
            can drive measurable growth for your fashion business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Schedule Consultation
            </Link>
            <Link to="/portfolio" className="btn-secondary">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;