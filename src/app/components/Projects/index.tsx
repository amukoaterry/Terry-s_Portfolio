
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  demo:JSX.Element;
}

const Projects: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const projects: Project[] = [
    { id: '1', title:'Universal Clock', description: 'This is a universal clock project that updates automatically using real-time data,making it easy for users to keep track of different time zones.I used *World Time API* to Fetch and display the current time for a selected city ', image: '/images/BackGround.png', demo:<a href='https://uni-clock.vercel.app/'>demo</a>},
    { id: '2', title: 'Kipepeo Fashion Website', description: 'Kipepeo is a fashion platform designed to streamline seamless online shopping.The platform features a sleek website to showcase collections and engage with fashion enthusiasts.', image: '/images/KIPEPEO DESIGN .png', demo:<a href='https://www.behance.net/gallery/209750759/Kipepeo-Haute-Couture-Fashion-Website'>demo</a> },
    { id: '3', title: 'En-Wallet', description: 'A Kotlin based android project meant to demostrate income and expense tracker designed for modern early-career professionals', image: '/images/en_wallet.jpeg', demo:<a href='https://appetize.io/app/b_z4yrj2nr32mk563tvzwsodtgma'>demo</a> },
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={project.id}
              onClick={() => setSelectedId(project.id)}
              className="bg-gray-100 dark:bg-gray-700 rounded-lg drop-shadow-[3px_3px_6px_rgba(0,0,0,0.5)] overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.03 }}
            >
              <Image
               src={project.image}
                alt={project.title} 
                width={500}
                height={500}
                className="w-full h-auto object-cover"
                 />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                <p className="text-lime-800 text-xl text-center mt-5 dark:text-gray-300">{project.demo}</p>
              </div>
            </motion.div>
          ))}
        </div>

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
                <p className="text-gray-700 dark:text-gray-300 mb-4">{projects.find(p => p.id === selectedId)?.description}</p>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() => setSelectedId(null)}
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects