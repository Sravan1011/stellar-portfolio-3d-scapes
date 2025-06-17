
import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Brain, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Black Hole Animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Event Horizon */}
        <div className="absolute w-96 h-96 rounded-full bg-gradient-radial from-transparent via-purple-900/20 to-black animate-spin-slow border border-purple-500/30">
          <div className="absolute inset-4 rounded-full bg-gradient-radial from-transparent via-blue-900/30 to-transparent animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}></div>
        </div>
        
        {/* Accretion Disk */}
        <div className="absolute w-[600px] h-[600px] rounded-full border-2 border-orange-500/40 animate-spin opacity-60" style={{ animationDuration: '30s' }}>
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-orange-400 rounded-full -translate-x-1/2 -translate-y-1 animate-pulse"></div>
          <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-yellow-400 rounded-full -translate-x-1/2 translate-y-1 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute left-0 top-1/2 w-1.5 h-1.5 bg-red-400 rounded-full -translate-x-1 -translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute right-0 top-1/2 w-1 h-1 bg-blue-400 rounded-full translate-x-1 -translate-y-1/2 animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>

        {/* Outer Rings */}
        <div className="absolute w-[800px] h-[800px] rounded-full border border-cyan-500/20 animate-spin" style={{ animationDuration: '45s' }}></div>
        <div className="absolute w-[1000px] h-[1000px] rounded-full border border-purple-500/10 animate-spin" style={{ animationDuration: '60s', animationDirection: 'reverse' }}></div>

        {/* Gravitational Lensing Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/50"></div>
        
        {/* Central Black Hole */}
        <div className="absolute w-32 h-32 rounded-full bg-black border-4 border-purple-400/50 shadow-[0_0_50px_rgba(147,51,234,0.5)] animate-pulse">
          <div className="absolute inset-2 rounded-full bg-gradient-radial from-purple-900/50 to-black"></div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-40 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Stellar Background */}
      <div className="absolute inset-0">
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* AI Badge */}
        <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-400/30 backdrop-blur-sm">
          <Brain className="w-5 h-5 text-purple-400" />
          <span className="text-purple-300 font-medium text-sm">AI Engineer & Full Stack Developer</span>
          <Zap className="w-4 h-4 text-blue-400" />
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-fade-in">
          Sravan
        </h1>
        
        {/* Title */}
        <p className="text-2xl md:text-3xl text-gray-300 mb-6 animate-fade-in font-light" style={{ animationDelay: '0.5s' }}>
          Generative AI Architect
        </p>
        
        {/* Description */}
        <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: '1s' }}>
          Building the future with LLMs, Vector Embeddings, and Semantic Search. 
          Transforming complex AI concepts into practical, real-world solutions.
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          {['LLMs', 'Vector DB', 'React', 'Python', 'AI Automation', 'Semantic Search'].map((tech, index) => (
            <span
              key={tech}
              className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full text-sm text-purple-300 border border-purple-400/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${1.3 + index * 0.1}s` }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <a href="#" className="p-4 bg-white/5 backdrop-blur-sm rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 group border border-white/10 hover:border-purple-400/50">
            <Github className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" />
          </a>
          <a href="#" className="p-4 bg-white/5 backdrop-blur-sm rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 group border border-white/10 hover:border-blue-400/50">
            <Linkedin className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
          </a>
          <a href="#" className="p-4 bg-white/5 backdrop-blur-sm rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 group border border-white/10 hover:border-green-400/50">
            <Mail className="w-6 h-6 text-white group-hover:text-green-400 transition-colors" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce animate-fade-in" style={{ animationDelay: '2s' }}>
          <ChevronDown className="w-8 h-8 text-white/60 mx-auto cursor-pointer hover:text-purple-400 transition-colors" />
        </div>
      </div>

      {/* Gravitational Wave Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 border border-purple-500/20 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 border border-blue-500/20 rounded-full animate-ping" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};

export default Hero;
