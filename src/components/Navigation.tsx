import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-glisten-white shadow-lg border-b border-glisten-blue">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-glisten-olive">
            Glisten
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-glisten-olive hover:text-glisten-gold transition-colors">
              Home
            </a>
            <a href="/#services" className="text-glisten-olive hover:text-glisten-gold transition-colors">
              Services
            </a>
            <a href="/#about" className="text-glisten-olive hover:text-glisten-gold transition-colors">
              About
            </a>
            <a href="/gallery" className="text-glisten-olive hover:text-glisten-gold transition-colors">
              Gallery
            </a>
            <a href="/#contact" className="text-glisten-olive hover:text-glisten-gold transition-colors">
              Contact
            </a>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-glisten-olive focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          {/* Book Now Button (Desktop) */}
          <div className="hidden md:block">
            <a href="https://that-time.co.uk/glisten-hair-aesthetics" target="_blank" rel="noopener noreferrer">
            <Button className="bg-glisten-gold hover:bg-glisten-yellow text-glisten-olive font-semibold">
              Book Now
            </Button></a>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}
        >
          <div className="flex flex-col space-y-4">
            <a
              href="/"
              className="text-glisten-olive hover:text-glisten-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="/#services"
              className="text-glisten-olive hover:text-glisten-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="/#about"
              className="text-glisten-olive hover:text-glisten-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="/gallery"
              className="text-glisten-olive hover:text-glisten-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </a>
            <a
              href="/#contact"
              className="text-glisten-olive hover:text-glisten-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <Button
              className="bg-glisten-gold hover:bg-glisten-yellow text-glisten-olive font-semibold w-full"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;