import React from 'react';
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AppLayout from "@/components/AppLayout";
import Navigation from '@/components/Navigation.tsx';
import Banner from '@/components/Banner.tsx';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const galleryImages = [
    {
      category: "Hair",
      images: [
        {
          id: 1,
          type: "image",
          src: "/assets/hairdressing.jpg",
          alt: "Professional hair styling at Glisten Hair & Aesthetics in Poole",
          caption: "Precision cuts and vibrant colors tailored to you at our Poole salon.",
        },
      ],
    },
    {
      category: "Aesthetics",
      images: [
        {
          id: 2,
          type: "image",
          src: "/assets/cosmetic.jpg",
          alt: "Aesthetic treatment results at Glisten Hair & Aesthetics",
          caption: "Advanced facial fillers and anti-wrinkle treatments for a radiant glow.",
        },
        {
          id: 3,
          type: "image",
          src: "/assets/cosmetic2.jpg",
          alt: "Facial aesthetics at Glisten Hair & Aesthetics in Poole",
          caption: "Say goodbye to wrinkles with our expert anti-wrinkle injections, delivering smooth, youthful skin at our Poole salon with over 15 years of aesthetic expertise",
        },
        {
          id: 4,
          type: "image",
          src: "/assets/cosmetic3.jpg",
          alt: "Facial aesthetics at Glisten Hair & Aesthetics in Poole",
          caption: "Enhance your smile with our expertly crafted lip fillers, designed for natural beauty and confidence at our Poole salon.",
        },
         {
          id: 5,
          type: "image",
          src: "/assets/cosmetic4.jpg",
          alt: "Facial aesthetics at Glisten Hair & Aesthetics in Poole",
          caption: "Achieve flawless, glowing skin with our expert dermaplaning treatments at our Poole salon, designed to refresh and rejuvenate.",
        },
      ],
    },
    {
      category: "Spa",
      images: [
        {
          id: 6,
          type: "image",
          src: "/assets/japanese2.jpg",
          alt: "Relaxing Japanese Head Spa in Poole",
          caption: "Discover the soothing escape of our Japanese Head Spa, a rejuvenating treat in Poole BH15.",
        },
        {
          id: 7,
          type: "image",
          src: "/assets/japanesespa.jpg",
          alt: "Relaxing Japanese Head Spa in Poole",
          caption: "Indulge in the calming bliss of our Japanese Head Spa, available at our Poole BH15 salon.",
        },
        {
          id: 8,
          type: "video",
          src: "/assets/headspa1.mp4",
          alt: "Japanese Head Spa treatment video at Glisten Hair & Aesthetics in Poole",
          caption: "Experience the relaxation of our Japanese Head Spa in this exclusive video.",
        },
      ],
    },
    {
      category: "Extensions",
      images: [
        {
          id: 9,
          type: "image",
          src: "/assets/extension.jpg",
          alt: "Hair extensions fitting at Glisten Hair & Aesthetics",
          caption: "Enhance your elegance with expertly fitted hair extensions for a glamorous finish.",
        },
        {
          id: 10,
          type: "image",
          src: "/assets/extension2.jpg",
          alt: "Natural hair extensions at Glisten Hair & Aesthetics in Poole",
          caption: "Transform your style with seamless hair extensions for stunning length and volume.",
        },
        {
          id: 11,
          type: "image",
          src: "/assets/extension3.jpg",
          alt: "Natural hair extensions at Glisten Hair & Aesthetics in Poole",
          caption: "Flawless extensions for a glamorous look.",
        },
      ],
    },
    {
      category: "Men's Hair",
      images: [
        {
          id: 12,
          type: "image",
          src: "/assets/menhair1.jpg",
          alt: "Men's hair replacement system in Poole",
          caption: "Discreet, natural men’s hair replacement systems in Poole.",
        },
      ],
    },
    {
      category: "Salon",
      images: [
        {
          id: 13,
          type: "image",
          src: "/assets/saloninterior.jpg",
          alt: "Purpose-built salon interior at Glisten Hair & Aesthetics",
          caption: "Step into our purpose-built salon at 12 Oakfield Road, Poole BH15.",
        },
      ],
    },
  ];

  const categories = ["All", "Hair", "Aesthetics", "Spa", "Extensions", "Men's Hair", "Salon"];

  const filteredImages = activeCategory === "All"
    ? galleryImages.flatMap((group) => group.images)
    : galleryImages.find((group) => group.category === activeCategory)?.images || [];

  return (
    <AppLayout>
      <Banner />
      <Navigation />
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 animate-slide-in">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans text-glisten-gold mb-4">
            Our Work at Glisten Hair & Aesthetics
          </h1>
          <p className="text-base sm:text-lg font-sans text-glisten-blue max-w-3xl mx-auto">
            Experience the transformation at our premier Poole salon. Explore our expert hair styling, advanced aesthetics, and relaxing Japanese Head Spa treatments, crafted with over 15 years of expertise.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-mono transition-all duration-300 ${
                activeCategory === category
                  ? "bg-glisten-gold text-glisten-white"
                  : "bg-glisten-cream text-glisten-olive hover:bg-glisten-butter"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredImages.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden bg-glisten-white border-none shadow-md hover:shadow-xl transition-shadow duration-300 animate-fade-in"
            >
              <CardContent className="p-0">
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    aria-label={item.alt}
                    className="w-full h-48 sm:h-64 object-cover transition-transform duration-300 hover:scale-105"
                    muted
                    loop
                    autoPlay
                    playsInline
                    onClick={() => setSelectedImage(item.src)}
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-48 sm:h-64 object-cover transition-transform duration-300 hover:scale-105"
                    onClick={() => setSelectedImage(item.src)}
                  />
                )}
                <div className="p-4 bg-glisten-butter">
                  <span className="inline-block bg-glisten-sage text-glisten-white px-3 py-1 rounded-full text-xs sm:text-sm font-mono">
                    {galleryImages.find((group) => group.images.includes(item))?.category}
                  </span>
                  <p className="mt-2 text-sm text-glisten-olive/80">{item.caption}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-glisten-olive mb-4">
            Ready to Transform Your Look?
          </h3>
          <p className="text-lg text-glisten-olive/80 mb-6">
            Book your appointment at Glisten Hair & Aesthetics in Poole today and experience our expert hair and aesthetics services.
          </p>
          <a href="https://that-time.co.uk/glisten-hair-aesthetics" target="_blank" rel="noopener noreferrer">
            <Button
              className="bg-glisten-gold hover:bg-glisten-yellow text-glisten-olive font-semibold py-3 px-6"
            >
              Book Online Now
            </Button>
          </a>
        </div>

        {/* Modal for Enlarged Image/Video */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-glisten-white bg-glisten-gold rounded-full p-2 hover:bg-glisten-yellow font-mono"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
              {filteredImages.find((item) => item.src === selectedImage)?.type === "video" ? (
                <video
                  src={selectedImage}
                  aria-label={
                    filteredImages.find((item) => item.src === selectedImage)?.alt ||
                    "Enlarged gallery video"
                  }
                  className="w-full h-90vh object-contain rounded-lg"
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <img
                  src={selectedImage}
                  alt={
                    filteredImages.find((item) => item.src === selectedImage)?.alt ||
                    "Enlarged gallery image"
                  }
                  className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default Gallery;