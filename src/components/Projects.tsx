
import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, cart management, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      technologies: ['Vue.js', 'Firebase', 'Socket.io', 'Vuetify'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Business intelligence dashboard with machine learning insights, data visualization, and predictive analytics capabilities.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      technologies: ['Python', 'React', 'TensorFlow', 'D3.js', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Mobile Weather App',
      description: 'Cross-platform weather application with location-based forecasts, beautiful animations, and offline capabilities.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
      technologies: ['React Native', 'Redux', 'API Integration', 'AsyncStorage'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Social Media Platform',
      description: 'Full-featured social networking platform with real-time messaging, media sharing, and advanced privacy controls.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      technologies: ['Next.js', 'GraphQL', 'Prisma', 'AWS S3', 'Redis'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Blockchain Voting System',
      description: 'Secure and transparent voting system built on blockchain technology with smart contracts and decentralized architecture.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
      technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'MetaMask'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work spanning web development, mobile apps, and emerging technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay buttons */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.liveUrl}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                  >
                    <Eye className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href={project.liveUrl}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                </div>

                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20 hover:border-blue-400/50 hover:text-blue-400 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
