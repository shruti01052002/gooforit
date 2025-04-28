import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { Server, Shield, Cloud, Database, Smartphone, Code, LineChart, Settings } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <Card hover className="h-full flex flex-col group">
      <div className="p-4 bg-primary-50 rounded-lg inline-flex mb-6 group-hover:bg-primary-100 transition-colors">
        <div className="text-primary-600">{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 flex-grow">
        {description}
      </p>
      <div className="mt-6">
        <a href="#contact" className="text-primary-600 font-medium inline-flex items-center hover:text-primary-700">
          Learn more <span className="ml-1">→</span>
        </a>
      </div>
    </Card>
  );
};

const services = [
  {
    title: 'Cloud Solutions',
    description: 'Optimize your business with scalable cloud infrastructure, migration services, and managed cloud solutions.',
    icon: <Cloud size={28} />,
  },
  {
    title: 'Cybersecurity',
    description: 'Protect your assets with advanced threat detection, security audits, and comprehensive protection strategies.',
    icon: <Shield size={28} />,
  },
  {
    title: 'IT Infrastructure',
    description: 'Build reliable systems with our network design, server management, and infrastructure optimization.',
    icon: <Server size={28} />,
  },
  {
    title: 'Data Management',
    description: 'Harness your data with database design, big data solutions, and business intelligence tools.',
    icon: <Database size={28} />,
  },
  {
    title: 'Custom Development',
    description: 'Create tailored solutions with our custom software development, API integration, and legacy system modernization.',
    icon: <Code size={28} />,
  },
  {
    title: 'Mobile Solutions',
    description: 'Engage customers with responsive design, cross-platform apps, and mobile strategy consulting.',
    icon: <Smartphone size={28} />,
  },
  {
    title: 'Business Intelligence',
    description: 'Make data-driven decisions with analytics platforms, performance dashboards, and reporting tools.',
    icon: <LineChart size={28} />,
  },
  {
    title: 'Managed IT Services',
    description: '24/7 monitoring, helpdesk support, and proactive IT management to keep your systems running smoothly.',
    icon: <Settings size={28} />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <Container>
        <SectionTitle
          title="Our Premium IT Services"
          subtitle="From strategic IT consulting to end-to-end implementation, we provide comprehensive services to drive your digital transformation."
          center
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;