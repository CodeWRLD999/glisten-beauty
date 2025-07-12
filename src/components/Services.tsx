import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      title: 'Ladies Hairdressing',
      description: 'Comprehensive hairdressing services for women',
      features: ['Colours', 'Highlights', 'Cuts', 'Keratin straightening', 'Perms']
    },
    {
      title: 'Japanese Head Spa',
      description: 'A relaxing and intensive scalp and hair treatment',
      features: ['Massage', 'Scalp scrub', 'Deep hair cleanse', 'Intensive hair conditioning'],
      featured: true
    },
    {
      title: 'Men\'s Hair Replacement',
      description: 'Non-invasive alternative to hair transplants',
      features: ['Full consultation', 'Colour matching', 'Fitting', 'Maintenance', 'Aftercare'],
      featured: true
    },
    {
      title: 'Hair Extensions',
      description: 'Fitting and maintenance of various hair extension types',
      features: ['Tape extensions', 'Nano extensions', 'Weaves']
    },
    {
      title: 'Aesthetics Treatments',
      description: 'Advanced aesthetic treatments for facial and skin enhancement',
      features: ['Lip filler', 'Facial fillers', 'Anti-wrinkle treatment', 'Lemonbottle fat dissolving', 'Vitamin B12 injections']
    }
  ];

  return (
    <section id="services" className="py-20 bg-glisten-blue/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-glisten-olive mb-4">
            Aesthetics Treatments in Poole BH15
          </h2>
          <p className="text-xl text-glisten-olive/70 max-w-3xl mx-auto">
            Discover our comprehensive range of professional hair and beauty services, 
            delivered with over 15 years of expertise in our purpose-built salon.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;