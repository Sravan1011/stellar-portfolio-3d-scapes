
import React from 'react';
import { MapPin, Calendar, Briefcase, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      type: 'Full-time',
      description: 'Leading development of enterprise-level applications using React, Node.js, and AWS. Mentoring junior developers and architecting scalable solutions.',
      achievements: [
        'Improved application performance by 40%',
        'Led a team of 6 developers',
        'Implemented microservices architecture'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'TypeScript', 'Docker']
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'New York, NY',
      period: '2020 - 2022',
      type: 'Full-time',
      description: 'Developed responsive web applications and mobile-first experiences. Collaborated with design teams to implement pixel-perfect UIs.',
      achievements: [
        'Launched 3 major product features',
        'Reduced bundle size by 35%',
        'Implemented automated testing suite'
      ],
      technologies: ['Vue.js', 'JavaScript', 'SASS', 'Jest', 'Figma']
    },
    {
      title: 'UI/UX Designer & Developer',
      company: 'Creative Agency Pro',
      location: 'Los Angeles, CA',
      period: '2018 - 2020',
      type: 'Full-time',
      description: 'Designed and developed websites for high-profile clients. Created design systems and maintained brand consistency across projects.',
      achievements: [
        'Designed 20+ websites',
        'Created reusable component library',
        'Won Best Design Award 2019'
      ],
      technologies: ['Adobe Creative Suite', 'Sketch', 'HTML/CSS', 'JavaScript', 'WordPress']
    },
    {
      title: 'Junior Web Developer',
      company: 'Digital Innovations',
      location: 'Remote',
      period: '2017 - 2018',
      type: 'Full-time',
      description: 'Built responsive websites and web applications. Learned modern development practices and collaborated with cross-functional teams.',
      achievements: [
        'Completed 15+ client projects',
        'Improved code quality standards',
        'Mentored 2 interns'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-800 via-purple-900 to-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My journey through various roles, building expertise and delivering impactful solutions
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-800 hidden md:block group-hover:scale-150 transition-transform duration-300"></div>
                
                {/* Content card */}
                <div className="md:ml-20 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-[1.02] hover:-rotate-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-blue-400 mb-2">
                        <Briefcase className="w-4 h-4 mr-2" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 text-sm space-y-1 sm:space-y-0 sm:space-x-4">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <Award className="w-4 h-4 mr-2 text-yellow-400" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20 hover:border-blue-400/50 hover:text-blue-400 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
