
import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 border border-purple-400/30 rotate-45 animate-spin" 
             style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-bounce" 
             style={{ animationDelay: '1s', animationDuration: '3s' }} />
        <div className="absolute top-1/2 left-20 w-12 h-12 border-2 border-cyan-400/40 animate-pulse" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8 transform hover:scale-105 transition-transform duration-500">
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
              JD
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-ping opacity-20"></div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-fade-in">
          John Developer
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          Full Stack Developer & UI/UX Designer
        </p>
        
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '1s' }}>
          Crafting digital experiences that bridge creativity and functionality in the vast universe of code
        </p>

        <div className="flex justify-center space-x-6 mb-12 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <a href="#" className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 group">
            <Github className="w-6 h-6 text-white group-hover:text-blue-400" />
          </a>
          <a href="#" className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 group">
            <Linkedin className="w-6 h-6 text-white group-hover:text-blue-400" />
          </a>
          <a href="#" className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 group">
            <Mail className="w-6 h-6 text-white group-hover:text-blue-400" />
          </a>
        </div>

        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60 mx-auto cursor-pointer hover:text-white transition-colors" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
