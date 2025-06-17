
import React, { useState, useEffect } from 'react';
import { Code, Database, Globe, Server, GitBranch, Brain, Zap, Layers, Cpu, Monitor } from 'lucide-react';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Mastery',
      icon: Monitor,
      color: 'from-cyan-400 via-blue-500 to-purple-600',
      glowColor: 'cyan',
      skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
      description: 'Crafting immersive user experiences',
      position: { x: 20, y: 30 },
      size: 'large'
    },
    {
      id: 'backend',
      title: 'Backend Architecture',
      icon: Server,
      color: 'from-green-400 via-emerald-500 to-teal-600',
      glowColor: 'emerald',
      skills: ['Node.js', 'Express.js', 'Python', 'Flask'],
      description: 'Building robust server infrastructure',
      position: { x: 75, y: 25 },
      size: 'large'
    },
    {
      id: 'database',
      title: 'Data Engineering',
      icon: Database,
      color: 'from-orange-400 via-red-500 to-pink-600',
      glowColor: 'orange',
      skills: ['MySQL', 'MongoDB', 'SupaBase', 'Firebase'],
      description: 'Designing scalable data solutions',
      position: { x: 15, y: 70 },
      size: 'medium'
    },
    {
      id: 'tools',
      title: 'Development Tools',
      icon: GitBranch,
      color: 'from-purple-400 via-violet-500 to-indigo-600',
      glowColor: 'purple',
      skills: ['Git', 'GitHub', 'Linux (Debian)'],
      description: 'Streamlining development workflow',
      position: { x: 80, y: 65 },
      size: 'medium'
    },
    {
      id: 'ai',
      title: 'AI & Vision',
      icon: Brain,
      color: 'from-yellow-400 via-amber-500 to-orange-600',
      glowColor: 'yellow',
      skills: ['OpenCV', 'Computer Vision', 'Machine Learning'],
      description: 'Implementing intelligent systems',
      position: { x: 50, y: 45 },
      size: 'medium'
    },
    {
      id: 'core',
      title: 'Core Concepts',
      icon: Cpu,
      color: 'from-rose-400 via-pink-500 to-fuchsia-600',
      glowColor: 'rose',
      skills: ['OOP', 'Data Structures', 'Algorithms', 'System Design'],
      description: 'Foundation of computer science',
      position: { x: 35, y: 80 },
      size: 'small'
    },
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: Code,
      color: 'from-indigo-400 via-blue-500 to-cyan-600',
      glowColor: 'indigo',
      skills: ['Java', 'JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS', 'SQL'],
      description: 'Multilingual code expertise',
      position: { x: 60, y: 15 },
      size: 'large'
    }
  ];

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large': return 'w-32 h-32 md:w-40 md:h-40';
      case 'medium': return 'w-24 h-24 md:w-28 md:h-28';
      case 'small': return 'w-20 h-20 md:w-24 md:h-24';
      default: return 'w-24 h-24 md:w-28 md:h-28';
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden min-h-screen">
      {/* Dynamic background with mouse interaction */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 transition-all duration-1000"
        style={{
          transform: `translate(${(mousePosition.x - 50) * 0.1}px, ${(mousePosition.y - 50) * 0.1}px)`,
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Neural network lines */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full">
          {skillCategories.map((skill, index) => 
            skillCategories.slice(index + 1).map((otherSkill, otherIndex) => (
              <line
                key={`${skill.id}-${otherSkill.id}`}
                x1={`${skill.position.x}%`}
                y1={`${skill.position.y}%`}
                x2={`${otherSkill.position.x}%`}
                y2={`${otherSkill.position.y}%`}
                stroke="url(#gradient)"
                strokeWidth="1"
                className="animate-pulse"
              />
            ))
          )}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills Matrix
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-4">
            Navigate through my technological universe
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Holographic interface */}
        <div className="relative min-h-[800px]">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
              style={{
                left: `${category.position.x}%`,
                top: `${category.position.y}%`,
              }}
              onMouseEnter={() => setSelectedSkill(category.id)}
              onMouseLeave={() => setSelectedSkill(null)}
            >
              {/* Skill orb */}
              <div className={`relative ${getSizeClasses(category.size)} transition-all duration-500 group-hover:scale-110`}>
                {/* Outer glow ring */}
                <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${category.color} opacity-20 animate-pulse`}></div>
                
                {/* Main orb */}
                <div className={`absolute inset-2 rounded-full bg-gradient-to-br ${category.color} shadow-2xl flex items-center justify-center backdrop-blur-sm border border-white/20`}>
                  <category.icon className="w-8 h-8 md:w-12 md:h-12 text-white drop-shadow-lg" />
                </div>

                {/* Rotating ring */}
                <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-spin" style={{ animationDuration: '10s' }}></div>
                
                {/* Pulsing glow effect */}
                <div className={`absolute inset-0 rounded-full bg-${category.glowColor}-400/30 animate-ping`}></div>

                {/* Floating skill tags */}
                {selectedSkill === category.id && (
                  <div className="absolute inset-0">
                    {category.skills.map((skill, index) => (
                      <div
                        key={skill}
                        className="absolute whitespace-nowrap px-3 py-1 bg-black/80 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/20 animate-fade-in shadow-lg"
                        style={{
                          top: `${Math.cos((index * 2 * Math.PI) / category.skills.length) * 80 + 50}%`,
                          left: `${Math.sin((index * 2 * Math.PI) / category.skills.length) * 80 + 50}%`,
                          transform: 'translate(-50%, -50%)',
                          animationDelay: `${index * 0.1}s`,
                        }}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Category info panel */}
              {selectedSkill === category.id && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-black/90 backdrop-blur-lg rounded-2xl p-4 max-w-xs animate-fade-in border border-white/20 shadow-2xl">
                  <h3 className="text-lg font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-gray-300 text-sm">{category.description}</p>
                </div>
              )}
            </div>
          ))}

          {/* Central hologram effect */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="w-48 h-48 rounded-full border border-cyan-400/30 animate-pulse"></div>
            <div className="absolute inset-4 rounded-full border border-purple-400/30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute inset-8 rounded-full border border-pink-400/30 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Interactive hint */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg animate-bounce">
            🎯 Hover over the skill orbs to explore technologies
          </p>
        </div>

        {/* Stats display */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { label: 'Technologies', value: '20+' },
            { label: 'Years Experience', value: '5+' },
            { label: 'Projects Completed', value: '50+' },
            { label: 'Lines of Code', value: '100K+' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
