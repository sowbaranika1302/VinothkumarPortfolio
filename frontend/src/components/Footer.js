import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, ExternalLink, Mail, MapPin } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-gold">Vinoth Kumar</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Fashion Designer & Sustainability Innovator specializing in sustainable materials, 
              3D visualization, and circular design strategies.
            </p>
            
            <div className="space-y-3">
              <a 
                href={`mailto:${portfolioData.contact.email}`}
                className="flex items-center text-gray-300 hover:text-gold transition-colors"
              >
                <Mail size={18} className="mr-3" />
                {portfolioData.contact.email}
              </a>
              
              <div className="flex items-center text-gray-300">
                <MapPin size={18} className="mr-3" />
                {portfolioData.contact.location}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              {portfolioData.navigation.slice(0, 4).map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-gold">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Sustainable Collection Development</li>
              <li>ESG Strategy Consulting</li>
              <li>AI & Digital Fashion</li>
              <li>Research & Innovation</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Vinoth Kumar. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gold transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            
            <a
              href={portfolioData.contact.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gold transition-colors"
              aria-label="Behance"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;