import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { about, personal } = portfolioData;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image/Avatar Section */}
          <div data-aos="fade-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-600 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-white dark:bg-dark-card p-8 rounded-2xl shadow-xl">
                <div className="aspect-square bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 rounded-xl overflow-hidden">
                  <img 
                    src={personal.avatar} 
                    alt={personal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div data-aos="fade-left">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {about.description}
              </p>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  What I Bring
                </h3>
                <div className="space-y-3">
                  {about.highlights.map((highlight, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-3"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="#contact"
                  className="inline-block px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Let's Work Together
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
