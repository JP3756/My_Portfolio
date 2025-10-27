import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('all');
  const [displayedProjects, setDisplayedProjects] = useState(projects);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    if (filter === 'all') {
      setDisplayedProjects(projects);
    } else if (filter === 'featured') {
      setDisplayedProjects(projects.filter(p => p.featured));
    }
  }, [filter, projects]);

  const ProjectCard = ({ project, index }) => (
    <div
      className="bg-white dark:bg-dark-card rounded-xl shadow-lg overflow-hidden card-hover"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl">🚀</div>
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex space-x-4 pt-4 border-t border-gray-200 dark:border-dark-border">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
          >
            <FaGithub size={20} />
            <span>Code</span>
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
          >
            <FaExternalLinkAlt size={18} />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="section-padding bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-12" data-aos="fade-up">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
              filter === 'all'
                ? 'bg-primary-500 text-white shadow-lg'
                : 'bg-gray-200 dark:bg-dark-card text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('featured')}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
              filter === 'featured'
                ? 'bg-primary-500 text-white shadow-lg'
                : 'bg-gray-200 dark:bg-dark-card text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            Featured
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12" data-aos="fade-up">
          <a
            href={portfolioData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
