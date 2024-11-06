import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  demo: JSX.Element;
  subject: string;
}

const Projects: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const projects: Project[] = [
    // Frontend Projects
    
    { id: '1', title: 'Universal Clock', description: 'This is a universal clock project that updates automatically using real-time data, making it easy for users to keep track of different time zones. I used *World Time API* to fetch and display the current time for a selected city.', image: '/images/BackGround.png', demo: <a href='https://uni-clock.vercel.app/' className="text-blue-600 underline">Demo</a>, subject: 'Frontend' },
    { id: '2', title: 'En-Wallet', description: 'A Kotlin-based Android project meant to demonstrate an income and expense tracker designed for modern early-career professionals.', image: '/images/EnWallet.png', demo: <a href='https://appetize.io/app/b_z4yrj2nr32mk563tvzwsodtgma' className="text-blue-600 underline">Demo</a>, subject: 'Frontend' },
    { id: '3', title: 'BMI Calculator', description: 'This is a project created to help users easily determine their Body Mass Index (BMI) by using their weight and height.It classifies one into categories such as underweight, normal weight, overweight, or obese.', image: '/images/BMI Calculator.png', demo: <a href='https://bmi-calculator-pearl-alpha.vercel.app/' className="text-blue-600 underline">Demo</a>, subject: 'Frontend' },

  
    // Design Projects
    { id: '4', title: 'Brand Identity for Kipepeo', description: 'Kipepeo is a fashion platform designed to streamline seamless online shopping. The platform features a sleek website to showcase collections and engage with fashion enthusiasts', image: '/images/KIPEPEO DESIGN.png', demo: <a href='https://www.behance.net/gallery/209750759/Kipepeo-Haute-Couture-Fashion-Website' className="text-blue-600 underline">Demo</a>, subject: 'Design' },
    { id: '5', title: 'Kiraba Mock-up Designs', description: 'I am excited to present my mock-ups for Kiraba, a vibrant personal care brand that embraces creativity and innovation. My goal was to bring to life the essence of Kiraba product range, which includes shower gel, bar soap, bathing soap, powder soap, and handwash', image: '/images/KIBARA Papaya Soap.png', demo: <a href='https://www.behance.net/gallery/209806657/Kiraba-Mock-up-Desigs' className="text-blue-600 underline">Demo</a>, subject: 'Design' },
    { id: '6', title: 'Ubora CBC Designs', description: 'Ubora CBC is an online educational platform designed to enhance interaction and engagement among (CBC) students and teachers in Kenya. ', image: '/images/Desktop - 1 (2).png', demo: <a href='https://www.behance.net/gallery/211783301/Ubora-CBC' className="text-blue-600 underline">Demo</a>, subject: 'Design' },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">My Projects</h2>
        
        {['Frontend','Design'].map((subject) => (
          <div key={subject} className="mb-12">
            <h3 className="text-2xl font-semibold text-center mb-4 dark:text-white">{subject} Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.filter(project => project.subject === subject).map((project) => (
                <motion.div
                  key={project.id}
                  layoutId={project.id}
                  onClick={() => setSelectedId(project.id)}
                  className="bg-gray-100 dark:bg-gray-700 rounded-lg drop-shadow-md overflow-hidden cursor-pointer transition-transform duration-300 transform hover:scale-105"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-6">
                    <h4 className="font-bold text-xl mb-2 dark:text-white">{project.title}</h4>
                    <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                    <p className="text-lime-800 text-xl text-center mt-5 dark:text-gray-300">{project.demo}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        <AnimatePresence>
          {selectedId && (
            <motion.div
              layoutId={selectedId}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              onClick={() => setSelectedId(null)}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-lg w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-2xl font-bold mb-4 dark:text-white">{projects.find(p => p.id === selectedId)?.title}</h2>
                <p className="text-gray-700 dark:text-gray-300">{projects.find(p => p.id === selectedId)?.description}</p>
                <div className="mt-4">{projects.find(p => p.id === selectedId)?.demo}</div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
