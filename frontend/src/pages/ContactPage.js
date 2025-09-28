import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Calendar, Linkedin, ExternalLink } from 'lucide-react';
import { portfolioAPI } from '../services/api';

// Static contact data
const contactData = {
  email: "contact@vinothkumar.com",
  phone: "+1 (555) 123-4567", 
  linkedin: "https://linkedin.com/in/vinoth-kumar-265ba8160/",
  behance: "https://www.behance.net/vinoth93/projects",
  location: "Kent, Ohio, USA"
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    service: '',
    message: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Sustainable Collection Development',
    'ESG & Circular Design Strategy',
    'AI & Digital Fashion Solutions',
    'Research & Innovation Consulting',
    'Strategic Advisory',
    'Speaking Engagement',
    'Other'
  ];

  const timelines = [
    'Immediate (within 1 month)',
    'Short-term (1-3 months)',
    'Medium-term (3-6 months)',
    'Long-term (6+ months)',
    'Flexible/To be discussed'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        service: '',
        message: '',
        timeline: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: portfolioData.contact.email,
      link: `mailto:${portfolioData.contact.email}`
    },
    {
      icon: Phone,
      label: 'Phone',
      value: portfolioData.contact.phone,
      link: `tel:${portfolioData.contact.phone}`
    },
    {
      icon: MapPin,
      label: 'Location',
      value: portfolioData.contact.location,
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: portfolioData.contact.linkedin,
      description: 'Connect professionally'
    },
    {
      icon: ExternalLink,
      label: 'Behance',
      url: portfolioData.contact.behance,
      description: 'View creative portfolio'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
              Let's <span className="text-gold">Collaborate</span>
            </h1>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your fashion brand with sustainable innovation? 
              Let's discuss how we can create meaningful impact together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-8">
                Start a Conversation
              </h2>

              {isSubmitted && (
                <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center">
                  <CheckCircle size={24} className="text-green-600 mr-3" />
                  <div>
                    <p className="text-green-800 font-medium">Message sent successfully!</p>
                    <p className="text-green-600 text-sm">I'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                      placeholder="Your company"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Your Role
                    </label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                      placeholder="CEO, Creative Director, etc."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Service Interest *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project, goals, and how I can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full md:w-auto inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-8">
                {/* Direct Contact */}
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-6">Direct Contact</h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => {
                      const IconComponent = info.icon;
                      return (
                        <div key={index} className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                          <IconComponent size={24} className="text-gold mr-4 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-charcoal">{info.label}</p>
                            {info.link ? (
                              <a
                                href={info.link}
                                className="text-gray-600 hover:text-gold transition-colors"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-gray-600">{info.value}</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-6">Connect Online</h3>
                  <div className="space-y-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-gold/10 hover:shadow-md transition-all duration-300 group"
                        >
                          <IconComponent size={24} className="text-gold mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                          <div>
                            <p className="font-medium text-charcoal group-hover:text-gold transition-colors">{social.label}</p>
                            <p className="text-gray-600 text-sm">{social.description}</p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-gold/10 border border-gold/20 rounded-xl p-6">
                  <div className="flex items-start">
                    <Clock size={24} className="text-gold mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-charcoal mb-2">Response Time</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        I typically respond to all inquiries within 24 hours. For urgent matters, 
                        feel free to connect with me directly on LinkedIn.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Calendar Link */}
                <div className="bg-charcoal text-white rounded-xl p-6">
                  <div className="flex items-start">
                    <Calendar size={24} className="text-gold mr-4 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">Schedule a Call</h4>
                      <p className="text-gray-300 text-sm mb-4">
                        Prefer to talk directly? Schedule a 30-minute consultation to discuss your project.
                      </p>
                      <button className="btn-secondary text-sm bg-transparent">
                        Book Consultation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">
              Frequently Asked <span className="text-gold">Questions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold text-charcoal mb-3">What's your typical project timeline?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Project timelines vary based on scope, but most strategic consulting engagements range from 
                6-16 weeks. I'll provide a detailed timeline during our initial consultation.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold text-charcoal mb-3">Do you work with early-stage brands?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Absolutely! I work with companies of all sizes, from startups to Fortune 500 brands. 
                My approach adapts to your current stage and growth objectives.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold text-charcoal mb-3">Can you travel for on-site collaborations?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yes, I'm available for on-site workshops, strategy sessions, and implementation support. 
                Travel arrangements can be discussed based on project needs.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold text-charcoal mb-3">What makes your approach unique?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                My unique combination of fashion design expertise, sustainability research, and 
                technology integration allows me to deliver comprehensive solutions that others can't.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;