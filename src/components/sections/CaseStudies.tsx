import React, { useState } from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  category: string;
  image: string;
  description: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'Cloud Migration for Finance Firm',
    client: 'Global Finance Inc.',
    category: 'Cloud Solutions',
    image: 'https://images.pexels.com/photos/7876708/pexels-photo-7876708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Migrated legacy systems to AWS cloud infrastructure, reducing operational costs by 40% and improving system response time by 60%.',
  },
  {
    id: 2,
    title: 'Cybersecurity Overhaul',
    client: 'SecureTech Corp',
    category: 'Cybersecurity',
    image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Implemented comprehensive security protocols and monitoring systems, preventing potential data breaches and ensuring regulatory compliance.',
  },
  {
    id: 3,
    title: 'Custom ERP Implementation',
    client: 'Manufacturing Leaders',
    category: 'Custom Development',
    image: 'https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Developed and deployed a tailor-made ERP solution, streamlining operations and increasing productivity across all departments by 35%.',
  },
  {
    id: 4,
    title: 'Data Analytics Platform',
    client: 'Retail Giants',
    category: 'Business Intelligence',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Built a comprehensive data analytics platform, enabling data-driven decision making and increasing sales by identifying key market trends.',
  },
];

const CaseStudies: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', ...new Set(caseStudies.map(study => study.category))];
  
  const filteredStudies = activeFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter);

  return (
    <section id="case-studies" className="py-20 bg-white">
      <Container>
        <SectionTitle
          title="Our Success Stories"
          subtitle="Explore how we've helped our clients overcome challenges and achieve their business goals through innovative IT solutions."
          center
        />
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === category 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study) => (
            <Card key={study.id} className="overflow-hidden" padding="none" hover>
              <div className="aspect-video overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-primary-600 font-medium mb-2">{study.category}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Client: {study.client}</span>
                  <a href="#" className="text-primary-600 font-medium hover:text-primary-700">
                    View Details →
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline">View All Case Studies</Button>
        </div>
      </Container>
    </section>
  );
};

export default CaseStudies;