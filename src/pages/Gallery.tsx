import React, { useMemo, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AppLayout from '@/components/AppLayout';
import Navigation from '@/components/Navigation.tsx';
import Banner from '@/components/Banner.tsx';
import { Helmet } from 'react-helmet';

type MediaItem = {
  id: number;
  type: 'image' | 'video';
  src: string;
  alt: string;
  caption: string;
  category: 'Hair' | 'Aesthetics' | 'Extensions' | "Men's Hair" | 'Salon';
};

const Gallery = () => {
  const [selectedSrc, setSelectedSrc] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<'All' | MediaItem['category']>('All');

  const items: MediaItem[] = useMemo(
    () => [
      // Hair
      {
        id: 1,
        type: 'image',
        src: '/assets/hairdressing.jpg',
        alt: 'Professional hair styling at Glisten Hair & Aesthetics in Poole',
        caption: 'Precision cuts and colour tailored to you in our Poole salon.',
        category: 'Hair',
      },
      {
        id: 2,
        type: 'image',
        src: '/assets/hair8.jpg',
        alt: 'Professional hair styling at Glisten Hair & Aesthetics in Poole',
        caption: 'Precision cuts and colour tailored to you in our Poole salon.',
        category: 'Hair',
      },
      {
        id: 4,
        type: 'image',
        src: '/assets/hair3.jpg',
        alt: 'Professional hair styling at Glisten Hair & Aesthetics in Poole',
        caption: 'Precision cuts and colour tailored to you in our Poole salon.',
        category: 'Hair',
      },
      {
        id: 5,
        type: 'image',
        src: '/assets/hair4.jpg',
        alt: 'Professional hair styling at Glisten Hair & Aesthetics in Poole',
        caption: 'Precision cuts and colour tailored to you in our Poole salon.',
        category: 'Hair',
      },


      // Aesthetics
      {
        id: 6,
        type: 'image',
        src: '/assets/cosmetic.jpg',
        alt: 'Aesthetic treatment results at Glisten Hair & Aesthetics',
        caption: 'Advanced facial fillers and anti-wrinkle treatments for a refreshed look.',
        category: 'Aesthetics',
      },
      {
        id: 7,
        type: 'image',
        src: '/assets/cosmetic2.jpg',
        alt: 'Facial aesthetics at Glisten Hair & Aesthetics in Poole',
        caption:
          'Expert anti-wrinkle treatments for smoother, natural-looking results.',
        category: 'Aesthetics',
      },
      {
        id: 8,
        type: 'image',
        src: '/assets/cosmetic3.jpg',
        alt: 'Lip filler results at Glisten Hair & Aesthetics in Poole',
        caption:
          'Beautifully balanced lip filler designed for natural enhancement and confidence.',
        category: 'Aesthetics',
      },
      {
        id: 9,
        type: 'image',
        src: '/assets/cosmetic4.jpg',
        alt: 'Dermaplaning results at Glisten Hair & Aesthetics in Poole',
        caption:
          'Dermaplaning treatments to refresh and brighten the skin for a flawless finish.',
        category: 'Aesthetics',
      },

      // Extensions
      {
        id: 10,
        type: 'image',
        src: '/assets/extension.jpg',
        alt: 'Hair extensions fitting at Glisten Hair & Aesthetics',
        caption: 'Expertly fitted extensions for a seamless, elegant finish.',
        category: 'Extensions',
      },
      {
        id: 11,
        type: 'image',
        src: '/assets/extension2.jpg',
        alt: 'Natural hair extensions at Glisten Hair & Aesthetics in Poole',
        caption: 'Transform your style with stunning length and volume.',
        category: 'Extensions',
      },
      {
        id: 12,
        type: 'image',
        src: '/assets/extension3.jpg',
        alt: 'Hair extensions results at Glisten Hair & Aesthetics in Poole',
        caption: 'Flawless extensions for a polished, glamorous look.',
        category: 'Extensions',
      },
      {
        id: 13,
        type: 'image',
        src: '/assets/extension4.jpg',
        alt: 'Hair extensions results at Glisten Hair & Aesthetics in Poole',
        caption: 'Invisible weave extensions.',
        category: 'Extensions',
      },

      // Men’s Hair
      {
        id: 14,
        type: 'image',
        src: '/assets/menhair1.jpg',
        alt: "Men's hair replacement system in Poole",
        caption: 'Discreet, natural-looking men’s hair replacement systems in Poole.',
        category: "Men's Hair",
      },
      {
        id: 15,
        type: 'image',
        src: '/assets/menhair3.jpg',
        alt: "Men's hair replacement system in Poole",
        caption: 'Discreet, natural-looking men’s hair replacement systems in Poole.',
        category: "Men's Hair",
      },

      // Salon
      {
        id: 16,
        type: 'image',
        src: '/assets/saloninterior.jpg',
        alt: 'Purpose-built salon interior at Glisten Hair & Aesthetics',
        caption: 'Our purpose-built salon at 12 Oakfield Road, Poole BH15.',
        category: 'Salon',
      },
    ],
    []
  );

  const categories: Array<'All' | MediaItem['category']> = useMemo(
    () => ['All', 'Hair', 'Aesthetics', 'Extensions', "Men's Hair", 'Salon'],
    []
  );

  const filtered = useMemo(() => {
    return activeCategory === 'All'
      ? items
      : items.filter((i) => i.category === activeCategory);
  }, [activeCategory, items]);

  const selectedItem = useMemo(
    () => (selectedSrc ? items.find((i) => i.src === selectedSrc) : null),
    [selectedSrc, items]
  );

  return (
    <>
      <Helmet>
        <title>Gallery - Glisten Hair & Aesthetics, Poole BH15</title>
        <meta
          name="description"
          content="Explore the gallery at Glisten Hair & Aesthetics in Poole BH15. View hair styling, aesthetics, men’s hair replacement, hair extensions, and our purpose-built salon. Book now!"
        />
        <meta
          name="keywords"
          content="gallery hairdresser Poole, hair stylist Poole, aesthetics Poole, hair extensions Poole, men’s hair replacement Poole, Poole BH15"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href="https://hair-replacement-landing-op7bgkptj-glisten-aesthetics.vercel.app/gallery"
        />
      </Helmet>

      <AppLayout>
        <Banner />
        <Navigation />

        <section className="relative py-16">
          {/* subtle overlay so content reads nicely on the site gradient */}
          <div className="pointer-events-none absolute inset-0 bg-white/12" />

          <div className="relative container mx-auto px-4 sm:px-6">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/30 px-4 py-2 text-sm font-medium text-glisten-olive/80 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-rose-400" />
                Gallery • Real results • Poole BH15
              </div>

              <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-glisten-olive">
                Our Work
              </h1>

              <p className="mt-4 text-base sm:text-lg text-glisten-olive/70 max-w-3xl mx-auto leading-relaxed">
                Explore a selection of hair, aesthetics, extensions and men’s hair replacement work — plus our
                purpose-built salon space.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
              {categories.map((category) => {
                const active = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={[
                      'px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-200',
                      'border backdrop-blur',
                      active
                        ? 'bg-rose-500/90 text-white border-rose-400/40 shadow-sm'
                        : 'bg-white/30 text-glisten-olive/80 border-white/40 hover:bg-white/45',
                    ].join(' ')}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {filtered.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden border border-white/40 bg-white/30 backdrop-blur shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-0">
                    {item.type === 'video' ? (
                      <video
                        src={item.src}
                        aria-label={item.alt}
                        className="w-full h-52 sm:h-64 object-cover cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
                        muted
                        loop
                        autoPlay
                        playsInline
                        onClick={() => setSelectedSrc(item.src)}
                      />
                    ) : (
                      <img
                        src={item.src}
                        alt={item.alt}
                        loading="lazy"
                        className="w-full h-52 sm:h-64 object-cover cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
                        onClick={() => setSelectedSrc(item.src)}
                      />
                    )}

                    <div className="p-4">
                      <div className="flex items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/25 px-3 py-1 text-xs sm:text-sm text-glisten-olive/75">
                          <span className="h-2 w-2 rounded-full bg-rose-300" />
                          {item.category}
                        </span>
                      </div>

                      <p className="mt-3 text-sm text-glisten-olive/75 leading-relaxed">
                        {item.caption}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-14">
              <div className="mx-auto max-w-3xl rounded-2xl border border-white/40 bg-white/30 backdrop-blur p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-glisten-olive">
                  Ready to book?
                </h3>
                <p className="mt-3 text-glisten-olive/70 text-lg leading-relaxed">
                  Book your appointment at Glisten Hair & Aesthetics in Poole and experience a calm, professional service.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="https://that-time.co.uk/glisten-hair-aesthetics"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="rounded-xl bg-rose-500/90 hover:bg-rose-500 text-white font-semibold px-6 py-6 shadow-sm">
                      Book Online
                    </Button>
                  </a>

                  <a href="/#services">
                    <Button className="rounded-xl bg-white/40 hover:bg-white/55 text-glisten-olive border border-white/50 font-semibold px-6 py-6">
                      View Services
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Modal */}
            {selectedSrc && (
              <div
                className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                onClick={() => setSelectedSrc(null)}
              >
                <div
                  className="relative max-w-5xl max-h-[90vh] w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="absolute top-3 right-3 rounded-full border border-white/30 bg-white/10 backdrop-blur px-3 py-2 text-white hover:bg-white/20 transition"
                    onClick={() => setSelectedSrc(null)}
                    aria-label="Close"
                  >
                    ✕
                  </button>

                  {selectedItem?.type === 'video' ? (
                    <video
                      src={selectedSrc}
                      aria-label={selectedItem?.alt || 'Enlarged gallery video'}
                      className="w-full max-h-[90vh] object-contain rounded-2xl"
                      controls
                      autoPlay
                      playsInline
                    />
                  ) : (
                    <img
                      src={selectedSrc}
                      alt={selectedItem?.alt || 'Enlarged gallery image'}
                      className="w-full max-h-[90vh] object-contain rounded-2xl"
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </section>
      </AppLayout>
    </>
  );
};

export default Gallery;