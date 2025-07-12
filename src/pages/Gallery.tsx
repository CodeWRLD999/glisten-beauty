import AppLayout from "@/components/AppLayout";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from '@/components/Navigation.tsx';
import Banner from '@/components/Banner.tsx';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const galleryImages = [
    {
      id: 1,
      src: "/assets/hairdressing.jpg",
      alt: "Professional hair styling at Glisten Hair & Aesthetics in Poole",
      category: "Hair",
    },
    {
      id: 2,
      src: "/assets/cosmetic.jpg",
      alt: "Aesthetic treatment results at Glisten Hair & Aesthetics",
      category: "Aesthetics",
    },
    {
      id: 3,
      src: "/assets/japanese2.jpg",
      alt: "Relaxing Japanese Head Spa in Poole",
      category: "Spa",
    },
    {
      id: 4,
      src: "/assets/extension.jpg",
      alt: "Hair extensions fitting at Glisten Hair & Aesthetics",
      category: "Extensions",
    },
    {
      id: 5,
      src: "/assets/menhair1.jpg",
      alt: "Men's hair replacement system in Poole",
      category: "Men's Hair",
    },
    {
      id: 6,
      src: "/assets/saloninterior.jpg",
      alt: "Purpose-built salon interior at Glisten Hair & Aesthetics",
      category: "Salon",
    },
  ];

  const categories = ["All", "Hair", "Aesthetics", "Spa", "Extensions", "Men's Hair", "Salon"];

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <AppLayout>
      <Banner />
      <Navigation />
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 animate-slide-in">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans text-glisten-gold mb-4">
            Gallery
          </h1>
          <p className="text-base sm:text-lg font-sans text-glisten-blue max-w-3xl mx-auto">
            Discover the artistry of Glisten Hair & Aesthetics at our Poole salon. Browse our work in hair, aesthetics, and more.
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
          {filteredImages.map((image) => (
            <Card
              key={image.id}
              className="overflow-hidden bg-glisten-white border-none shadow-md hover:shadow-xl transition-shadow duration-300 animate-fade-in"
            >
              <CardContent className="p-0">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-48 sm:h-64 object-cover transition-transform duration-300 hover:scale-105"
                  onClick={() => setSelectedImage(image.src)}
                />
                <div className="p-4 bg-glisten-butter">
                  <span className="inline-block bg-glisten-sage text-glisten-white px-3 py-1 rounded-full text-xs sm:text-sm font-mono">
                    {image.category}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal for Enlarged Image */}
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
              <img
                src={selectedImage}
                alt="Enlarged gallery image"
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default Gallery;