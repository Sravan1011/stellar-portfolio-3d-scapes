
import React from 'react';
import { Code, Palette, Smartphone, Database, Cloud, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'SASS'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Research', 'Design Systems'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'PWA', 'Cross-platform'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Jenkins', 'Terraform'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Zap,
      title: 'Tools & Others',
      skills: ['Git', 'Webpack', 'Jest', 'Storybook', 'Analytics', 'Performance'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-purple-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit spanning frontend, backend, design, and emerging technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 hover:-rotate-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                  {category.title}
                </h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="px-3 py-2 bg-white/5 rounded-lg text-gray-300 text-sm border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                      style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
