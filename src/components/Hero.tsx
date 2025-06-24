
import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Brain, Zap, Leaf, TreePine } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900">
      {/* 3D Forest Background */}
      <div className="absolute inset-0">
        {/* Floating 3D Trees */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `scale(${0.5 + Math.random() * 1.5}) rotateY(${Math.random() * 360}deg)`,
                zIndex: Math.floor(Math.random() * 10),
              }}
            >
              <TreePine 
                className="w-8 h-8 text-emerald-400/30 animate-float"
                style={{
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                  filter: `blur(${Math.random() * 2}px)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Neural Network Vines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {[...Array(30)].map((_, i) => (
            <path
              key={i}
              d={`M${Math.random() * 100},${Math.random() * 100} Q${Math.random() * 100},${Math.random() * 100} ${Math.random() * 100},${Math.random() * 100}`}
              stroke="url(#vine-gradient)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: `${Math.random() * 3}s` }}
            />
          ))}
          <defs>
            <linearGradient id="vine-gradient">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>

        {/* 3D Floating Data Leaves */}
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float-leaf"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 6}s`,
              }}
            >
              <Leaf 
                className="w-4 h-4 text-emerald-300/60 transform rotate-12"
                style={{
                  transform: `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random() * 1})`,
                }}
              />
            </div>
          ))}
        </div>

        {/* ML-Nature Fusion Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-80 h-80">
            {/* Outer organic ring */}
            <div className="absolute inset-0 rounded-full border-2 border-emerald-400/30 animate-spin-slow">
              {/* Leaf nodes around the circle */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-6 h-6"
                  style={{
                    left: `${50 + 45 * Math.cos((i * Math.PI * 2) / 12)}%`,
                    top: `${50 + 45 * Math.sin((i * Math.PI * 2) / 12)}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <Leaf className="w-6 h-6 text-emerald-400 animate-pulse" />
                </div>
              ))}
            </div>
            
            {/* Inner tech ring */}
            <div className="absolute inset-12 rounded-full border border-blue-400/40 animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
              <div className="absolute inset-8 rounded-full border border-purple-400/30 animate-spin" style={{ animationDuration: '15s' }}>
                <div className="absolute inset-6 rounded-full bg-gradient-radial from-emerald-500/20 via-blue-500/10 to-transparent">
                  <div className="absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full animate-pulse shadow-[0_0_50px_rgba(16,185,129,0.8)]">
                    <Brain className="w-8 h-8 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Organic Data Streams */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-40 animate-flow-organic"
              style={{
                left: '-100px',
                top: `${10 + i * 8}%`,
                width: '120%',
                transform: `rotate(${-20 + i * 5}deg)`,
                animationDelay: `${i * 0.7}s`,
                borderRadius: '50px',
              }}
            />
          ))}
        </div>

        {/* Fireflies / Data Points */}
        <div className="absolute inset-0">
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-yellow-300 to-emerald-300 rounded-full opacity-80 animate-firefly"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                boxShadow: '0 0 10px rgba(252, 211, 77, 0.8)',
              }}
            />
          ))}
        </div>

        {/* Mountain Silhouettes with Data Peaks */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 opacity-30">
          <svg viewBox="0 0 1200 300" className="w-full h-full">
            <path
              d="M0,300 L0,180 Q100,120 200,140 T400,100 T600,80 T800,120 T1000,90 T1200,110 L1200,300 Z"
              fill="url(#mountain-gradient)"
              className="animate-pulse"
            />
            <defs>
              <linearGradient id="mountain-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#065f46" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#064e3b" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Floating Nature-Tech Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['AI', 'ML', 'DL', '🌿', '🌱', '🍃'].map((element, i) => (
          <div
            key={element}
            className="absolute text-emerald-400/40 font-bold text-2xl animate-float-organic"
            style={{
              left: `${15 + i * 14}%`,
              top: `${25 + (i % 2) * 50}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          >
            {element}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Nature-AI Badge */}
        <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 rounded-full border border-emerald-400/30 backdrop-blur-sm">
          <Leaf className="w-5 h-5 text-emerald-400" />
          <span className="text-emerald-300 font-medium text-sm">Nature-Inspired AI Engineer</span>
          <Brain className="w-5 h-5 text-blue-400" />
        </div>

        {/* Name with organic styling */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-emerald-300 via-teal-200 to-blue-300 bg-clip-text text-transparent animate-fade-in">
          Sravan
        </h1>
        
        {/* Bio-inspired title */}
        <p className="text-2xl md:text-3xl text-emerald-200 mb-6 animate-fade-in font-light" style={{ animationDelay: '0.5s' }}>
          Biomimetic AI Architect
        </p>
        
        {/* Nature-tech description */}
        <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: '1s' }}>
          Merging the wisdom of nature with the power of artificial intelligence. 
          Creating sustainable, organic solutions inspired by natural ecosystems.
        </p>

        {/* Eco-tech stack */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          {['Neural Networks', 'Biomimetics', 'Green AI', 'Eco-Systems', 'Organic Computing', 'Nature-inspired ML'].map((tech, index) => (
            <span
              key={tech}
              className="px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full text-sm text-emerald-300 border border-emerald-400/30 backdrop-blur-sm hover:border-emerald-400/50 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${1.3 + index * 0.1}s` }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Social Links with nature theme */}
        <div className="flex justify-center space-x-6 mb-12 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <a href="#" className="p-4 bg-emerald-500/10 backdrop-blur-sm rounded-full hover:bg-emerald-500/20 transition-all duration-300 hover:scale-110 group border border-emerald-400/20 hover:border-emerald-400/50">
            <Github className="w-6 h-6 text-white group-hover:text-emerald-400 transition-colors" />
          </a>
          <a href="#" className="p-4 bg-blue-500/10 backdrop-blur-sm rounded-full hover:bg-blue-500/20 transition-all duration-300 hover:scale-110 group border border-blue-400/20 hover:border-blue-400/50">
            <Linkedin className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
          </a>
          <a href="#" className="p-4 bg-teal-500/10 backdrop-blur-sm rounded-full hover:bg-teal-500/20 transition-all duration-300 hover:scale-110 group border border-teal-400/20 hover:border-teal-400/50">
            <Mail className="w-6 h-6 text-white group-hover:text-teal-400 transition-colors" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce animate-fade-in" style={{ animationDelay: '2s' }}>
          <ChevronDown className="w-8 h-8 text-white/60 mx-auto cursor-pointer hover:text-emerald-400 transition-colors" />
        </div>
      </div>

      {/* Organic processing waves */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 border border-emerald-500/20 rounded-full animate-ping" style={{ animationDuration: '6s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 border border-blue-500/20 rounded-full animate-ping" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default Hero;
