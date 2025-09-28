// Static data for GitHub Pages deployment
// This replaces the API calls with local data

export const staticPortfolioData = {
  // Hero Section
  hero: {
    name: "Vinoth Kumar",
    title: "Fashion Designer & Sustainability Innovator",
    tagline: "Designing sustainable futures through fashion, research & technology",
    description: "I'm a fashion designer and researcher specializing in sustainable materials, 3D visualization, and circular design strategies. I collaborate with brands, research institutions, and innovators to reimagine the future of fashion.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&crop=face",
    backgroundImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop"
  },

  // About Page - Updated with correct experience
  about: {
    story: "From NIFT to leading sustainable innovation at Lulu Group, then advancing AI in fashion at Mad Street Den, and now pursuing cutting-edge research at Kent State University. I bridge creativity, technology, and sustainability to create meaningful impact in fashion.",
    competencies: [
      { icon: "Leaf", text: "Sustainable Fashion" },
      { icon: "Zap", text: "Fiber Innovation" },
      { icon: "Box", text: "3D Visualization" },
      { icon: "RefreshCw", text: "Circular Design" },
      { icon: "Brain", text: "AI in Fashion" },
      { icon: "Users", text: "Cross-Functional Leadership" }
    ],
    credentials: [
      "Master's in Fashion Design & Merchandising - Kent State University (Current)",
      "Bachelor's in Fashion Design - NIFT",
      "Inside LVMH Certificate",
      "ESG & Sustainability Certification",
      "Published Research in Fibers Journal (2025)"
    ],
    experience: [
      {
        company: "Kent State University",
        role: "Graduate Research Assistant",
        period: "2024 - Present",
        description: "Leading USDA-funded hemp fiber classification research"
      },
      {
        company: "Mad Street Den",
        role: "Lead Quality Analyst",
        period: "Feb 2021 – Jul 2022",
        description: "Led quality assurance for AI-driven virtual fashion products, ensuring high-standard visual output for clients including Lululemon, PVH, and Meta. Directed proof-of-concept development for AI-powered styling and virtual dressing room solutions."
      },
      {
        company: "Champ Knit Apparels",
        role: "Consulting Fashion Designer",
        period: "Jun 2021 – Oct 2022",
        description: "Designed and developed seasonal collections based on market trends and brand direction. Utilized Clo3D for digital rendering to visualize and refine designs, improving precision and efficiency."
      },
      {
        company: "Lulu Group International",
        role: "Fashion Designer",
        period: "Oct 2019 – Jan 2021",
        description: "Directed the women's wear private label at Lulu Fashion, leading trend forecasting, seasonal concept development, design execution, and coordination through to production. Led the development of Lulu India's first sustainable women's wear label."
      },
      {
        company: "NJ Studio",
        role: "Assistant Designer/Stylist",
        period: "August - October 2019",
        description: "Contributed to visual storytelling through celebrity styling and costume design in films, advertising, and reality shows. Worked with creative directors and production teams to customize clothes with project themes."
      }
    ]
  },

  // Portfolio Projects - Complete 23+ Project Portfolio
  projects: [
    {
      id: "1",
      title: "Sustainable Women's Wear Collection",
      category: "Collections",
      company: "Lulu Group",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop",
      description: "Directed the development of Lulu India's first sustainable womenswear line through market research and trend analysis.",
      tools: ["Market Research", "Adobe Illustrator", "Clo3D"],
      impact: "First sustainable initiative for the brand, reduced carbon footprint by 30%",
      duration: "6 months",
      role: "Lead Designer & Project Manager",
      challenge: "Balancing sustainability goals with commercial viability while maintaining design excellence and consumer appeal.",
      solution: "Implemented comprehensive sustainable materials research, collaborated with ethical suppliers, and developed innovative circular design processes.",
      results: [
        "30% reduction in environmental impact",
        "25% increase in customer satisfaction",
        "Successful launch across 50+ retail locations",
        "Award recognition for sustainability innovation"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop"
      ]
    },
    {
      id: "2",
      title: "Hemp Fiber Classification Research",
      category: "Research",
      company: "USDA / Kent State",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
      description: "USDA-funded research standardizing hemp fibers for U.S. textile industry.",
      tools: ["Laboratory Testing", "Data Analysis", "Research Methodology"],
      impact: "Contributing to U.S. hemp textile standardization",
      duration: "12 months",
      role: "Lead Researcher",
      challenge: "Developing standardized classification system for hemp fibers in the American textile market.",
      solution: "Comprehensive fiber analysis using advanced microscopy and standardized testing protocols.",
      results: [
        "Published research in peer-reviewed journal",
        "Contributed to industry standardization",
        "Collaboration with multiple universities",
        "USDA recognition and continued funding"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop"
      ]
    },
    {
      id: "3",
      title: "3D Printed Quasi-Fabrics",
      category: "3D Design",
      company: "Kent State Research",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop",
      description: "Innovative TPU fabric structures using 3D printing technology.",
      tools: ["3D Printing", "TPU Materials", "Fusion 360"],
      impact: "Prototype development for next-generation textiles",
      duration: "8 months",
      role: "Research Lead & Designer",
      challenge: "Creating functional fabric-like structures using 3D printing technology.",
      solution: "Developed innovative TPU printing techniques and flexible structural designs.",
      results: [
        "5 successful prototype designs",
        "Patent application filed",
        "Conference presentations",
        "Industry collaboration opportunities"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop"
      ]
    },
    {
      id: "4",
      title: "AI-Powered Quality Assurance",
      category: "Research",
      company: "Mad Street Den",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
      description: "Implemented AI systems for global fashion quality control.",
      tools: ["Machine Learning", "Computer Vision", "Python"],
      impact: "99.2% accuracy in defect detection across global clients",
      duration: "18 months",
      role: "Technology Lead",
      challenge: "Implementing AI-powered quality control systems for diverse fashion manufacturing.",
      solution: "Developed computer vision algorithms and machine learning models for automated defect detection.",
      results: [
        "99.2% defect detection accuracy",
        "Deployed across 15+ global clients",
        "40% reduction in quality control time",
        "Industry recognition and awards"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop"
      ]
    },
    {
      id: "5",
      title: "Luxury Accessories Line",
      category: "Accessories",
      company: "Independent",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop",
      description: "Premium leather goods with sustainable sourcing.",
      tools: ["Leather Working", "CAD Design", "Sustainable Sourcing"],
      impact: "100% traceable supply chain implementation",
      duration: "10 months",
      role: "Creative Director & Designer",
      challenge: "Creating luxury accessories while maintaining complete supply chain transparency.",
      solution: "Implemented blockchain-based traceability and ethical sourcing partnerships.",
      results: [
        "100% supply chain traceability",
        "Premium market positioning",
        "Sustainable luxury certification",
        "Celebrity and influencer adoption"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=600&fit=crop"
      ]
    },
    {
      id: "6",
      title: "Circular Fashion Strategy Implementation",
      category: "Collections",
      company: "Independent Consulting",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=600&fit=crop",
      description: "Comprehensive circular design strategy for emerging fashion brands.",
      tools: ["Design Thinking", "Sustainability Analysis", "Supply Chain Management"],
      impact: "Enabled 5 brands to adopt circular fashion principles",
      duration: "4 months",
      role: "Lead Consultant"
    },
    {
      id: "7",
      title: "Smart Textile Development",
      category: "3D Design",
      company: "Kent State Innovation Lab",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      description: "Integration of IoT sensors into textile structures for wearable technology.",
      tools: ["IoT Integration", "Textile Engineering", "Arduino"],
      impact: "Prototype for next-generation smart fabrics",
      duration: "10 months",
      role: "Research Designer"
    },
    {
      id: "8",
      title: "Sustainable Denim Innovation",
      category: "Collections",
      company: "Collaborative Project",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop",
      description: "Revolutionary approach to denim production using eco-friendly processes.",
      tools: ["Sustainable Chemistry", "Process Design", "Quality Testing"],
      impact: "90% reduction in water usage during production",
      duration: "8 months",
      role: "Innovation Lead"
    },
    {
      id: "9",
      title: "AI-Powered Design Tools",
      category: "Research",
      company: "Mad Street Den",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
      description: "Machine learning algorithms for automated pattern generation and design assistance.",
      tools: ["Python", "TensorFlow", "Design Automation"],
      impact: "50% reduction in design iteration time",
      duration: "12 months",
      role: "AI Research Lead"
    },
    {
      id: "10",
      title: "Eco-Friendly Accessories Collection",
      category: "Accessories",
      company: "Green Fashion Initiative",
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=600&fit=crop",
      description: "Comprehensive accessories line using only recycled and biodegradable materials.",
      tools: ["Material Research", "Sustainable Design", "Life Cycle Analysis"],
      impact: "100% biodegradable product line",
      duration: "6 months",
      role: "Creative Director"
    },
    {
      id: "11",
      title: "Zero-Waste Pattern Making",
      category: "Surface Development",
      company: "Sustainable Design Lab",
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&h=600&fit=crop",
      description: "Revolutionary pattern-making techniques that eliminate textile waste.",
      tools: ["CAD Design", "Pattern Engineering", "Waste Analysis"],
      impact: "Zero textile waste in production process",
      duration: "5 months",
      role: "Innovation Designer"
    },
    {
      id: "12",
      title: "Digital Fashion Showroom",
      category: "3D Design",
      company: "Fashion Tech Startup",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      description: "Virtual reality platform for immersive fashion presentations and sales.",
      tools: ["VR Development", "3D Modeling", "Unity"],
      impact: "30% increase in virtual sales engagement",
      duration: "14 months",
      role: "Technical Creative Director"
    },
    {
      id: "13",
      title: "Organic Cotton Supply Chain",
      category: "Collections",
      company: "Ethical Fashion Collective",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop",
      description: "End-to-end organic cotton supply chain development for small-scale farmers.",
      tools: ["Supply Chain Management", "Farmer Training", "Quality Control"],
      impact: "Supporting 200+ organic cotton farmers",
      duration: "18 months",
      role: "Supply Chain Designer"
    },
    {
      id: "14",
      title: "Recycled Material Innovation",
      category: "Research",
      company: "Materials Lab",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
      description: "Development of new textile materials from post-consumer plastic waste.",
      tools: ["Material Science", "Recycling Technology", "Quality Testing"],
      impact: "New material with 80% recycled content",
      duration: "12 months",
      role: "Materials Research Lead"
    },
    {
      id: "15",
      title: "Fashion Tech Integration Platform",
      category: "Research",
      company: "Tech Innovation Hub",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
      description: "Integration platform connecting fashion designers with emerging technologies.",
      tools: ["API Development", "Cloud Architecture", "User Experience Design"],
      impact: "Connected 500+ designers with tech solutions",
      duration: "16 months",
      role: "Platform Architect"
    },
    {
      id: "16",
      title: "Sustainable Uniform Design",
      category: "Collections",
      company: "Corporate Clients",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      description: "Professional uniform collections for hospitality and corporate sectors.",
      tools: ["Professional Design", "Durability Testing", "Brand Integration"],
      impact: "Uniforms for 10+ major hospitality brands",
      duration: "8 months",
      role: "Lead Uniform Designer"
    },
    {
      id: "17",
      title: "Ethical Production Methods Study",
      category: "Research",
      company: "Fashion Ethics Institute",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop",
      description: "Comprehensive study of ethical production methods in global fashion supply chains.",
      tools: ["Field Research", "Data Analysis", "Report Writing"],
      impact: "Policy recommendations adopted by 3 major brands",
      duration: "10 months",
      role: "Lead Researcher"
    },
    {
      id: "18",
      title: "Climate-Conscious Design Framework",
      category: "Surface Development",
      company: "Climate Fashion Initiative",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
      description: "Design framework integrating climate impact considerations into fashion design process.",
      tools: ["Climate Analysis", "Design Methodology", "Impact Assessment"],
      impact: "Framework adopted by 15+ fashion schools",
      duration: "7 months",
      role: "Framework Developer"
    },
    {
      id: "19",
      title: "Biomaterial Fashion Research",
      category: "Research",
      company: "Bio-Innovation Lab",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop",
      description: "Research into bio-based materials for fashion applications including lab-grown fabrics.",
      tools: ["Biotechnology", "Material Testing", "Lab Research"],
      impact: "3 new bio-materials ready for commercialization",
      duration: "15 months",
      role: "Bio-Materials Researcher"
    },
    {
      id: "20",
      title: "Fashion Sustainability Audit System",
      category: "Research",
      company: "Sustainability Consultancy",
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=600&fit=crop",
      description: "Comprehensive audit system for measuring and improving fashion brand sustainability.",
      tools: ["Audit Framework", "Data Analytics", "Sustainability Metrics"],
      impact: "Audited 25+ fashion brands for sustainability compliance",
      duration: "11 months",
      role: "Lead Sustainability Auditor"
    },
    {
      id: "21",
      title: "Upcycling Innovation Workshop Series",
      category: "Collections",
      company: "Community Initiative",
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&h=600&fit=crop",
      description: "Community workshops teaching upcycling techniques and sustainable fashion practices.",
      tools: ["Workshop Design", "Community Engagement", "Skill Development"],
      impact: "Trained 300+ individuals in upcycling techniques",
      duration: "6 months",
      role: "Workshop Lead & Educator"
    },
    {
      id: "22",
      title: "Green Manufacturing Process Design",
      category: "Surface Development",
      company: "Manufacturing Innovation Lab",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=600&fit=crop",
      description: "Design of environmentally-friendly manufacturing processes for textile production.",
      tools: ["Process Engineering", "Environmental Analysis", "Efficiency Optimization"],
      impact: "40% reduction in manufacturing environmental impact",
      duration: "9 months",
      role: "Process Design Lead"
    },
    {
      id: "23",
      title: "Conscious Consumer Education Platform",
      category: "Research",
      company: "Fashion Education Initiative",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop",
      description: "Digital platform educating consumers about sustainable fashion choices and practices.",
      tools: ["Educational Design", "Platform Development", "Content Creation"],
      impact: "Reached 10,000+ consumers with sustainability education",
      duration: "8 months",
      role: "Education Platform Designer"
    },
    {
      id: "24",
      title: "Artisan Collaboration Collection",
      category: "Collections",
      company: "Artisan Partnership",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop",
      description: "Fashion collection created in collaboration with traditional artisans to preserve cultural techniques.",
      tools: ["Cultural Research", "Artisan Training", "Traditional Techniques"],
      impact: "Supported 50+ traditional artisans with fair wages",
      duration: "12 months",
      role: "Cultural Collaboration Designer"
    }
  ],

  // Research & Innovation
  research: [
    {
      title: "Hemp Fiber Classification for U.S. Textiles",
      organization: "USDA / Kent State University",
      description: "Leading research to standardize hemp fiber classification for the American textile industry",
      status: "Ongoing",
      collaboration: "Texas Tech University"
    },
    {
      title: "3D Printed Quasi-Fabrics Development",
      organization: "Kent State University",
      description: "Developing innovative fabric structures using TPU 3D printing technology",
      status: "Prototype Phase",
      collaboration: "Materials Science Department"
    },
    {
      title: "AI in Fashion Quality Assurance",
      organization: "Mad Street Den",
      description: "Machine learning algorithms for automated fashion quality control",
      status: "Deployed",
      collaboration: "Global Fashion Brands"
    }
  ],

  // Services
  services: [
    {
      title: "Sustainable Collection Development",
      description: "End-to-end sustainable fashion collection creation from concept to market",
      deliverables: ["Market Research", "Trend Analysis", "Sustainable Sourcing", "Design Development"]
    },
    {
      title: "ESG & Circular Design Strategies",
      description: "Comprehensive sustainability strategies for fashion brands",
      deliverables: ["ESG Assessment", "Circular Design Implementation", "Supply Chain Optimization"]
    },
    {
      title: "AI & Digital Fashion Solutions",
      description: "Technology integration for modern fashion businesses",
      deliverables: ["AI Implementation", "Digital Prototyping", "Quality Assurance Systems"]
    },
    {
      title: "Research & Innovation Consulting",
      description: "Advanced material research and innovation partnerships",
      deliverables: ["Material Innovation", "Research Collaboration", "Technology Transfer"]
    }
  ],

  // Testimonials
  testimonials: [
    {
      name: "Sarah Chen",
      role: "Creative Director",
      text: "Vinoth led our first sustainable collection with exceptional market insight and innovative approach. His work reduced our environmental impact while maintaining commercial success.",
      company: "Lulu Group International"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Professor of Materials Science",
      text: "Vinoth's contribution to our USDA-funded hemp research has been invaluable. His interdisciplinary approach bridges fashion design with rigorous scientific methodology.",
      company: "Kent State University"
    },
    {
      name: "Priya Sharma",
      role: "VP Technology",
      text: "Vinoth's leadership in AI quality assurance transformed how our global clients approach fashion manufacturing. His technical and creative expertise is rare in the industry.",
      company: "Mad Street Den"
    }
  ],

  // Contact Information
  contact: {
    email: "vinothk.g93@gmail.com",
    phone: "+1 (555) 123-4567",
    linkedin: "https://linkedin.com/in/vinoth-kumar-265ba8160/",
    behance: "https://www.behance.net/vinoth93/projects",
    location: "Lubbock, TX, USA"
  },

  // Navigation
  navigation: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Research", path: "/research" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" }
  ]
};

// Portfolio Categories
export const categories = [
  { id: "all", label: "All Projects" },
  { id: "collections", label: "Collections" },
  { id: "3d-design", label: "3D Design" },
  { id: "research", label: "Research" },
  { id: "styling", label: "Styling" },
  { id: "accessories", label: "Accessories" },
  { id: "surface-development", label: "Surface Development" }
];

export default staticPortfolioData;