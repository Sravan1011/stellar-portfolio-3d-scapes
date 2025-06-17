
import React from 'react';
import { ExternalLink, Github, Eye, Brain, Database, Bot, FileSpreadsheet, ListTodo } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'LLM Vibes Radar',
      description: 'Advanced platform tracking and visualizing opinion shifts across language models with real-time analytics and sentiment analysis dashboards.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      technologies: ['React.js', 'Python', 'LLMs', 'Data Visualization', 'Analytics'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      icon: Brain,
      category: 'AI Analytics'
    },
    {
      title: 'PeopleGPT',
      description: 'Semantic AI search engine leveraging vector embeddings for intelligent profile discovery with advanced natural language processing.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      technologies: ['Vector DB', 'Embeddings', 'NLP', 'Search AI', 'Semantic Search'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      icon: Database,
      category: 'AI Search'
    },
    {
      title: 'Excel AI Agent',
      description: 'Intelligent spreadsheet automation system integrating LLMs to streamline data processing and task automation workflows.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      technologies: ['LLM Integration', 'Excel API', 'Automation', 'Data Processing'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      icon: FileSpreadsheet,
      category: 'Productivity AI'
    },
    {
      title: 'AI Task Prioritizer',
      description: 'Smart browser extension using AI to intelligently prioritize and break down user tasks with contextual understanding.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
      technologies: ['Browser Extension', 'Task AI', 'Chrome API', 'Machine Learning'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      icon: ListTodo,
      category: 'Browser AI'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
      {/* Neural network background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Floating AI symbols */}
      <div className="absolute inset-0 pointer-events-none">
        {[Brain, Database, Bot].map((Icon, i) => (
          <Icon
            key={i}
            className="absolute w-8 h-8 text-blue-400/20 animate-float"
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
              animationDelay: `${i * 1}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30">
            <Brain className="w-6 h-6 text-blue-400" />
            <span className="text-blue-300 font-medium">Generative AI Portfolio</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI Innovation Lab
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-6">
            Transforming real-world challenges with cutting-edge AI solutions
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-300">
            <span className="px-3 py-1 bg-blue-500/20 rounded-full border border-blue-400/30">LLMs</span>
            <span className="px-3 py-1 bg-purple-500/20 rounded-full border border-purple-400/30">Vector Embeddings</span>
            <span className="px-3 py-1 bg-pink-500/20 rounded-full border border-pink-400/30">Semantic Search</span>
            <span className="px-3 py-1 bg-cyan-500/20 rounded-full border border-cyan-400/30">AI Automation</span>
          </div>
        </div>

        {/* AI Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-blue-400/20 hover:border-blue-400/40 transition-all duration-700 hover:transform hover:scale-[1.02] ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Holographic effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Project header with icon */}
              <div className="relative p-6 pb-0">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-400/30">
                    <project.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs text-blue-400 font-medium mb-1">{project.category}</div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Project image with overlay */}
              <div className="relative h-48 mx-6 mb-6 rounded-2xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* AI-themed overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Action buttons */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <a
                    href={project.liveUrl}
                    className="p-4 bg-blue-500/20 backdrop-blur-md rounded-full hover:bg-blue-500/30 transition-all duration-300 hover:scale-110 border border-blue-400/30"
                  >
                    <Eye className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-4 bg-purple-500/20 backdrop-blur-md rounded-full hover:bg-purple-500/30 transition-all duration-300 hover:scale-110 border border-purple-400/30"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href={project.liveUrl}
                    className="p-4 bg-pink-500/20 backdrop-blur-md rounded-full hover:bg-pink-500/30 transition-all duration-300 hover:scale-110 border border-pink-400/30"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                </div>

                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white text-xs font-bold border border-cyan-400/50">
                    🚀 Featured AI
                  </div>
                )}
              </div>

              {/* Project content */}
              <div className="px-6 pb-6">
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* AI Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-xs text-blue-300 border border-blue-400/20 hover:border-blue-400/40 hover:bg-blue-500/20 transition-all duration-300"
                      style={{ animationDelay: `${techIndex * 0.1}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Neural connection lines */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* AI Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { label: 'AI Models Used', value: '15+', icon: Brain },
            { label: 'Problems Solved', value: '4', icon: Bot },
            { label: 'Vector Embeddings', value: '1M+', icon: Database },
            { label: 'AI Applications', value: '100%', icon: ListTodo }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center group p-6 bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-2xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-500">
              <div className="flex justify-center mb-3">
                <stat.icon className="w-8 h-8 text-blue-400 group-hover:text-cyan-400 transition-colors duration-300" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 cursor-pointer border border-blue-400/50">
            <Brain className="w-4 h-4" />
            <span>Explore More AI Innovations</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
