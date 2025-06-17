
import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and</span>
            <Code className="w-4 h-4 text-blue-500" />
            <span>by John Developer</span>
          </div>
          
          <div className="text-gray-400 text-sm">
            © 2024 Portfolio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
