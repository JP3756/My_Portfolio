import React, { useEffect } from 'react';
import AOS from 'aos';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const SkillBar = ({ skill, index }) => (
    <div className="mb-6" data-aos="fade-up" data-aos-delay={index * 50}>
      <div className="flex justify-between mb-2">
        <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
        <span className="text-primary-500 font-semibold">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-dark-border rounded-full h-3 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  const SkillCard = ({ skill, index }) => (
    <div
      className="bg-white dark:bg-dark-card p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 card-hover text-center"
      data-aos="zoom-in"
      data-aos-delay={index * 100}
    >
      <div className="text-2xl mb-2">⚡</div>
      <p className="font-medium text-gray-700 dark:text-gray-300">{skill}</p>
    </div>
  );

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-dark-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
        </div>

        <div className="space-y-16">
          {/* Programming Languages */}
          <div data-aos="fade-up">
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
              Programming Languages
            </h3>
            <div className="max-w-4xl mx-auto">
              {skills.languages.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div data-aos="fade-up">
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
              Frameworks & Libraries
            </h3>
            <div className="max-w-4xl mx-auto">
              {skills.frameworks.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Tools & Platforms */}
          <div data-aos="fade-up">
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
              Tools & Platforms
            </h3>
            <div className="max-w-4xl mx-auto">
              {skills.tools.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div data-aos="fade-up">
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
              Professional Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {skills.soft.map((skill, index) => (
                <SkillCard key={skill} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
