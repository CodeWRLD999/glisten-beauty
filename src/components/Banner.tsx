import React from 'react';
import { Helmet } from 'react-helmet';
import "@/components/Banner.css";

const Banner = () => {
  return (
    <>
      <Helmet>
        <title>Glisten Hair & Aesthetics - Premier Hair Stylist in Poole BH15</title>
        <meta
          name="description"
          content="Welcome to Glisten Hair & Aesthetics, your premier hair stylist in Poole BH15. Discover expert hairdressing, aesthetics, and men’s hair replacement. Book your visit today!"
        />
        <meta
          name="keywords"
          content="hairdresser near me, men’s hair replacement near me, hair stylist Poole, aesthetics Poole, Poole BH15"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href="https://hair-replacement-landing-op7bgkptj-glisten-aesthetics.vercel.app"
        />
      </Helmet>

      {/* Top Banner */}
      <div
        id="backing"
        className="relative py-3 px-2 border-b border-white/40 bg-white/25 backdrop-blur shadow-sm"
      >
        {/* subtle blush/silver accent */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-zinc-100/30 via-white/10 to-rose-200/30" />

        <div className="relative container mx-auto flex items-center justify-center">
          <div className="text-center">
            {/* Logo pill */}
            <div
              id="backing2"
              className="inline-flex items-center justify-center rounded-2xl border border-white/40 bg-white/35 backdrop-blur px-4 py-2 shadow-sm opacity-0"
            >
              <img
                src="/assets/placeholderlogo.png"
                alt="Glisten Hair & Aesthetics"
                className="h-10 w-auto md:h-11 fill-transparent opacity-0"
                loading="eager"
              />
            </div>

            {/* Optional microcopy (remove if you want it super minimal) */}
            <p className="sr-only">
              Poole BH15 • Hair • Aesthetics • Men’s Hair Replacement
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;