
import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Brain, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      {/* Central Light Beam Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-purple-400/80 via-purple-300/60 to-transparent transform -translate-x-1/2 blur-sm"></div>
        <div className="absolute top-0 left-1/2 w-2 h-full bg-gradient-to-b from-purple-300/60 via-purple-200/40 to-transparent transform -translate-x-1/2 blur-md"></div>
        <div className="absolute top-0 left-1/2 w-8 h-full bg-gradient-to-b from-purple-400/30 via-purple-300/20 to-transparent transform -translate-x-1/2 blur-xl"></div>
        <div className="absolute top-0 left-1/2 w-16 h-full bg-gradient-to-b from-purple-500/20 via-purple-400/10 to-transparent transform -translate-x-1/2 blur-2xl"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="60" height="60" className="absolute inset-0 w-full h-full">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgb(147 51 234)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Data Points */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* AI Engineer Badge */}
        <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-purple-500/10 rounded-full border border-purple-400/20 backdrop-blur-sm">
          <Brain className="w-5 h-5 text-purple-400" />
          <span className="text-purple-300 font-medium text-sm">AI Engineer & Developer</span>
          <Zap className="w-5 h-5 text-purple-400" />
        </div>

        {/* Name with clean styling */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-300 bg-clip-text text-transparent animate-fade-in">
          Sravan
        </h1>
        
        {/* Professional title */}
        <p className="text-2xl md:text-3xl text-purple-200 mb-6 animate-fade-in font-light" style={{ animationDelay: '0.5s' }}>
          Machine Learning Engineer
        </p>
        
        {/* Clean description */}
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: '1s' }}>
          Building intelligent systems and scalable solutions with cutting-edge AI technologies.
          Passionate about creating impactful machine learning applications.
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          {['Machine Learning', 'Deep Learning', 'Python', 'TensorFlow', 'React', 'Node.js'].map((tech, index) => (
            <span
              key={tech}
              className="px-4 py-2 bg-purple-500/10 rounded-full text-sm text-purple-300 border border-purple-400/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${1.3 + index * 0.1}s` }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <a href="#" className="p-4 bg-purple-500/10 backdrop-blur-sm rounded-full hover:bg-purple-500/20 transition-all duration-300 hover:scale-110 group border border-purple-400/20 hover:border-purple-400/40">
            <Github className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" />
          </a>
          <a href="#" className="p-4 bg-purple-500/10 backdrop-blur-sm rounded-full hover:bg-purple-500/20 transition-all duration-300 hover:scale-110 group border border-purple-400/20 hover:border-purple-400/40">
            <Linkedin className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" />
          </a>
          <a href="#" className="p-4 bg-purple-500/10 backdrop-blur-sm rounded-full hover:bg-purple-500/20 transition-all duration-300 hover:scale-110 group border border-purple-400/20 hover:border-purple-400/40">
            <Mail className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce animate-fade-in" style={{ animationDelay: '2s' }}>
          <ChevronDown className="w-8 h-8 text-white/60 mx-auto cursor-pointer hover:text-purple-400 transition-colors" />
        </div>
      </div>

      {/* Ambient glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 -translate-x-1/2 translate-y-1/2 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default Hero;
