import React, { useState, useEffect } from 'react';
import { Menu, X, Server } from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-primary-600 mr-2">
              <Server size={32} />
            </div>
            <span className="text-2xl font-bold text-gray-900">
              GOOF<span className="text-primary-600">OR</span>IT
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Services', 'About', 'Case Studies', 'Blog', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                {item}
              </a>
            ))}
            <Button>Get Started</Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg animate-fade-in">
            <nav className="flex flex-col space-y-4 px-4">
              {['Services', 'About', 'Case Studies', 'Blog', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button fullWidth>Get Started</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;