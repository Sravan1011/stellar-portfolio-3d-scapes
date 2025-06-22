import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Brain, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-800">
      {/* Neural Network Background */}
      <div className="absolute inset-0">
        {/* Neural Network Nodes */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Data Processing Streams */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40"
              style={{
                left: '-100px',
                top: `${10 + i * 12}%`,
                width: '120%',
                transform: `rotate(${-30 + i * 7}deg)`,
                animation: `slide-data 4s linear infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        {/* Central AI Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-64 h-64 rounded-full border-2 border-purple-400/30 animate-spin-slow">
            {/* Inner processing rings */}
            <div className="absolute inset-8 rounded-full border border-blue-400/40 animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
              <div className="absolute inset-4 rounded-full border border-cyan-400/30 animate-spin" style={{ animationDuration: '15s' }}>
                <div className="absolute inset-6 rounded-full bg-gradient-radial from-purple-500/20 via-blue-500/10 to-transparent">
                  <div className="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse shadow-[0_0_30px_rgba(147,51,234,0.6)]">
                    <Brain className="w-4 h-4 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Flow Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-70"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `flow-data 6s linear infinite`,
                animationDelay: `${Math.random() * 6}s`,
              }}
            />
          ))}
        </div>

        {/* ML Algorithm Visualization */}
        <div className="absolute top-20 right-20 opacity-30">
          <div className="relative w-32 h-32">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-orange-400 rounded-full"
                style={{
                  left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 8)}%`,
                  top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 8)}%`,
                  animation: `pulse 2s ease-in-out infinite`,
                  animationDelay: `${i * 0.25}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Neural Connections */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {[...Array(20)].map((_, i) => (
            <line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="url(#neural-gradient)"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDelay: `${Math.random() * 3}s` }}
            />
          ))}
          <defs>
            <linearGradient id="neural-gradient">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating ML Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['AI', 'ML', 'DL', 'NLP', 'CV', 'RL'].map((tech, i) => (
          <div
            key={tech}
            className="absolute text-purple-400/20 font-bold text-lg animate-float"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 2) * 60}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            {tech}
          </div>
        ))}
      </div>

      {/* Stellar Background */}
      <div className="absolute inset-0">
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-white/80 rounded-full animate-twinkle"
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

      {/* ML Processing Waves */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 border border-blue-500/20 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 border border-purple-500/20 rounded-full animate-ping" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};

export default Hero;
