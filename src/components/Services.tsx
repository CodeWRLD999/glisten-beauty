import React from 'react';
import ServiceCard from './ServiceCard';
import { Helmet } from 'react-helmet';

const Services = () => {
  const services = [
    {
      title: 'Ladies Hairdressing',
      description: 'Cuts, colour and styling tailored to you.',
      features: ['Colours', 'Highlights', 'Cuts', 'Keratin straightening', 'Perms', 'Blonding'],
    },
    {
      title: "Men’s Hair Replacement",
      description: 'A non-invasive, natural-looking alternative to transplants.',
      features: ['Full consultation', 'Colour matching', 'Fitting', 'Maintenance', 'Aftercare'],
      featured: true,
    },
    {
      title: 'Hair Extensions',
      description: 'Fitting and maintenance for fuller, longer hair.',
      features: ['Tape extensions', 'Nano extensions', 'Weaves', 'Mesh Integration'],
    },
    {
      title: 'Aesthetics Treatments',
      description: 'Advanced treatments designed for subtle, confidence-boosting results.',
      features: [
        'Lip filler',
        'Facial fillers',
        'Anti-wrinkle treatment',
        'Lemonbottle fat dissolving',
        'Vitamin B12 injections',
        'Skin Boosters',
        'Dermaplaning',
        'Microneedling',
        'Skin Tag Removal',
      ],
      featured: true,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Services - Glisten Hair & Aesthetics, Poole BH15</title>
        <meta
          name="description"
          content="Explore services at Glisten Hair & Aesthetics in Poole BH15. Ladies hairdressing, men’s hair replacement, aesthetics, and hair extensions — delivered with 15+ years of expertise. Book now!"
        />
        <meta
          name="keywords"
          content="services hairdresser near me, men’s hair replacement near me, hair stylist Poole, aesthetics Poole, hair extensions Poole, Poole BH15"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href="https://hair-replacement-landing-op7bgkptj-glisten-aesthetics.vercel.app/services"
        />
      </Helmet>

      <section id="services" className="relative py-20">
        {/* same subtle overlay approach as About for readability on the page gradient */}
        <div className="pointer-events-none absolute inset-0 bg-white/15" />
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/30 px-4 py-2 text-sm font-medium text-glisten-olive/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-rose-400" />
              Hair • Aesthetics • Poole BH15
            </div>

            <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-glisten-olive">
              Services
            </h2>

            <p className="mt-4 text-lg md:text-xl text-glisten-olive/70 max-w-3xl mx-auto">
              A curated menu of hair and aesthetics services in a calm, purpose-built home salon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;