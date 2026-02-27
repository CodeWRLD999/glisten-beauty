import React from 'react';
import { Button } from '@/components/ui/button';
import Head from 'next/head';
import "@/components/hero.css";

const Hero = () => {
  return (
    <>
      <Head>
        <title>Glisten Hair & Aesthetics - Expert Hair & Aesthetics in Poole BH15</title>
        <meta
          name="description"
          content="Glisten Hair & Aesthetics in Poole BH15 offers expert hairdressing, aesthetics treatments, hair extensions and men’s hair replacement. Book your appointment today."
        />
        <meta
          name="keywords"
          content="hair stylist Poole, aesthetics Poole, hair extensions Poole, men’s hair replacement Poole, Poole BH15"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://your-domain.vercel.app" />
      </Head>

      <section id="background" className="relative py-28 overflow-hidden">
        {/* Keep your existing section background layer (can stay empty if you want) */}
        <div id="background2" className="absolute inset-0 -z-20" />

        {/* Global soft fade so the page stays readable */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/35 via-white/10 to-white/35" />

        <div className="relative z-10 container mx-auto px-6">
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/40 bg-white/35 backdrop-blur-md shadow-sm px-6 py-12 md:px-12">
            <div className="text-center relative">
              {/* ✅ Animated spotlight behind headline (adds depth without chaos) */}
              <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 w-[92%] md:w-[85%] h-[260px] md:h-[320px] -z-10">
                <div className="w-full h-full rounded-[48px] md:rounded-[64px] overflow-hidden opacity-70 blur-[2px]">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: "url('/assets/indexbanner.gif')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                </div>
                {/* soft mask fade so edges melt into the card */}
                <div className="absolute inset-0 rounded-[48px] md:rounded-[64px] bg-gradient-to-b from-white/25 via-transparent to-white/35" />
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/45 px-4 py-2 text-sm font-medium text-glisten-olive/80 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-rose-400" />
                15+ Years Experience • Poole BH15
              </div>

              {/* Main Heading */}
              <h1 className="mt-8 text-4xl md:text-6xl font-semibold tracking-tight leading-tight 
text-[#1c1c1e]">
                Hair & Aesthetics
                <span className="block text-rose-500/90">
                  Refined. Personal. Professional.
                </span>
              </h1>

              {/* Subtext */}
              <p className="mt-6 text-lg md:text-xl text-glisten-olive/75 leading-relaxed max-w-3xl mx-auto">
                A calm, purpose-built home salon offering ladies hairdressing, aesthetics treatments,
                hair extensions and men’s hair replacement — delivered with over 15 years of expertise.
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://that-time.co.uk/glisten-hair-aesthetics"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="rounded-xl bg-rose-500/90 hover:bg-rose-500 text-white font-semibold px-8 py-6 shadow-sm transition"
                  >
                    Book Appointment
                  </Button>
                </a>

                <a href="/#services">
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-xl border-white/60 bg-white/35 text-glisten-olive hover:bg-white/55 px-8 py-6 transition"
                  >
                    View Services
                  </Button>
                </a>
              </div>

              {/* Location */}
              <div className="mt-10 text-glisten-olive/60 text-sm md:text-base">
                <p className="font-medium">
                  📍 12 Oakfield Road, Poole BH15 3BG
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;