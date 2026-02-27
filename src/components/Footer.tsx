import React from 'react';
import { Helmet } from 'react-helmet';
import '@/components/Banner.css';

const Footer = () => {
  return (
    <>
      <Helmet>
        <title>Glisten Hair & Aesthetics - Hair, Aesthetics & Hair Replacement in Poole BH15</title>
        <meta
          name="description"
          content="Glisten Hair & Aesthetics in Poole BH15 offers ladies hairdressing, hair extensions, aesthetics treatments, and men’s hair replacement. Visit 12 Oakfield Road. Book online now!"
        />
        <meta
          name="keywords"
          content="hairdresser near me, men’s hair replacement near me, hair stylist Poole, aesthetics Poole, hair extensions Poole, Poole BH15"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href="https://hair-replacement-landing-op7bgkptj-glisten-aesthetics.vercel.app"
        />
      </Helmet>

      <footer className="relative pt-20 pb-12">

        {/* Soft overlays */}
        <div className="pointer-events-none absolute inset-0 bg-white/10" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/15" />

        <div className="relative container mx-auto px-6">

          {/* 🔥 BIG CENTERED IMAGE */}
          <div className="flex justify-center mb-14">
            <div className="rounded-3xl bg-white/20 backdrop-blur border border-white/40 p-4 shadow-md">
              <img
                src="/assets/hairdressermain2.png"
                alt="Glisten Hair & Aesthetics"
                className="h-40 w-40 md:h-52 md:w-52 lg:h-60 lg:w-60 object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
                loading="lazy"
              />
            </div>
          </div>

          {/* CONTENT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

            {/* About */}
            <div>
              <p className="text-glisten-olive/75 leading-relaxed">
                A calm, professional space for hair and aesthetics in Poole BH15 — backed by 15+ years of experience.
              </p>

              <div className="mt-6 inline-flex items-start gap-3 rounded-2xl border border-white/35 bg-white/25 backdrop-blur p-4">
                <span className="mt-0.5">📍</span>
                <div className="text-glisten-olive/80">
                  <p className="font-semibold text-glisten-olive">12 Oakfield Road</p>
                  <p>Poole BH15 3BG</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                <a
                  href="https://that-time.co.uk/glisten-hair-aesthetics"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold bg-rose-500 hover:bg-rose-600 text-white shadow-sm transition">
                    Book Online
                  </span>
                </a>

                <a
                  href="https://maps.google.com/?q=12+Oakfield+Road,+Poole+BH15+3BG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold bg-white/40 hover:bg-white/60 text-glisten-olive border border-white/50 transition">
                    Directions
                  </span>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-glisten-olive mb-4">
                Services
              </h4>
              <ul className="space-y-3 text-glisten-olive/75 inline-block md:block text-left">
                {[
                  'Ladies Hairdressing',
                  'Hair Extensions',
                  "Men’s Hair Replacement",
                  'Aesthetics Treatments',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-rose-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Keywords */}
            <div>
              <h4 className="text-lg font-semibold text-glisten-olive mb-4">
                Find us for
              </h4>

              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {[
                  'Hair stylist Poole',
                  'Hairdressing BH15',
                  'Aesthetics Poole',
                  'Men’s hair replacement',
                  'Hair extensions Poole',
                  'Poole BH15',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/40 bg-white/25 backdrop-blur px-4 py-1.5 text-sm text-glisten-olive/75"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-sm text-glisten-olive/60 leading-relaxed">
                Looking to book? Use the booking link for availability and payment options including Klarna/Clearpay.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-14 border-t border-white/30 pt-6 text-center">
            <p className="text-sm text-glisten-olive/60">
              © {new Date().getFullYear()} Glisten Hair & Aesthetics. All rights reserved.
              <span className="hidden sm:inline"> • </span>
              <span className="block sm:inline">
                12 Oakfield Road, Poole BH15 3BG
              </span>
            </p>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;