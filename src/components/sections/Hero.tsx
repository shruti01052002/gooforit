import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden relative bg-gradient-to-br from-gray-50 to-gray-100">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 z-0 opacity-70">
        <div className="absolute top-20 left-1/4 w-40 h-40 bg-primary-200 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-60 h-60 bg-secondary-200 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-accent-200 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <Container className="relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div>
              <div className="inline-block bg-primary-100 text-primary-800 rounded-full px-4 py-2 text-sm font-medium mb-4">
                #1 IT Service Provider
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                Transform Your Business With <span className="text-primary-600">Expert IT Solutions</span>
              </h1>
            </div>
            
            <p className="text-xl text-gray-600 max-w-lg">
              We deliver innovative IT services tailored to your business needs. From cloud solutions to cybersecurity, we've got you covered.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                Get Started
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
            
            <div className="pt-4">
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                {['24/7 Support', 'Flexible Plans', 'Expert Team'].map((item) => (
                  <div key={item} className="flex items-center">
                    <CheckCircle className="text-primary-600 mr-2" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* 3D Hero Image */}
          <div className="relative animate-fade-in transition duration-1000">
            <div className="relative z-10 transform transition hover:rotate-3 hover:scale-105 duration-500">
              <img
                src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="IT Services"
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-xl bg-secondary-400 -z-10 transform rotate-3"></div>
            <div className="absolute -bottom-8 -right-8 w-full h-full rounded-xl bg-primary-600 -z-20 transform rotate-6"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;