import React from 'react';
import { Button } from '@/components/ui/button';
import "@/components/hero.css";


const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-glisten-cream via-glisten-butter to-glisten-yellow py-20" id="background">
      <div className="container mx-auto px-6" id="background2">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-glisten-olive mb-6">
            Expert Hair Stylist in Poole
          </h1>
          <p className="text-xl text-glisten-olive/80 mb-8 leading-relaxed">
            Welcome to Glisten Hair & Aesthetics - your premier destination for hairdressing, 
            aesthetics treatments, and Japanese Head Spa in Poole BH15. Over 15 years of expertise 
            in our purpose-built home salon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://that-time.co.uk/glisten-hair-aesthetics" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-glisten-gold hover:bg-glisten-yellow text-glisten-olive font-semibold px-8 py-3">
              Book Appointment
            </Button></a>
            <Button variant="outline" size="lg" className="border-glisten-olive text-glisten-olive hover:bg-glisten-olive hover:text-glisten-white px-8 py-3">
              View Services
            </Button>
          </div>
          <div className="mt-8 text-glisten-olive/70">
            <p className="font-semibold">📍 12 Oakfield Road, Poole BH15 3BG</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;