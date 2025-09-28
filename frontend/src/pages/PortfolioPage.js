import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, ExternalLink } from 'lucide-react';
import { staticPortfolioData, categories } from '../data/staticData';

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const { projects } = staticPortfolioData;
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => 
        project.category.toLowerCase().replace(' ', '-') === selectedCategory
      );

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
              My <span className="text-gold">Portfolio</span>
            </h1>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              A comprehensive showcase of {allProjects.length} projects spanning sustainable fashion, 
              research innovation, and technology integration across global brands and institutions.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gold text-charcoal shadow-lg transform scale-105'
                      : 'bg-white text-gray-600 hover:bg-gold/10 hover:text-gold border border-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Mobile Filter Button */}
            <div className="md:hidden mt-6">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="btn-secondary inline-flex items-center"
              >
                <Filter size={20} className="mr-2" />
                Filter Projects
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Filter Dropdown */}
      {isFilterOpen && (
        <div className="md:hidden bg-white border-b shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setIsFilterOpen(false);
                  }}
                  className={`px-4 py-3 rounded-lg font-medium transition-all text-sm ${
                    selectedCategory === category.id
                      ? 'bg-gold text-charcoal'
                      : 'bg-gray-100 text-gray-600 hover:bg-gold/10'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Counter */}
          <div className="mb-12">
            <p className="text-gray-600 text-center">
              Showing <span className="font-semibold text-gold">{filteredProjects.length}</span> projects
              {selectedCategory !== 'all' && (
                <span> in <span className="font-semibold text-charcoal">
                  {categories.find(cat => cat.id === selectedCategory)?.label}
                </span></span>
              )}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link 
                key={project.id}
                to={`/project/${project.id}`}
                className="group block"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:transform group-hover:-translate-y-2">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center text-white text-sm">
                          <ExternalLink size={16} className="mr-2" />
                          View Project Details
                        </div>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold text-charcoal text-xs font-semibold px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-charcoal group-hover:text-gold transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-gold text-sm font-medium mb-3">{project.company}</p>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tools/Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tools.slice(0, 3).map((tool, index) => (
                        <span 
                          key={index}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-gray-400 mb-4">No projects found</h3>
              <p className="text-gray-500 mb-8">
                Try selecting a different category to explore more projects.
              </p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="btn-primary"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Impressed by My <span className="text-gold">Work</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let's discuss how I can bring similar innovation and sustainability expertise to your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Start a Project
            </Link>
            <a 
              href={portfolioContact.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center"
            >
              <ExternalLink size={20} className="mr-2" />
              View on Behance
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;