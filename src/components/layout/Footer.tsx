import React from 'react';
import Container from '../ui/Container';
import { Server, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <div className="text-primary-500 mr-2">
                <Server size={28} />
              </div>
              <span className="text-xl font-bold">
                GOOF<span className="text-primary-500">OR</span>IT
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering businesses with innovative IT solutions to drive growth, efficiency, and digital transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              {['Cloud Solutions', 'Cybersecurity', 'IT Infrastructure', 'Data Management', 'Custom Development'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ArrowRight size={14} className="mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Our Team', 'Case Studies', 'Blog', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ArrowRight size={14} className="mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="bg-primary-600 hover:bg-primary-700 rounded-r-lg px-4 transition-colors">
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center md:flex md:justify-between md:text-left">
          <div className="text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} GOOFORIT. All rights reserved.
          </div>
          <div className="text-gray-500 flex justify-center md:justify-end space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;