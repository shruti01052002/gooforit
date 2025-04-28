import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Our Team" 
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary-500 rounded-xl z-0"></div>
              <div className="absolute flex -bottom-10 -right-10 bg-white p-4 rounded-lg shadow-lg z-20">
                <div className="px-4 border-r-2 border-gray-200">
                  <div className="text-3xl font-bold text-primary-600">15+</div>
                  <div className="text-gray-600">Years of Experience</div>
                </div>
                <div className="px-4">
                  <div className="text-3xl font-bold text-primary-600">300+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <SectionTitle 
              title="About GOOFORIT"
              subtitle="We're a team of IT experts passionate about delivering innovative solutions that drive business growth."
            />
            
            <p className="text-gray-600 mb-6">
              Founded in 2010, GOOFORIT has been at the forefront of technological innovation, helping businesses of all sizes navigate the ever-changing digital landscape. Our team comprises industry veterans with expertise across various IT domains.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                'Strategic IT Consulting',
                'Custom Solutions Development',
                'Cybersecurity Expertise',
                'Cloud Transformation',
                '24/7 Support & Maintenance',
                'Digital Transformation',
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            
            <p className="text-gray-700 font-medium">
              Our mission is to empower businesses with technology solutions that drive efficiency, innovation, and growth.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;