import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, MapPin, Target, Wrench } from 'lucide-react';
import { staticPortfolioData } from '../data/staticData';

const ProjectDetailPage = () => {
  const { id } = useParams();
  
  const { projects } = staticPortfolioData;
  const project = projects.find(p => p.id === id);
  const relatedProjects = projects.filter(p => p.id !== id).slice(0, 3);

  if (!project) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Project not found</p>
          <Link to="/portfolio" className="btn-primary">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }
    ...project,
    duration: project.duration || "6 months",
    role: project.role || "Lead Designer",
    challenge: project.challenge || "The main challenge was to balance sustainability goals with commercial viability while maintaining design excellence.",
    solution: project.solution || "Implemented a comprehensive approach combining sustainable materials, innovative design processes, and stakeholder collaboration.",
    results: project.results || [
      "Significant positive impact achieved",
      "Successfully met project objectives",
      "Delivered measurable results",
      "Gained valuable industry recognition"
    ],
    gallery: project.gallery || [project.image]
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link 
          to="/portfolio"
          className="inline-flex items-center text-gray-600 hover:text-gold transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Portfolio
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative">
        <div className="h-96 md:h-[500px] overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 to-transparent"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-2xl">
              <div className="mb-4">
                <span className="bg-gold text-charcoal text-sm font-semibold px-4 py-2 rounded-full">
                  {project.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {project.title}
              </h1>
              
              <p className="text-xl text-gray-200 mb-6">{project.company}</p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-charcoal mb-6">Project Overview</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>

              {/* Challenge */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-charcoal mb-4 flex items-center">
                  <Target size={24} className="mr-3 text-gold" />
                  Challenge
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-charcoal mb-4 flex items-center">
                  <Wrench size={24} className="mr-3 text-gold" />
                  Solution
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Results */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-charcoal mb-6">Key Results</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.results?.map((result, index) => (
                    <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-charcoal mb-6">Project Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.gallery?.map((image, index) => (
                    <div key={index} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src={image} 
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-8 sticky top-32">
                <h3 className="text-xl font-bold text-charcoal mb-6">Project Details</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin size={20} className="text-gold mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-charcoal">Company</p>
                      <p className="text-gray-600">{project.company}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Calendar size={20} className="text-gold mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-charcoal">Duration</p>
                      <p className="text-gray-600">{project.duration || "6 months"}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Target size={20} className="text-gold mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-charcoal">My Role</p>
                      <p className="text-gray-600">{project.role || "Lead Designer"}</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-medium text-charcoal mb-3">Tools & Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, index) => (
                        <span 
                          key={index}
                          className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t">
                    <p className="font-medium text-charcoal mb-3">Impact</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.impact}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t">
                  <Link 
                    to="/contact"
                    className="btn-primary w-full text-center"
                  >
                    Discuss Similar Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              More <span className="text-gold">Projects</span>
            </h2>
            <p className="text-gray-600">Explore other projects in my portfolio</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects.map((relatedProject) => (
              <Link 
                key={relatedProject.id}
                to={`/project/${relatedProject.id}`}
                className="group block"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <img 
                    src={relatedProject.image} 
                    alt={relatedProject.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-charcoal group-hover:text-gold transition-colors">
                      {relatedProject.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2">{relatedProject.company}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn-secondary inline-flex items-center">
              View All Projects
              <ExternalLink size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;