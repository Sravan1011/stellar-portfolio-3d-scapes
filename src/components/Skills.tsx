
import React, { useState, useEffect } from 'react';
import { Code, Database, Globe, Server, GitBranch, Brain } from 'lucide-react';

const Skills = () => {
  const [hoveredPlanet, setHoveredPlanet] = useState<string | null>(null);

  const skillPlanets = [
    {
      id: 'languages',
      name: 'Programming Languages',
      icon: Code,
      color: 'from-orange-500 to-red-500',
      size: 'w-20 h-20',
      orbitRadius: '200px',
      animationDuration: '20s',
      skills: ['Java', 'JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS', 'SQL'],
      position: 0
    },
    {
      id: 'frameworks',
      name: 'Frameworks & Libraries',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      size: 'w-16 h-16',
      orbitRadius: '160px',
      animationDuration: '15s',
      skills: ['Next.js', 'React.js', 'Flask', 'OpenCV'],
      position: 1
    },
    {
      id: 'backend',
      name: 'Backend Development',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      size: 'w-14 h-14',
      orbitRadius: '120px',
      animationDuration: '12s',
      skills: ['Node.js', 'Express.js'],
      position: 2
    },
    {
      id: 'databases',
      name: 'Databases',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      size: 'w-12 h-12',
      orbitRadius: '280px',
      animationDuration: '25s',
      skills: ['MySQL', 'MongoDB', 'SupaBase', 'Firebase'],
      position: 3
    },
    {
      id: 'version-control',
      name: 'Version Control',
      icon: GitBranch,
      color: 'from-indigo-500 to-blue-500',
      size: 'w-10 h-10',
      orbitRadius: '240px',
      animationDuration: '18s',
      skills: ['Git', 'GitHub'],
      position: 4
    },
    {
      id: 'cs-concepts',
      name: 'Computer Science',
      icon: Brain,
      color: 'from-yellow-500 to-orange-500',
      size: 'w-18 h-18',
      orbitRadius: '320px',
      animationDuration: '30s',
      skills: ['OOP', 'Data Structures', 'Algorithms', 'Linux (Debian)'],
      position: 5
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-black relative overflow-hidden min-h-screen">
      {/* Starfield background */}
      <div className="absolute inset-0">
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Nebula effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Full Stack Solar System
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Navigate through my technology universe where each skill orbits in perfect harmony
          </p>
        </div>

        {/* Solar System Container */}
        <div className="relative flex items-center justify-center min-h-[800px]">
          {/* Central Sun - Full Stack Developer */}
          <div className="absolute z-20 w-32 h-32 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
            <div className="text-center">
              <div className="text-lg font-bold text-white mb-1">Full Stack</div>
              <div className="text-sm text-white">Developer</div>
            </div>
            {/* Sun rays */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 animate-ping opacity-20"></div>
          </div>

          {/* Orbital paths */}
          {skillPlanets.map((planet) => (
            <div
              key={planet.id}
              className="absolute border border-white/10 rounded-full"
              style={{
                width: `calc(${planet.orbitRadius} * 2)`,
                height: `calc(${planet.orbitRadius} * 2)`,
              }}
            />
          ))}

          {/* Planets */}
          {skillPlanets.map((planet) => (
            <div
              key={planet.id}
              className="absolute animate-spin"
              style={{
                width: `calc(${planet.orbitRadius} * 2)`,
                height: `calc(${planet.orbitRadius} * 2)`,
                animationDuration: planet.animationDuration,
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite',
              }}
            >
              {/* Planet */}
              <div
                className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${planet.size} bg-gradient-to-br ${planet.color} rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-125 shadow-lg`}
                onMouseEnter={() => setHoveredPlanet(planet.id)}
                onMouseLeave={() => setHoveredPlanet(null)}
              >
                <planet.icon className="w-6 h-6 text-white" />
                
                {/* Planet glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${planet.color} rounded-full animate-ping opacity-30`}></div>
              </div>

              {/* Skill moons orbiting each planet */}
              {hoveredPlanet === planet.id && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {planet.skills.map((skill, index) => (
                    <div
                      key={skill}
                      className="absolute animate-spin bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-800 shadow-lg"
                      style={{
                        top: `${Math.cos((index * 2 * Math.PI) / planet.skills.length) * 60 - 10}px`,
                        left: `${Math.sin((index * 2 * Math.PI) / planet.skills.length) * 60 - 20}px`,
                        animationDuration: '3s',
                        animationDirection: 'reverse',
                      }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Planet info panel */}
          {hoveredPlanet && (
            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-xs animate-fade-in">
              {(() => {
                const planet = skillPlanets.find(p => p.id === hoveredPlanet);
                return planet ? (
                  <>
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                      <planet.icon className="w-6 h-6 mr-2" />
                      {planet.name}
                    </h3>
                    <div className="space-y-2">
                      {planet.skills.map((skill) => (
                        <div key={skill} className="px-3 py-1 bg-white/20 rounded-full text-sm text-gray-200">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </>
                ) : null;
              })()}
            </div>
          )}

          {/* Asteroid belt */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-gray-400 rounded-full animate-pulse"
                style={{
                  left: `${30 + Math.random() * 40}%`,
                  top: `${30 + Math.random() * 40}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Navigation hint */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm animate-bounce">
            Hover over planets to explore their satellite technologies
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
