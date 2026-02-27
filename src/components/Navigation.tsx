import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((s) => !s);

  const navLink =
    'relative px-4 py-3 text-base font-semibold tracking-wide text-glisten-olive/85 hover:text-glisten-olive transition';
  const navUnderline =
    'after:absolute after:left-4 after:right-4 after:-bottom-1 after:h-[2px] after:rounded-full after:bg-rose-400/80 after:opacity-0 hover:after:opacity-100 after:transition';

  const mobileLink =
    'rounded-xl px-4 py-3 text-glisten-olive/85 font-semibold bg-white/20 hover:bg-white/40 border border-white/30 transition';

  return (
    <nav className="sticky top-0 z-50 bg-white/35 backdrop-blur-md shadow-[0_8px_25px_rgba(0,0,0,0.06)]">
      {/* subtle premium bottom highlight */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-rose-300/60 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4 md:py-5">

          {/* Bigger Logo */}
          <a href="/" className="flex items-center">
            <div className="h-14 w-14 md:h-16 md:w-16 lg:h-18 lg:w-18 shrink-0">
              <img
                src="/assets/placeholderlogo2.png"
                alt="Glisten Hair & Aesthetics"
                className="h-full w-full object-contain opacity-95 saturate-80 contrast-95 drop-shadow-[0_8px_18px_rgba(0,0,0,0.15)]"
                loading="eager"
              />
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a href="/" className={`${navLink} ${navUnderline}`}>
              Home
            </a>
            <a href="/#services" className={`${navLink} ${navUnderline}`}>
              Services
            </a>
            <a href="/#about" className={`${navLink} ${navUnderline}`}>
              About
            </a>
            <a href="/gallery" className={`${navLink} ${navUnderline}`}>
              Gallery
            </a>
            <a href="/#contact" className={`${navLink} ${navUnderline}`}>
              Contact
            </a>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">

            {/* Book Now Button */}
            <div className="hidden md:block">
              <a
                href="https://that-time.co.uk/glisten-hair-aesthetics"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-xl bg-rose-500/90 hover:bg-rose-500 text-white font-semibold shadow-md px-6 py-5 text-sm tracking-wide">
                  Book Now — Klarna/Clearpay Available
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center rounded-xl bg-white/30 hover:bg-white/45 border border-white/40 backdrop-blur px-3 py-2 text-glisten-olive transition"
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

          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} pb-4`}>
          <div className="mt-2 rounded-2xl bg-white/30 backdrop-blur-md border border-white/35 shadow-sm p-4">
            <div className="flex flex-col gap-3">
              <a href="/" className={mobileLink} onClick={() => setIsOpen(false)}>
                Home
              </a>
              <a href="/#services" className={mobileLink} onClick={() => setIsOpen(false)}>
                Services
              </a>
              <a href="/#about" className={mobileLink} onClick={() => setIsOpen(false)}>
                About
              </a>
              <a href="/gallery" className={mobileLink} onClick={() => setIsOpen(false)}>
                Gallery
              </a>
              <a href="/#contact" className={mobileLink} onClick={() => setIsOpen(false)}>
                Contact
              </a>

              <a
                href="https://that-time.co.uk/glisten-hair-aesthetics"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                <Button className="w-full rounded-xl bg-rose-500/90 hover:bg-rose-500 text-white font-semibold shadow-md py-6">
                  Book Now — Klarna/Clearpay Available
                </Button>
              </a>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navigation;