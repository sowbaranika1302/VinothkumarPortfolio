import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Zap } from 'lucide-react';
import { staticPortfolioData } from '../data/staticData';

const HomePage = () => {
  const [projects, setProjects] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Static hero data (can be moved to API later if needed)
  const hero = {
    name: "Vinoth Kumar",
    title: "Fashion Designer & Sustainability Innovator",
    tagline: "Designing sustainable futures through fashion, research & technology",
    description: "I'm a fashion designer and researcher specializing in sustainable materials, 3D visualization, and circular design strategies. I collaborate with brands, research institutions, and innovators to reimagine the future of fashion.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&crop=face",
    backgroundImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop"
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [projectsData, testimonialsData] = await Promise.all([
          portfolioAPI.getProjects(),
          portfolioAPI.getTestimonials()
        ]);
        
        setProjects(projectsData.projects || []);
        setTestimonials(testimonialsData.testimonials || []);
        setError(null);
      } catch (err) {
        console.error('Error fetching homepage data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const featuredProjects = projects.slice(0, 3);

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading content: {error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="btn-primary"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${hero.backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-white">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
                <span className="text-gold">{hero.name.split(' ')[0]}</span>
                <br />
                {hero.name.split(' ')[1]}
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 mb-4 font-light">
                {hero.title}
              </p>
              
              <div className="w-24 h-1 bg-gold mb-8"></div>
              
              <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
                {hero.tagline}
              </p>
              
              <p className="text-base text-gray-400 mb-10 max-w-xl leading-relaxed">
                {hero.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/portfolio" className="btn-primary inline-flex items-center">
                  View My Work
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                
                <Link to="/contact" className="btn-secondary">
                  Let's Collaborate
                </Link>
              </div>
            </div>

            {/* Profile Image */}
            <div className="lg:flex justify-center hidden">
              <div className="relative">
                <div className="w-96 h-96 rounded-full overflow-hidden border-4 border-gold/20 shadow-2xl">
                  <img 
                    src={hero.image} 
                    alt={hero.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                  <Award size={24} className="text-charcoal" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Zap size={20} className="text-gold" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Featured <span className="text-gold">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore my latest work in sustainable fashion, research innovation, and technology integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link 
                key={project.id}
                to={`/project/${project.id}`}
                className="group block"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:transform group-hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold text-charcoal text-xs font-semibold px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-charcoal mb-2 group-hover:text-gold transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">{project.company}</p>
                    <p className="text-gray-700 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn-primary inline-flex items-center">
              View All Projects
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              What Leaders <span className="text-gold">Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                    <Users size={24} className="text-charcoal" />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-gold font-medium">{testimonial.company}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-gold">Collaborate</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can create sustainable, innovative solutions for your fashion brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Start a Project
            </Link>
            <Link to="/services" className="btn-secondary">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;