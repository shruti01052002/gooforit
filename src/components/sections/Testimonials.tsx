import React, { useState } from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CTO',
    company: 'TechFusion Inc.',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'GOOFORIT transformed our IT infrastructure and significantly improved our operational efficiency. Their team\'s expertise and dedication to our success was evident throughout the project.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    position: 'Director of Operations',
    company: 'Global Innovations',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'Their cybersecurity services helped us prevent what could have been a catastrophic breach. The team is responsive, knowledgeable, and genuinely cares about our business success.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Chen',
    position: 'CEO',
    company: 'NextGen Solutions',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'Working with GOOFORIT on our digital transformation journey has been a game-changer. They provided strategic guidance and implemented solutions that have driven real business growth.',
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  return (
    <section className="py-20 bg-primary-900 text-white">
      <Container>
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Don't just take our word for it. Hear from our satisfied clients about their experience working with GOOFORIT."
          center
        />
        
        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-primary-800 rounded-xl p-8 md:p-12 shadow-xl">
            <div className="mb-8 flex">
              {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl font-medium mb-8 italic">
              "{testimonials[activeIndex].content}"
            </blockquote>
            
            <div className="flex items-center">
              <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-lg">{testimonials[activeIndex].name}</div>
                <div className="text-primary-200">
                  {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-primary-600 rounded-full opacity-30"></div>
            <div className="absolute -top-5 -left-5 w-20 h-20 bg-secondary-500 rounded-full opacity-20"></div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-primary-700 hover:bg-primary-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeIndex === index ? 'bg-white' : 'bg-primary-600 hover:bg-primary-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-primary-700 hover:bg-primary-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;