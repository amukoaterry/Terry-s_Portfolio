import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

interface NavbarProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, setTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save theme in localStorage
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg dark:bg-gray-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            Mitchell
          </h2>

          <button
            className="block md:hidden p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6 text-gray-800 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>

          {/* Menu Items */}
          <div
            className={`${
              isMenuOpen ? 'flex' : 'hidden'
            } md:flex flex-col md:flex-row items-center md:space-x-8 absolute md:static top-16 left-0 right-0 bg-white dark:bg-gray-800 md:bg-transparent p-4 md:p-0 transition-all duration-300`}
          >
            <Link
              href="#home"
              className="text-gray-900 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-4 py-2"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-gray-900 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-4 py-2"
              onClick={() => setIsMenuOpen(false)} 
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-gray-900 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-4 py-2"
              onClick={() => setIsMenuOpen(false)} 
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-gray-900 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-4 py-2"
              onClick={() => setIsMenuOpen(false)} 
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-gray-900 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-4 py-2"
              onClick={() => setIsMenuOpen(false)} 
            >
              Contact
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-transparent"
            >
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5 text-yellow-500" />
              ) : (
                <MoonIcon className="h-5 w-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
