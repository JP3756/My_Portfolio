import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { personal, social } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-bg dark:to-dark-card">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium">
            Welcome to my portfolio
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1 
          variants={itemVariants}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
        >
          Hi, I'm{' '}
          <span className="text-gradient">{personal.name}</span>
        </motion.h1>

        {/* Title */}
        <motion.h2 
          variants={itemVariants}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6"
        >
          {personal.title}
        </motion.h2>

        {/* Tagline */}
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10"
        >
          {personal.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-white dark:bg-dark-card text-primary-500 border-2 border-primary-500 rounded-lg font-medium transition-all duration-300 hover:bg-primary-50 dark:hover:bg-dark-bg hover:scale-105"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center space-x-6 mb-16"
        >
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors text-2xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors text-2xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href={social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors text-2xl"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href={social.email}
            className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors text-2xl"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          variants={itemVariants}
          className="inline-block text-gray-500 dark:text-gray-400 animate-bounce"
          aria-label="Scroll to about section"
        >
          <FaChevronDown size={32} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
